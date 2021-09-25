import os
import requests
import json
import re
import frontmatter

proxies = {
  'http': 'http://127.0.0.1:7890',
  'https': 'http://127.0.0.1:7890',
}

def fetch_ques_meta(ques_id: str):
  url = "https://leetcode-cn.com/graphql/"

  payload = {
    "operationName": "questionData",
    "variables": {
        "titleSlug": ques_id,
    },
    "query": "query questionData($titleSlug: String!) {\n  question(titleSlug: $titleSlug) {\n    questionId\n    questionFrontendId\n    categoryTitle\n    boundTopicId\n    title\n    titleSlug\n    content\n    translatedTitle\n    translatedContent\n    isPaidOnly\n    difficulty\n    likes\n    dislikes\n    isLiked\n    similarQuestions\n    contributors {\n      username\n      profileUrl\n      avatarUrl\n      __typename\n    }\n    langToValidPlayground\n    topicTags {\n      name\n      slug\n      translatedName\n      __typename\n    }\n    companyTagStats\n    codeSnippets {\n      lang\n      langSlug\n      code\n      __typename\n    }\n    stats\n    hints\n    solution {\n      id\n      canSeeDetail\n      __typename\n    }\n    status\n    sampleTestCase\n    metaData\n    judgerAvailable\n    judgeType\n    mysqlSchemas\n    enableRunCode\n    envInfo\n    book {\n      id\n      bookName\n      pressName\n      source\n      shortDescription\n      fullDescription\n      bookImgUrl\n      pressImgUrl\n      productUrl\n      __typename\n    }\n    isSubscribed\n    isDailyQuestion\n    dailyRecordStatus\n    editorType\n    ugcQuestionId\n    style\n    exampleTestcases\n    __typename\n  }\n}\n"
  }
  payload = json.dumps(payload)
  
  headers = {
    'user-agent': 'Mozilla/5.0',
    'content-type': 'application/json',
  }

  response = requests.request("POST", url, headers=headers, data = payload, proxies = proxies)

  return response.json()['data']['question']

def parse_meta(ques_meta):
  meta = {}
  # 我自己要的题目id
  ques_fe_id = re.search(r'[A-Za-z0-9\s_\-]+', ques_meta['questionFrontendId'])
  ques_fe_id = ques_fe_id.group()
  ques_fe_id = ques_fe_id.strip().replace(' ', '')
  ver = ques_fe_id.count('I')
  ques_fe_id = re.sub(r'-I+$', f'v{ver}', ques_fe_id)

  meta['platform'] = 'leetcode'
  meta['id'] = ques_fe_id
  meta['name'] = ques_meta['translatedTitle']
  meta['online_name'] = ques_meta['questionFrontendId'] + '. ' + ques_meta['translatedTitle']
  # meta['ques_desc'] = ques_meta['translatedContent']
  meta['level'] = ques_meta['difficulty'][0].lower()
  meta['tags'] = [tag['translatedName'] for tag in ques_meta['topicTags']]
  meta['online_link'] = f"https://leetcode-cn.com/problems/{ques_meta['titleSlug']}/"
  
  return meta


def parse_ques_id(link: str):
  return link.rsplit('/', 2)[1]


def process_leetcode_online():
  # link = 'https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/'
  # link = 'https://leetcode-cn.com/problems/Ygoe9J/'
  link = input('输入LeetCode题目链接：')
  file_ext = input('代码语言（py）：') or 'py'
  
  ques_id = parse_ques_id(link)
  ques_meta = fetch_ques_meta(ques_id)
  ques_meta = parse_meta(ques_meta)
  
  target_dir = f"{ques_meta['platform']}.{ques_meta['id']}.{ques_meta['name']}"
  target_dir = f"code/{target_dir}"

  if not os.path.isdir(target_dir):
    os.makedirs(target_dir)

  target_idx_fname = f"{target_dir}/index.md"
  fdm = frontmatter.loads('')
  for key, val in ques_meta.items():
    print(f'设置参数：{key} --- {val}')
    fdm.__setitem__(key, val)
  with open(target_idx_fname, 'w+') as fd:
    fd.write(frontmatter.dumps(fdm))
  
  target_sol_fname = f"{target_dir}/1.{file_ext}"
  with open(target_sol_fname, 'w+') as fd:
    fd.write('\n')
  
  print('好嘞')


def process():
  platform = input('输入平台(leetcode)：') or 'leetcode'
  ques_no = input('输入题号：')
  ques_desc = input('输入题目名称：')
  file_ext = input('代码语言（py）：') or 'py'
  tags = input('输入标签（tag1#tag2#tagn）：') or '标签'
  level = input('输入难度(h/m/[e])') or 'e'

  file_dir = os.path.join('code', '{0}.{1}.{2}'.format(platform, ques_no, ques_desc))
  os.makedirs(file_dir)
  file_loc = os.path.join(file_dir, '1.{}'.format(file_ext))

  with open(file_loc, 'w') as file:
    file.write('# ##{}##level{}\n'.format(tags, level))

  print('好了')

if __name__ == '__main__':
  # process()
  process_leetcode_online()

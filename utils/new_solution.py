import os
import requests
import json
import re
import frontmatter
from common import *

proxies = {
  'http': 'http://127.0.0.1:7890',
  'https': 'http://127.0.0.1:7890',
}

default_ext = 'java'

# 题解mdx模板
solution_tmpl = """---
tags:
<tags>
id: <plat>_<ques_id>
title: <level_icon> <ques_name>
ques_id: <ques_id>
platform: <plat>
online_link: <link>
online_name: <og_name>
level: <level_code>
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

:::tip LeetCode 提示

题目难度 <level>

原题链接 [🔗 <plat>](<link>)

:::

## 题解1

```<ext>
```
"""

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
  link = link[len('https://leetcode-cn.com/problems/'):]
  return link.split('/')[0]


def process_leetcode_online():
  # link = 'https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/'
  # link = 'https://leetcode-cn.com/problems/Ygoe9J/'
  link = input('输入LeetCode题目链接：')
  file_ext = input(f'代码语言（{default_ext}）：') or default_ext
  
  ques_id = parse_ques_id(link)
  ques = fetch_ques_meta(ques_id)
  ques = parse_meta(ques)
  
  category = input('设置目录：（剑指offer专项版）') or '剑指offer专项版'
  
  target_filename = f"{ques['platform']}_{ques['id']}.mdx"
  target_dir = f"docs/docs/{category}"

  target_idx_fname = f"{target_dir}/{target_filename}"
  
  if os.path.isfile(target_idx_fname):
    goon = input('文件已存在，是否要继续？(y/N)') or 'N'
    if goon == 'y':
      print('好的继续')
      pass
    else:
      print('不搞了')
      return
  
  ques['tags'] += [category]
  tagsMd = '\n'.join([f"  - {tag}" for tag in ques['tags']])

  output_content = solution_tmpl\
    .replace('<og_name>', ques['name'])\
    .replace('<ques_name>', ques['online_name'])\
    .replace('<ques_id>', ques['id'])\
    .replace('<tags>', tagsMd)\
    .replace('<level_code>', ques['level'])\
    .replace('<level>', level_code_mapper[ques['level']])\
    .replace('<level_icon>', level_icon_mapper[ques['level']])\
    .replace('<plat>', ques['platform'])\
    .replace('<link>', ques['online_link'])\
    .replace('<ext>', file_ext)
  
  with open(target_idx_fname, 'w+') as f:
    f.write(output_content)
  
  print('好嘞')


if __name__ == '__main__':
  process_leetcode_online()

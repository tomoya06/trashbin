import glob
import re
import os
import frontmatter

level_tag_mapper = {
  'm': 'https://shields.io/badge/-中等-yellow?style=flat-square',
  'e': 'https://shields.io/badge/-简单-green?style=flat-square',
  'h': 'https://shields.io/badge/-困难-red?style=flat-square',
}

level_code_mapper = {
  'm': '<Highlight color="#ffc01e">中等</Highlight>',
  'e': '<Highlight color="#00b8a3">简单</Highlight>',
  'h': '<Highlight color="#ff375f">困难</Highlight>',
}

level_icon_mapper = {
  'm': '🟡',
  'e': '🟢',
  'h': '🔴',
}

ques_type_tag_mapper = {
  '贪心算法': '',
  '二分查找': '',
  '动态规划': '',
  '记忆化搜索': '',
  '回溯': '',
  '深度优先搜索': '',
  '广度优先搜索': '',
  '数学问题': '',
  '位运算': '',
  '递归': '',
}

main_ques_tags = [
  '剑指offer', '剑指offer专项版'
]
main_ques_tag_idx = len(main_ques_tags)

ques_map = {
  '剑指offer': [[], { 'total': 75, }],
  '剑指offer专项版': [[], { 'total': 119, }],
}

ques_level_tag_marker_reg = r'##(.+)##level(\w)'

def ques_no_display(ques_no):
  ques_no = re.findall(r"([\d_]+)", ques_no)[0]
  ques_nos = ques_no.split('_')
  ques_display = f"题库第{ques_nos[0]}题"
  if len(ques_nos) == 2:
    ques_display += f"，原题库第{ques_nos[1]}题"
  return ques_display

# 扫描所有文件，生成索引
def scan_all_files():
  for ques in glob.glob(r'code/*/index.md'):
    cur_res = dict()
    cur_fdm = frontmatter.load(ques)
    cur_res['platform'] = cur_fdm.get('platform', '-')
    cur_res['ques_no'] = cur_fdm.get('id', '0')
    cur_res['ques_name'] = cur_fdm.get('online_name') or cur_fdm.get('name') or 'unknown'
    cur_res['level'] = cur_fdm.get('level')

    tags = cur_fdm.get('tags')
    cur_res['tags'] = tags
    
    ques_dir = os.path.dirname(ques)
    all_solutions = []
    for ques_solution in glob.glob(os.path.join(ques_dir, '*')):
      [_, _, solution_name] = ques_solution.split(os.sep)
      ques_fileloc = '/'.join(ques_solution.split(os.sep))
      if solution_name.endswith('.md'):
        continue
      all_solutions.append([solution_name, ques_fileloc, ])
    cur_res['all_solutions'] = all_solutions
    cur_res['no_main_tags'] = [tag for tag in tags if tag not in main_ques_tags]

    for tag in tags:
      if tag in ques_map:
        ques_map[tag][0].append(cur_res)
      else:
        ques_map[tag] = [[cur_res,], {}]
  
  return ques_map


def code_content_purify(single_solution_content):
  single_solution_content = single_solution_content.split('\n')
  if re.search(ques_level_tag_marker_reg, single_solution_content[0]):
    single_solution_content = single_solution_content[1:]
  
  single_solution_content = '\n'.join(single_solution_content)
  return single_solution_content.strip()

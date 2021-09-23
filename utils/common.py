import glob
import re
import os

level_tag_mapper = {
  'm': 'https://shields.io/badge/-中等-yellow?style=flat-square',
  'e': 'https://shields.io/badge/-简单-green?style=flat-square',
  'h': 'https://shields.io/badge/-困难-red?style=flat-square',
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

def ques_no_display(ques_no):
  ques_no = re.findall(r"([\d_]+)", ques_no)[0]
  ques_nos = ques_no.split('_')
  ques_display = f"题库第{ques_nos[0]}题"
  if len(ques_nos) == 2:
    ques_display += f"，原题库第{ques_nos[1]}题"
  return ques_display

# 扫描所有文件，生成索引
def scan_all_files():
  # 默认从1.py或者1.js读标签
  start_ques = [ques for ques in glob.glob(r'code/*/1*') if ques.endswith('.js') or ques.endswith('.py')]
  for ques in start_ques:
    [_, ques_name, file_name] = ques.split(os.sep)
    [platform, ques_no, ques_name] = ques_name.split('.')

    ques_dir = os.path.dirname(ques)
    all_solutions = []

    for ques_solution in glob.glob(os.path.join(ques_dir, '*')):
      [_, _, solution_name] = ques_solution.split(os.sep)
      ques_fileloc = '/'.join(ques_solution.split(os.sep))
      all_solutions.append([solution_name, ques_fileloc, ])

    tags = []
    print('\n ==> parsing main file: ', ques )
    with open(ques, 'r') as ques_file:
      ques_line1 = ques_file.readline()
      search_tag = re.search('##(.+)##level(\w)', ques_line1)
      tags = search_tag.group(1).split('#')[:]
      level_name = level_tag_mapper[search_tag.group(2)]
      level_name = '![level]({})'.format(level_name)

    print(ques_no, tags)
    # 过滤了题库标签的标签列表
    no_main_tags = [tag for tag in tags if tag not in main_ques_tags]
    cur_res = [platform, ques_no, ques_name, level_name, all_solutions, no_main_tags, tags, ]
    
    for tag in tags:
      if tag in ques_map:
        ques_map[tag][0].append(cur_res)
      else:
        ques_map[tag] = [[cur_res,], {}]
  
  return ques_map

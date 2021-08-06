# 把code下面的所有作答按##tag##分类，输出给readme
# 注释头模板：
# ##贪心算法##levelm

import glob
import re
import os

level_tag_mapper = {
  'm': 'https://shields.io/badge/-中等-yellow?style=flat-square',
  'e': 'https://shields.io/badge/-简单-green?style=flat-square',
  'h': 'https://shields.io/badge/-困难-red?style=flat-square',
}

def scan_all_files():
  ques_map = {
    '剑指offer': [],
  }
  # 默认从1.py读标签
  for ques in glob.glob(r'code/*/1.*'):
    [_, ques_name, file_name] = ques.split(os.sep)
    [platform, ques_no, ques_name] = ques_name.split('.')

    ques_dir = os.path.dirname(ques)
    all_solutions = []

    for ques_solution in glob.glob(os.path.join(ques_dir, '*')):
      [_, _,solution_name] = ques_solution.split(os.sep)
      all_solutions.append([solution_name, ques_solution, ])

    tags = []
    with open(ques, 'r') as ques_file:
      ques_line1 = ques_file.readline()
      search_tag = re.search('##(.+)##level(\w)', ques_line1)
      tags = search_tag.group(1).split('#')[:]
      level_name = level_tag_mapper[search_tag.group(2)]
      level_name = '![level]({})'.format(level_name)

    print(ques, ques_no, tags)
    cur_res = [platform, ques_no, ques_name, level_name, all_solutions]
    for tag in tags:
      if tag in ques_map:
        ques_map[tag].append(cur_res)
      else:
        ques_map[tag] = [cur_res,]
  
  return ques_map

def gen_table(ques_map):
  gened_md = '## 题目列表\n\n'

  for cat_name, cat_ques_list in ques_map.items():
    gened_md += '\n### {cat_name}'.format(cat_name=cat_name)
    gened_md += '\n'
    gened_md += '\n| 平台 | 题号 | 名称 | 难度 | 题解 |'
    gened_md += '\n|--|--|--|--|--|'
    for ques in cat_ques_list:
      gened_md += '\n|{0}|{1}|{2}|{3}|'.format(ques[0], ques[1], ques[2], ques[3])
      for ques_file in ques[4]:
        gened_md += '[{0}]({1}) <br>'.format(ques_file[0], ques_file[1])
      gened_md += '|'
    gened_md += '\n\n'
  return gened_md

if __name__ == '__main__':
  ques_map = scan_all_files()
  gened_table = gen_table(ques_map)

  md_output = ''

  with open(r'template/readme.header.md', 'r') as md_header:
    md_output += md_header.read()
    md_output += '\n'
  
  md_output += gened_table
  md_output += '\n'

  with open(r'template/readme.footer.md', 'r') as md_header:
    md_output += md_header.read()
    md_output += '\n'

  with open(r'readme.md', 'w') as readme_output:
    readme_output.write(md_output)

  

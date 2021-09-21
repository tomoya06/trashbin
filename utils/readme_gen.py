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

def scan_all_files():
  ques_map = {
    '剑指offer': [[], { 'total': 75, }],
    '剑指offer专项版': [[], { 'total': 119, }],
  }
  # 默认从1.py读标签
  for ques in glob.glob(r'code/*/1*'):
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
    no_main_tags = [tag for tag in tags if tag not in main_ques_tags]
    cur_res = [platform, ques_no, ques_name, level_name, all_solutions, no_main_tags,]
    
    for tag in tags:
      if tag in ques_map:
        ques_map[tag][0].append(cur_res)
      else:
        ques_map[tag] = [[cur_res,], {}]
  
  return ques_map

def part_gen_table(ques_map_items):
  gened_md = ''
  for cat_name, ques_output in ques_map_items:
    [cat_ques_list, config] = ques_output
    gened_md += '\n### {cat_name}'.format(cat_name=cat_name)
    gened_md += '\n'

    if 'total' in config:
      pro_img = '\nhttps://progress-bar.dev/{0}/?scale={1}&title=completed&width=300&suffix={2}'.format(
        len(cat_ques_list), config['total'], '/'+str(config['total'])
      )
      gened_md += '\n![progress]({})'.format(pro_img)

    gened_md += '\n| 平台 | 题号 | 名称 | 难度 | 题解 | 标签 |'
    gened_md += '\n|--|--|--|--|--|--|'
    for ques in cat_ques_list:
      gened_md += '\n|{0}|{1}|{2}|{3}|'.format(ques[0], ques[1], ques[2], ques[3])
      for ques_file in ques[4]:
        gened_md += '[{0}]({1}) <br>'.format(ques_file[0], ques_file[1])
      gened_md += '|'
      for tag in ques[5]:
        gened_md += '#{} <br>'.format(tag)
      gened_md += '|'
    gened_md += '\n\n'
  return gened_md

def gen_table(ques_map):
  ques_items = list(ques_map.items())
  return part_gen_table(ques_items[:main_ques_tag_idx]), part_gen_table(ques_items[main_ques_tag_idx:])

if __name__ == '__main__':
  ques_map = scan_all_files()
  question_list, sorted_questions = gen_table(ques_map)


  with open(r'template/readme.template.md', 'r') as md_header:
    tmpl = md_header.read()
    tmpl = tmpl.replace("{_list_questions_}", question_list)
    tmpl = tmpl.replace("{_sorted_questions_}", sorted_questions)

  with open(r'readme.md', 'w') as readme_output:
    readme_output.write(tmpl)

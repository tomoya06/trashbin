# 把code下面的所有作答按##tag##分类，输出给readme
# 注释头模板：
# ##贪心算法##levelm

import glob
import re
import os

from common import *

# 生成某分类的题目表
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
      gened_md += '\n![progress]({})\n\n'.format(pro_img)

    gened_md += '\n| 平台 | 题号 | 名称 | 难度 | 题解 | 标签 |'
    gened_md += '\n|--|--|--|--|--|--|'
    for ques in cat_ques_list:
      gened_md += '\n|{0}|{1}|{2}|{3}|'.format(ques[0], ques[1], ques[2], ques[3])
      for ques_file in ques[4]:
        gened_md += '[{0}]({1}) <br />'.format(ques_file[0], ques_file[1])
      gened_md += '|'
      for tag in ques[5]:
        gened_md += '#{} <br />'.format(tag)
      gened_md += '|'
    gened_md += '\n\n'
  return gened_md


# 按分类生成题目表
def gen_gh_table(ques_map):
  ques_items = list(ques_map.items())
  main_questions, sorted_questions = part_gen_table(ques_items[:main_ques_tag_idx]), part_gen_table(ques_items[main_ques_tag_idx:])

  with open(r'template/readme.template.md', 'r') as md_header:
    tmpl = md_header.read()
    tmpl = tmpl.replace("{_list_questions_}", main_questions)
    tmpl = tmpl.replace("{_sorted_questions_}", sorted_questions)

  with open(r'readme.md', 'w') as readme_output:
    readme_output.write(tmpl)

# 生成doc的题目表
def gen_doc_table(ques_map):
  pass


# 生成doc
def gen_doc_index(ques_map):
  for main_ques_tag in main_ques_tags:
    if main_ques_tag not in ques_map:
      continue
    with open(r'template/doc.{0}.md'.format(main_ques_tag), 'r') as doc_tmpl:
      doc_tmpl = doc_tmpl.read()
      ques_table = part_gen_table([(main_ques_tag, ques_map[main_ques_tag], ), ])
      gen_doc = doc_tmpl.replace('{_list_questions_}', ques_table)

    target_dir = r'docs/docs/{0}'.format(main_ques_tag)
    if not os.path.exists(target_dir):
      os.makedirs(target_dir)
    with open(target_dir+'/index.md', 'w+') as doc_output:
      doc_output.write(gen_doc)


if __name__ == '__main__':
  ques_map = scan_all_files()
  gen_gh_table(ques_map)
  gen_doc_index(ques_map)

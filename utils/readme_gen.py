# 把code下面的所有作答按##tag##分类，输出给readme
import glob
import re

def scan_all_files():
  ques_map = {}
  # 默认从1.py读标签
  for ques in glob.glob(r'code/*/1.py'):
    [_, ques_name, file_name] = ques.split('/')
    [platform, ques_no, ques_name] = ques_name.split('.')
    with open(ques, 'r') as ques_file:
      ques_line1 = ques_file.readline()
      tags = re.search('##tag(.+)##tagend##', ques_line1).group(1)
      tags = tags.split('#')[1:]
      print(file_name, tags)
      cur_res = [platform, ques_no, ques_name, [[file_name, ques], ]]
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
    gened_md += '\n| 平台 | 题号 | 名称 | 题解 |'
    gened_md += '\n|--|--|--|--|'
    for ques in cat_ques_list:
      gened_md += '\n|{0}|{1}|{2}|'.format(ques[0], ques[1], ques[2])
      for ques_file in ques[3]:
        gened_md += '[{0}]({1}) '.format(ques_file[0], ques_file[1])
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

  

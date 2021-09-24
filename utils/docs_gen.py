from common import *
import os
import glob
import frontmatter
import time
import datetime
import json
import re

# 主目录里每道题模板
single_ques_tmpl = """
### <ques_name>

<tags>

<content>
"""

# 题解md模板
solution_tmpl = """---
tags:
  <tags>
id: <ques_name>
title: <level_icon> <ques_name>
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

:::

<content>
"""

output_dir_main = 'docs/docs/'
notes_dir = 'notepad/'

sidebar = {
  "codezone": {
    "Intro": ["codezone_intro"],
  },
  "note": [
    'note_intro',
  ]
}

def filename_sort(filename):
  if filename.endswith('.md'):
    ext = '.00'
  else:
    _, ext = os.path.splitext(filename)
  return filename[0] + ext


def gen_solution_doc(tag_name, ques):
  [platform, ques_no, ques_name, level_name, all_solutions, no_main_tags, tags, level_code, ] = ques
  output_dir = os.path.join(output_dir_main, tag_name)
  file_name = f'{ques_no}_{ques_name}'

  if not os.path.isdir(output_dir):
    os.makedirs(output_dir)
  
  all_solutions.sort(key=lambda x:filename_sort(x[0]))
  solution_content = ''
  for single_solution in all_solutions:
    solution_name, ques_fileloc = single_solution
    with open(ques_fileloc, 'r') as single_solution_content:
      single_solution_content = single_solution_content.read()
    if solution_name.endswith('.md'):
      solution_content += single_solution_content
    else:
      _, ext = os.path.splitext(ques_fileloc)
      single_solution_content = code_content_purify(single_solution_content)

      solution_content += f"## 题解 {solution_name}\n\n```{ext[1:]}\n{single_solution_content}\n```"

    solution_content += '\n\n'

  cur_tags = '\n  '.join(['- '+tag for tag in tags])

  
  output_content = solution_tmpl\
    .replace('<ques_name>', ques_name)\
    .replace('<tags>', cur_tags)\
    .replace('<content>', solution_content)\
    .replace('<level>', level_code_mapper[level_code])\
    .replace('<level_icon>', level_icon_mapper[level_code])

  with open(os.path.join(output_dir, f'{file_name}.mdx'), 'w+') as output_file:
    output_file.write(output_content)

  return file_name

def gen_main_tag_doc(tag_name, tag_ques_list):
  list_ques_output = []
  for ques in tag_ques_list:
    [platform, ques_no, ques_name, level_name, all_solutions, no_main_tags, tags, level_code, ] = ques
    cur_tags = ' '.join([' #'+tag for tag in no_main_tags])
    solution_link = gen_solution_doc(tag_name=tag_name, ques=ques)

    ques_number = ques_no_display(ques_no)

    cur_output = single_ques_tmpl\
      .replace('<ques_name>', ques_name)\
      .replace('<tags>', cur_tags)\
      .replace('<content>', f'[{ques_number}]({solution_link})')
    
    list_ques_output.append(cur_output)
      
  with open('template/doc.{0}.md'.format(tag_name), 'r') as tmpl:
    tmpl = tmpl.read()
    tmpl_doc_output = tmpl.replace('{_list_questions_}', '\n\n'.join(list_ques_output))
  
  cur_sub_dir = f'{output_dir_main}/{tag_name}'
  
  if not os.path.isdir(cur_sub_dir):
    os.makedirs(cur_sub_dir)
  
  with open(f'{cur_sub_dir}/index.mdx', 'w+') as output_file:
    output_file.write(tmpl_doc_output)


def gen_docs(ques_map):
  for main_tag in main_ques_tags:
    tag_all_ques = ques_map[main_tag]
    gen_main_tag_doc(tag_name=main_tag, tag_ques_list=tag_all_ques[0])


def gen_notes():
  output_dir = f"{output_dir_main}/note"
  if not os.path.isdir(output_dir):
    os.makedirs(output_dir)
  else:
    for existed_md in glob.glob(f"{output_dir}/*.md*"):
      try:
        os.remove(existed_md)
      except:
        pass

  for fname in glob.glob(f"{notes_dir}/*.md"):
    real_filename = fname.split(os.sep)[-1]

    curmd = frontmatter.load(fname)
    curmd.__setitem__('id', real_filename[:-len('.md')])
    og_mdcontent = frontmatter.dumps(curmd)

    curmd_time = curmd.get('date', '')
    if not curmd_time:
      curmd_time = datetime.datetime.now()
    curmd_time = curmd_time.strftime("%Y-%m-%d %H:%M:%S")
    file_date = curmd_time.split()[0]
    output_filename = f"{output_dir}/{file_date}-{real_filename}x"

    with open(output_filename, 'w+') as of:
      of.write(og_mdcontent)
    
    print(f'\n\n--> parse note file {fname} to {output_filename}')


def gen_sidebar():
  for main_tag in main_ques_tags:
    doc_files = f"docs/docs/{main_tag}/*.mdx"
    doc_idlist = []
    for fname in glob.glob(doc_files):
      curmd = frontmatter.load(fname)
      curid = curmd.get('id')
      if curid:
        doc_idlist.append(f"{main_tag}/{curid}")
    sidebar['codezone'][main_tag] = doc_idlist
  
  note_idlist = []
  note_files = f"docs/docs/note/*.mdx"
  for fname in glob.glob(note_files):
    curmd = frontmatter.load(fname)
    curid = curmd.get('id')
    if curid:
      note_idlist.append(f"note/{curid}")
  sidebar['note'] += note_idlist


  with open(f'docs/sidebars.json', 'w+') as fp:
    json.dump(sidebar, fp, indent=2, ensure_ascii=True)


if __name__ == '__main__':
  ques_map = scan_all_files()
  gen_docs(ques_map)
  gen_notes()
  gen_sidebar()

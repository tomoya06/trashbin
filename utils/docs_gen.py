from common import *
import os


single_ques_tmpl = """
### <ques_name>

<tags>

<content>
"""

solution_tmpl = """
# <ques_name>

> <tags>

<content>
"""

def filename_sort(filename):
  if filename.endswith('.md'):
    ext = '.00'
  else:
    _, ext = os.path.splitext(filename)
  return filename[0] + ext


def gen_solution_doc(tag_name, ques):
  [platform, ques_no, ques_name, level_name, all_solutions, no_main_tags, tags, ] = ques
  output_dir = os.path.join('docs/docs/', tag_name)
  file_name = f'{ques_no}_{ques_name}.md'
  
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
      solution_content += f"## 题解 {solution_name}\n\n```{ext}\n{single_solution_content}\n```"

    solution_content += '\n\n'

  cur_tags = ' '.join([' #'+tag for tag in tags])

  
  output_content = solution_tmpl\
    .replace('<ques_name>', ques_name)\
    .replace('<tags>', cur_tags)\
    .replace('<content>', solution_content)

  with open(os.path.join(output_dir, file_name), 'w+') as output_file:
    output_file.write(output_content)

  return f'{file_name}'

def gen_main_tag_doc(tag_name, tag_ques_list):
  list_ques_output = []
  for ques in tag_ques_list:
    [platform, ques_no, ques_name, level_name, all_solutions, no_main_tags, tags, ] = ques
    cur_tags = ' '.join([' #'+tag for tag in no_main_tags])
    solution_link = gen_solution_doc(tag_name=tag_name, ques=ques)

    ques_number = ques_no_display(ques_no)

    cur_output = single_ques_tmpl\
      .replace('<ques_name>', ques_name)\
      .replace('<tags>', cur_tags)\
      .replace('<content>', f'{ques_number} [题解]({solution_link})')
    
    list_ques_output.append(cur_output)
      
  with open('template/doc.{0}.md'.format(tag_name), 'r') as tmpl:
    tmpl = tmpl.read()
    tmpl_doc_output = tmpl.replace('{_list_questions_}', '\n\n'.join(list_ques_output))
  
  with open('docs/docs/{0}/index.md'.format(tag_name), 'w') as output_file:
    output_file.write(tmpl_doc_output)


def gen_docs(ques_map):
  for main_tag in main_ques_tags:
    tag_all_ques = ques_map[main_tag]
    gen_main_tag_doc(tag_name=main_tag, tag_ques_list=tag_all_ques[0])


if __name__ == '__main__':
  ques_map = scan_all_files()
  gen_docs(ques_map)

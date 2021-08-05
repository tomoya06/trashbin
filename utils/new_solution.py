import os

def process():
  platform = input('输入平台(leetcode)：') or 'leetcode'
  ques_no = input('输入题号：')
  ques_desc = input('输入题目名称：')
  # file_ext = input('代码语言（默认py）：') or 'py'

  file_dir = os.path.join('code', '{0}.{1}.{2}'.format(platform, ques_no, ques_desc))
  os.makedirs(file_dir)
  file_loc = os.path.join(file_dir, '1.py')

  with open(file_loc, 'w') as file:
    file.write('# ##打个标签##levelm\n')

  print('好了')

if __name__ == '__main__':
  process()

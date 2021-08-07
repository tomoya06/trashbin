import os

def process():
  platform = input('输入平台(leetcode)：') or 'leetcode'
  ques_no = input('输入题号：')
  ques_desc = input('输入题目名称：')
  file_ext = input('代码语言（py）：') or 'py'
  tags = input('输入标签（tag1#tag2#tagn）：') or '标签'
  level = input('输入难度(h/m/[e])') or 'e'

  file_dir = os.path.join('code', '{0}.{1}.{2}'.format(platform, ques_no, ques_desc))
  os.makedirs(file_dir)
  file_loc = os.path.join(file_dir, '1.{}'.format(file_ext))

  with open(file_loc, 'w') as file:
    file.write('# ##{}##level{}\n'.format(tags, level))

  print('好了')

if __name__ == '__main__':
  process()

import glob
import os
import frontmatter
import re

def ques_sort(_dirname):
  dirname = _dirname.split(os.sep)[-1]
  [_, num, name] = dirname.split('.')
  num = num[5:].split('_')[0]
  if re.search(r'I+_', name):
    pass
  return num+name


def sort_ques():
  sorted_ques_list = list(glob.glob('code/leetcode.offer*'))
  sorted_ques_list.sort(key=lambda k:ques_sort(k))
  
  with open(r'links/offer.txt', 'r') as flink:
    ques_links = flink.readlines()
    ques_links = [link.split('ques_alinks') for link in ques_links]
    ques_links = [{
      'name': link[0].split('https')[0].strip(),
      'link': link[1].strip()
    } for link in ques_links]
  
  for idx in range(len(ques_links)):
    ques_links[idx]['folder'] = sorted_ques_list[idx]
  
  return ques_links

def rename_III():
  for fname in glob.glob('code/*I*'):
    ver = fname.count('I')
    newfname = re.sub(r'I+', f'v{ver}', fname)
    os.rename(fname, newfname)  

if __name__ == '__main__':
  rename_III()
    



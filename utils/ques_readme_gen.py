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
  
  for link in ques_links:
    fd = link["folder"]
    fmd = frontmatter.load(f'{fd}/index.md')
    fmd.__setitem__('online_name', link['name'])
    fmd.__setitem__('online_link', link['link'])

    print(fmd.get('name'), '\t\t\t\t', fmd.get('online_name'))

    with open(f'{fd}/index.md', 'w') as outf:
      outf.write(frontmatter.dumps(fmd))
  
  return ques_links

def rename_II():
  for fname in glob.glob('code/*I*'):
    ver = fname.count('I')
    newfname = re.sub(r'I+', f'v{ver}', fname)
    os.rename(fname, newfname)

def rename_III():
  for fname in glob.glob('code/*'):
    plat, num, name = '', '', ''
    try:
      [plat, num, name] = fname.split('.')
    except:
      os.rmdir(fname)

    nums = num.split('_')
    num = nums[0]
    alternum = nums[1] if len(nums) == 2 else None

    if name.startswith('v'):
      num += name[:2]
      name = name.split('_')[1]
    newfname = f'{plat}.{num}.{name}'

    with open(f'{fname}/index.md', 'w+') as findex:
      findex.write(f'''---
name: {name}
id: {num}
---
      ''')
    
    os.rename(fname, newfname)


if __name__ == '__main__':
  rename_III()
  # sort_ques()

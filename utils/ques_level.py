import os
import re
import glob
import frontmatter
from common import *

def move_level():
  for fname in glob.glob('code/*/*'):
    with open(fname, 'r') as fd:
      fdlines = fd.readlines()
    if not re.search(ques_level_tag_marker_reg, fdlines[0]):
      continue
    search_tag = re.search(ques_level_tag_marker_reg, fdlines[0])
    tags = search_tag.group(1).split('#')[:]
    level_code = search_tag.group(2)
    
    cur_idxfname = os.path.join(fname.rsplit(os.sep, 1)[0], 'index.md')
    fdm = frontmatter.load(cur_idxfname)
    fdm.__setitem__('tags', tags)
    fdm.__setitem__('level', level_code)
    with open(cur_idxfname, 'w') as fdmw:
      fdmw.write(frontmatter.dumps(fdm))
    
    with open(fname, 'w') as fd:
      fd.writelines(fdlines[1:])

def append_platform():
  for fname in glob.glob('code/*/index.md'):
    fdm = frontmatter.load(fname)
    fdm.__setitem__('platform', 'leetcode')
    with open(fname, 'w') as fd:
      fd.write(frontmatter.dumps(fdm))

if __name__ == '__main__':
  # move_level()
  append_platform()

    

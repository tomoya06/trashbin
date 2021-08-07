#!/bin/bash
python utils/readme_gen.py
if [ $? -eq 0 ]; then
  echo "new readme updated"
else
  echo
  echo "======================="
  echo "failed to update readme"
  echo "======================="
  exit
fi

git add * 
git commit -m "update $1"
git push

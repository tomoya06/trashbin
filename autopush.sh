#!/bin/bash
python utils/readme_gen.py
if [ $? -eq 0 ]; then
  echo "new readme updated"
else
  echo
  echo -e "${RED}=======================${NC}"
  echo -e "${RED}failed to update readme${NC}"
  exit
fi

git add * 
git commit -m "update $1"
git push

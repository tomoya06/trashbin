#!/bin/bash
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

python utils/readme_gen.py
if [ $? -eq 0 ]; then
  echo
  echo -e "${green}==================${reset}"
  echo -e "${green}new readme updated${reset}"
  echo -e "${green}==================${reset}"
else
  echo
  echo -e "${red}=======================${reset}"
  echo -e "${red}failed to update readme${reset}"
  echo -e "${red}=======================${reset}"
  exit
fi

git add * 
git commit -m "update $1"
git push

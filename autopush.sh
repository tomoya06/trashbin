#!/bin/bash
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

__step_analysis() {
  if [ $? -eq 0 ]; then
    echo
    echo -e "${green}=====  $1: OK  =====${reset}"
  else
    echo
    echo -e "${red}xxxxx  $1: FAILED  xxxxx${reset}"
  fi
  echo
}

python utils/readme_gen.py
__step_analysis "update readme"

git add * 
git commit -m "update $1"
git push
__step_analysis "update git"

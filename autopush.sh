#!/bin/bash
red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

__step_analysis() {
  if [ $? -eq 0 ]; then
    echo
    echo -e "${green}=====  $1: OK  =====${reset}"
    echo
  else
    echo
    echo -e "${red}xxxxx  $1: FAILED  xxxxx${reset}"
    echo
    exit
  fi
}

git add * 
git commit -m "update $1"
git push
git push homepage
__step_analysis "update git"

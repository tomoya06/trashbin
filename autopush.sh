#!/bin/bash
python3 utils/readme_gen.py

git add * 
git commit -m "update $1"
git push

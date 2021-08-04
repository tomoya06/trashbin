#!/bin/bash
python utils/readme_gen.py

git add * 
git commit -m "update $1"
git push

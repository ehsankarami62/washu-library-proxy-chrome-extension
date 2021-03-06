#!/bin/bash

# Input: becker.txt, danforth.txt, intersect.txt
# Output: becker-journals.js, intersect-journals.js, danforth-journals.js

# Sort & uniq, just in case.
sort -u becker.txt -o becker.txt
sort -u danforth.txt -o danforth.txt
sort -u intersect.txt -o intersect.txt

echo -n "var intersect_journals = {'" > ../javascript/journals.js
cat intersect.txt | sort | uniq | tr "\n" "," | sed "s/,/':1,'/g" | head -c-2 >> ../javascript/journals.js
echo "};" >> ../javascript/journals.js


echo -n "var becker_journals = {'" >> ../javascript/journals.js
cat becker.txt | sort | uniq | tr "\n" "," | sed "s/,/':1,'/g" | head -c-2 >> ../javascript/journals.js
echo "};" >> ../javascript/journals.js


echo -n "var danforth_journals = {'" >> ../javascript/journals.js
cat danforth.txt | sort | uniq | tr "\n" "," | sed "s/,/':1,'/g" | head -c-2 >> ../javascript/journals.js
echo -n "};" >> ../javascript/journals.js


# Final structure should look like:
#var intersect_journals = {'url':1,'url':1,...};
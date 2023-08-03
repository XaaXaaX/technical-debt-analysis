# Calculating practical technical debt

## Intrest Rate

To calcuate interest rate we look at the most frequectly changed files in project.

To extract those numbers we use the bellow comand:

> git log --format=format: --name-only | egrep -v '^$' | sort | uniq -c | sort -r > all_frequencies.txt

Or to extract the most top N number of files

> git log --format=format: --name-only | egrep -v '^$' | sort | uniq -c | sort -r | head -N

## Complexity

Knowing most frequently changed parts of project is a nice mtric but we need to mesure complecity level and the simplest metic related to complexity is number of lines of code, knowing the lines of code in each part can be an other metric which can help in collaboration of change rate.

> npm i -g cloc

this is a nice tool help discover lines of code in a path or file.

> cloc src/

## Hotspot
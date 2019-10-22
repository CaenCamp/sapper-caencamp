#!/bin/bash
wget https://github.com/CaenCamp/markdowns/archive/master.zip
unzip master.zip && rm master.zip && rm -rf src/cc-markdowns && mv markdowns-master src/cc-markdowns
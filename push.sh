#!/bin/bash

date
echo "Pushing adnat-www "

echo "adnat-www" > app/v/index.html
date +%Y-%m-%d:%H:%M.%S >> app/v/index.html


#--dry-run \
#--exclude '*sh' \
#--exclude 'assets' \
#--exclude 'db' \
#--exclude '*swp' \
#--exclude '*~'  \
#--include 'files' \
#--exclude 'sdk'  \
rsync -v -e "ssh -p 12222 -x -a -l ubu-install-jeos"     \
--include '.htaccess' \
--exclude '.DS_Store'  \
-aruzitPL  \
app/ \
67.18.182.74:/var/www

date
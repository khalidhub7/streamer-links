
prettier --print-width 80 --write public/index.html

tree -I "node_modules|package-lock.json|setup.sh|*.png|*.jpg|*.jpeg" -F > structure.txt

rsync -av --filter=':- .gitignore' ./ ~/github/streamer-links/


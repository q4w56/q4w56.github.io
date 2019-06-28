rm -rf out
npm run build
cd out
git init
git add .
git commit -m "Automatic commit"
git remote add origin https://github.com/golopot/golopot.github.io.git
git push -f origin master
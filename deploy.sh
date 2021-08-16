cd website/
npm run build
cd ..

rm -rf docs/
mkdir docs

cp -R website/build/ docs/

git add docs/*
git commit -m "website update"
git push
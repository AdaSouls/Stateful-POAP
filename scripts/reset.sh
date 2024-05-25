rm -r */build
rm */tsconfig.tsbuildinfo
npm i
npm run build
cd db/ 
npm run build
cd ..
npm run compile:api
npm run pack:middleware
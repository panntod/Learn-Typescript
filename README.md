npm init -y
npm install express typescript @types/node @types/express ts-node

tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}

opsional
npm install ts-node-dev --save-dev

npm i --save-dev @types/bcrypt
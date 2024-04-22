# COMEÇANDO

[x] Criar o projeto 
`npm create vite@latest`
Framework: » React
Variant: » JavaScript

[x] Instalar as dependências
`npm i axios react-router-dom`

[x] Instalando o Tailwind:
`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`

[x] Configurando os caminhos de modelo
No arquivo `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

[x] Adicionando as diretivas Tailwind ao CSS
No arquivo `./src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

 [x] Iniciar o projeto 
 `npm run dev`

#
npm i lucide-react

npm i moment

npm install --save react-toastify
# Pablo Barbero Portfolio

Frontend Developer Portfolio showcasing skills, projects, and experience. This portfolio is built using React, TypeScript, and modern web technologies.

You can check out the live version of my portfolio here:

- [Live Demo](https://barberopablo.github.io/portfolio/)

## Features

- Interactive and responsive design
- Smooth animations and transitions using Framer Motion
- Dark mode support
- Skills displayed with hover effects
- Showcase of real-world projects and GitHub repositories
- Contact form for reaching out

## Technologies Used

- React: JavaScript library for building user interfaces
- TypeScript: Typed JavaScript to improve code quality and reliability
- Framer Motion: Animation library to add smooth transitions
- Tailwind CSS: Utility-first CSS framework for rapid UI development
- Vite: Lightning-fast build tool for modern web projects

## If you enjoyed the design, feel free to clone it and customize it to suit your project's needs!

### Clone the repository

```js
git clone https://github.com/BarberoPablo/portfolio.git
```

### Navigate to the project

```js
cd portfolio
```

### Install dependecies

```js
npm install
```

### Run project

```js
npm run dev
```

The project will be available at http://localhost:5173/

### Install dependecies

```js
npm install
```

### Install dependecies

```js
npm install
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

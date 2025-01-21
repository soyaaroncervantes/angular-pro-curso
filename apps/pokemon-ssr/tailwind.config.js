const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/app/components/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, 'src/app/pages/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, 'src/app/pokemons/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, 'src/app/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

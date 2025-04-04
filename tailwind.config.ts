import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Archivos en el directorio "pages"
    './components/**/*.{js,ts,jsx,tsx}', // Archivos en el directorio "components"
  ],
  theme: {
    extend: {
      // Personalización del tema
      colors: {
        primary: '#1E40AF', // Azul personalizado
        secondary: '#64748B', // Gris personalizado
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Soporte para contenido enriquecido (opcional)
    require('@tailwindcss/forms'), // Estilización de formularios (opcional)
  ],
  safelist: [
    { pattern: /.*/, }
  ],
};

export default config;

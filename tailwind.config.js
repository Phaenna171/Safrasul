/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-1': "url('/imgs/banners_site_sacarias_safrasul_1.jpg')",
        'banner-2': "url('/imgs/banners_site_sacarias_safrasul_2.jpg')",
        'brachiaria': "url('/imgs/bachiaria.png')",
        'panicum': "url('/imgs/panicum.png')",
        'leguminosas': "url('/imgs/leguminosas.png')",
        'gramineas': "url('/imgs/gramineas.png')",
      },
      backgroundPosition: {
        'bannerPosition-1': 'top right -8rem',
        'responsive-b1': 'top right -22rem',
        'responsive-p-b1': 'top right -19rem',
        'bannerPosition-2': 'top right',
        'responsive-b2': 'top right -10rem',
      },
      fontFamily: {
        openSans: ['openSans', 'sans-serif'],
        effra: ['effra', 'serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
      },
    },
  },
  plugins: [],
};

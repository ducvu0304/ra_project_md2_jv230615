// // @type {import('tailwindcss').Config}
// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT ({
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
//     // "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     // "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors : {
//         'primary-v1' : '#00529c',
//         'red' : '#fd3d57',
//       },
//       fontFamily : {
//         'parisienne' : ['Parisienne'],
//         'istok_web'  : ['Istok_Web']
//       },
//     },
//   },
//   plugins: [
//     require('flowbite/plugin')
//   ],
// })


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-v1' : '#00529c'
      },
      fontFamily : {
        'parisienne' : ['Parisienne'],
        'istok_web'  : ['Istok_Web']
      }
    },
  },
  plugins: [
  ],
}
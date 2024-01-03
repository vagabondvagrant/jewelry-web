// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   content: [],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./src/**/*.{js,ts,jsx,tsx}'], // Include all JS and TS files within the src folder
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        randomcolor1: {
          500: '#21b5ab', 
        },
        customcolor: '#073f57',
        customcolor2: '#9c7c33', // Added customcolor2 here
        customcolor3: '#bda44b', // Added customcolor2 here
        customcolor4: '#bff542', // Added customcolor2 here
        customcolor5: '#7b9129', // Added customcolor2 here
        customcolor6: '#994D1C', // Added customcolor2 here
        customcolor7: '#5C4033', // Added customcolor2 here
      },
      buttoncolor: "#18546e"
    },
  },
  plugins: [],
};
// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ]
// }
module.exports = {
  "env":{
    "development":{
      "sourceMaps":true,
      "retainLines":true, 
    }
  },
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 16, // базовый размер шрифта (1rem = 16px)
        propList: ['font-size'], // свойства, которые нужно конвертировать
      },
    },
  }
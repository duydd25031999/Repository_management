module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/repository_management/' : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}
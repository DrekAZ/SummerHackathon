const { environment } = require('@rails/webpacker')

/// add 
//const { VueLoaderPlugin } = require('vue-loader')
//const vue = require('./loaders/vue')

//environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
//environment.loaders.prepend('vue', vue)
//environment.config.resolve.alias = {'vue$': 'vue/dist/vue.esm.js' }
// jQueryとBootstapのJSを使えるように
const webpack = require('webpack')
environment.plugins.append(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    Popper: ['popper.js', 'default']
  })
)
/// add

module.exports = environment

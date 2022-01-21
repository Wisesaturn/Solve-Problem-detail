const debug = process.env.NODE_ENV !== 'production'
const name = 'study-blog'

module.exports = {
    assetPrefix: !debug ? `/${name}/` : '',
    withImages: require('next-images'),
}

const debug = process.env.NODE_ENV !== 'production' // 환경 확인용
const name = 'study-blog' // 내 깃허브 레포 이름

module.exports = {
    assetPrefix: !debug ? `/${name}/` : '',
    withImages: require('next-images'),
}

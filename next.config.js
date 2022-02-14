const debug = process.env.NODE_ENV !== 'production' // 환경 확인용
const name = 'study-blog' // 내 깃허브 레포 이름

module.exports = {
    assetPrefix: !debug ? `/${name}/` : '',
    images: {
    loader: 'imgix',
    path: !debug ? 'https://wisesaturn.github.io/' : `https://wisesaturn.github.io/${name}`,
    // next/image로 이미지 불러올 때 path (default loader가 안 먹혀서 강제로 path 지정)
  },

}

import { atom } from 'recoil'

const ModalMessage = atom({
    key: 'ModalMessage',
    default: '기본 메세지 입니다. 😁',
})

const SitebarState = atom({
    key: 'Sitebar_state',
    default: false,
})

const darkModeState = atom({
    key: 'darkMode_state',
    default: true,
})

const subMenu = [
    [
        {
            title: '프로그래머스',
            path: '/programmers',
            icon: '',
        },
    ],
    [
        {
            title: 'Unity',
            path: '/unity',
            icon: '',
        },
    ],
    [
        {
            title: 'Blog',
            path: '/posts/developLog/blog',
            icon: '',
        },
    ],
]

const subMenuFocus = atom({
    key: 'subMenu_focus',
    default: 0,
})

const searchActive = atom({
    key: 'search_active',
    default: false,
})

const checkEnv = atom({
    key: 'checkEnivronment',
    default : `${process.env.NODE_ENV === 'production' ? '/study-blog/' : '/'}`,
})

const Home = 'http://wisesaturn.github.io/study-blog'
const Link_Github = 'https://github.com/Wisesaturn'
const Link_Naver = 'https://blog.naver.com/rfv1479'
const Link_Instagram = 'https://www.instagram.com/songjh_97/'
const Link_Email = 'rfv1479@gmail.com'

export { Home, searchActive, ModalMessage, SitebarState, darkModeState, subMenuFocus, subMenu, checkEnv }
export { Link_Github, Link_Naver, Link_Instagram, Link_Email }

import { AiFillHome } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
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

const stuffMenu = [
    {
        key: 'Home',
        icon: <AiFillHome />,
    },
    {
        key: 'Search',
        icon: <BsSearch />,
    },
]

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
            path: 'posts/developLog/blog',
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

const Home = 'http://wisesaturn.github.io/study-blog'
const Link_Github = 'https://github.com/Wisesaturn'
const Link_Naver = 'https://blog.naver.com/rfv1479'
const Link_Instagram = 'https://www.instagram.com/songjh_97/'
const Link_Email = 'rfv1479@gmail.com'

export { Home, searchActive, ModalMessage, SitebarState, darkModeState, subMenuFocus, subMenu, stuffMenu }
export { Link_Github, Link_Naver, Link_Instagram, Link_Email }

import { atom } from 'recoil';
import { boolean } from 'check-types';
import { BsSearch } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

const ModalMessage = atom({
    key: 'ModalMessage',
    default: "기본 메세지 입니다. 😁"
})

const Sitebar_state = atom({
    key: 'Sitebar_state',
    default: false,
    type : boolean
})

const darkMode_state = atom({
    key: 'darkMode_state',
    default: true,
    type : boolean
})

const stuffMenu = [
    {
        key : 'Home',
        icon : <AiFillHome />
    },
    {
        key : 'Search',
        icon : <BsSearch />
    }
]

const subMenu = [
    [
        {
            title: '서브메뉴 1',
            path: '/',
            icon: "",
        },
        {
            title: '서브메뉴 2',
            path: '/',
            icon: "",
        },
        {
            title: '서브메뉴 3',
            path: '/',
            icon: "",
        }
    ],
    [
        {
            title: '서브메뉴 4',
            path: '/',
            icon: "",
        },
        {
            title: '서브메뉴 5',
            path: '/',
            icon: "",
        },
        {
            title: '서브메뉴 6',
            path: '/',
            icon: "",
        }
    ],
    [
        {
            title: '서브메뉴 7',
            path: '/',
            icon: "",
        },
        {
            title: '서브메뉴 8',
            path: '/',
            icon: "",
        },
        {
            title: '서브메뉴 9',
            path: '/',
            icon: "",
        }
    ],
]

const subMenu_focus = atom({
    key : 'subMenu_focus',
    default : 0
});

const search_active = atom({
    key: 'search_active',
    default: false,
    type : boolean
});

const Home = "http://wisesaturn.github.io/study-blog";
const Link_Github = "https://github.com/Wisesaturn";
const Link_Naver = "https://blog.naver.com/rfv1479";
const Link_Instagram = "https://www.instagram.com/songjh_97/";
const Link_Email = "rfv1479@gmail.com";

export { Home, search_active, ModalMessage, Sitebar_state, darkMode_state, subMenu_focus, subMenu, stuffMenu }
export { Link_Github, Link_Naver, Link_Instagram, Link_Email }
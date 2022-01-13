import { atom } from 'recoil';
import { boolean } from 'check-types';

const lvData = atom({
    key: 'lvData',
    default: '-- Level --'
});

const Levels = [
    {
        id: 1,
        name: "Level 1"
    }
]

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

const Home = "http://wisesaturn.github.io/solve-problem-detail";
const Link_Github = "https://github.com/Wisesaturn";
const Link_Naver = "https://blog.naver.com/rfv1479";
const Link_Instagram = "https://www.instagram.com/songjh_97/";

export { Home, lvData, Levels, ModalMessage, Sitebar_state, darkMode_state }
export { Link_Github, Link_Naver, Link_Instagram }
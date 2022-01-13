import { atom } from 'recoil';

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
    key: 'Sitebar_button',
    default: false
})

const Home = "http://wisesaturn.github.io/solve-problem-detail";
const Link_Github = "https://github.com/Wisesaturn";
const Link_Naver = "https://blog.naver.com/rfv1479";
const Link_Instagram = "https://www.instagram.com/songjh_97/";

export { Home, lvData, Levels, ModalMessage, Sitebar_state }
export { Link_Github, Link_Naver, Link_Instagram }
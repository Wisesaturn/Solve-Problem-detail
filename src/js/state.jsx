import { boolean } from 'check-types';
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
    default: false,
    type : boolean
})

export { lvData, Levels, ModalMessage, Sitebar_state }
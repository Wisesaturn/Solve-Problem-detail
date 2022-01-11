import { atom } from 'recoil';

const ModalMessage = atom({
    key : 'ModalMessage',
    default: "기본 메세지 입니다. 😁"
})

export { ModalMessage };
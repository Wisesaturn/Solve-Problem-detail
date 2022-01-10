import { atom } from 'recoil';

const lvData = atom({
    key: 'lvData',
    default: '-- Level --'
});

const Levels = [
    {
        id: 1,
        name: "Level 1"
    },
    {
        id: 2,
        name: "Level 2"
    },
    {
        id: 3,
        name: "Level 3"
    },
    {
        id: 4,
        name: "Level 4"
    },
    {
        id: 5,
        name: "Level 5"
    }
]

export { lvData, Levels }
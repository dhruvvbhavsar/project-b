import { atom } from 'jotai';

const sliceStartAtom = atom(0)
const sliceEndAtom = atom(5)
const currentPageAtom = atom(1)

export {
    sliceStartAtom,
    sliceEndAtom,
    currentPageAtom
};
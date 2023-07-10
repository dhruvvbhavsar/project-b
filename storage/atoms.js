import { atom } from 'jotai';

const sliceStartAtom = atom(0)
const sliceEndAtom = atom(5)
const currentPageAtom = atom(1)
const fileAtom = atom(null || 'string');

export {
    sliceStartAtom,
    sliceEndAtom,
    currentPageAtom,
    fileAtom
};
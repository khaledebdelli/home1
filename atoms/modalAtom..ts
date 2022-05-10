import { DocumentData } from 'firebase/firestore'
import { atom } from 'recoil'
import { Repository } from '../typings'

export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const repositoryState = atom<Repository | DocumentData | null>({
  key: 'repositoryState',
  default: null,
})
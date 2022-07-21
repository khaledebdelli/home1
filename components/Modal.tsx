import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState, repositoryState } from '../atoms/modalAtom'
import {
  CheckIcon,
  PlusIcon,
  ThumbUpIcon,
  XIcon,
} from '@heroicons/react/outline'
import { Repository } from '../typings'
import MuiModal from '@mui/material/Modal'
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  setDoc,
} from 'firebase/firestore'
import { db } from '../firebase'
import useAuth from '../hooks/useAuth'
import toast, { Toaster } from 'react-hot-toast'
import Badges from './Badges/Badges'

function Modal() {
  const [repository, setRepository] = useRecoilState(repositoryState)
  const [addedToList, setAddedToList] = useState<boolean>()
  const [showModal, setShowModal] = useRecoilState(modalState)
  const { user } = useAuth()
  const [repositories, setRepositories] = useState<
    DocumentData[] | Repository[]
  >([])

  const toastStyle = {
    background: 'white',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '15px',
    borderRadius: '9999px',
    maxWidth: '1000px',
  }

  const handleClose = () => {
    setShowModal(false)
    setRepository(null)
    toast.dismiss()
  }

  // Find all the movies in the user's list
  useEffect(() => {
    if (user) {
      return onSnapshot(
        collection(db, 'customers', user.uid, 'myList'),
        (snapshot) => setRepositories(snapshot.docs)
      )
    }
  }, [repository?.id, user])

  // Check if the movie is already in the user's list
  useEffect(
    () =>
      setAddedToList(
        repositories.findIndex(
          (result) => result.data().id === repository?.id
        ) !== -1
      ),
    [repositories, repository?.id]
  )

  const handleList = async () => {
    if (addedToList) {
      await deleteDoc(
        doc(db, 'customers', user!.uid, 'myList', repository?.id.toString()!)
      )

      toast(
        `${
          repository?.full_name || repository?.name
        } has been removed from My List`,
        {
          duration: 8000,
          style: toastStyle,
        }
      )
    } else {
      await setDoc(
        doc(db, 'customers', user!.uid, 'myList', repository?.id.toString()!),
        {
          ...repository,
        }
      )

      toast(
        `${
          repository?.full_name || repository?.name
        } has been added to My List.`,
        {
          duration: 8000,
          style: toastStyle,
        }
      )
    }
  }

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <Toaster position="bottom-center" />
        <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={handleClose}
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div className="relative pt-[20%]">
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="modalButton" onClick={handleList}>
                {addedToList ? (
                  <CheckIcon className="h-7 w-7" />
                ) : (
                  <PlusIcon className="h-7 w-7" />
                )}
              </button>
              <button className="modalButton">
                <ThumbUpIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {repository?.watchers} Watcher
              </p>
              <p className="font-light">
                {repository?.created_at || repository?.updated_at}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <div className="flex flex-col space-y-3 text-sm">
                <a href={repository?.homepage} target="_blank" rel="noreferrer">
                  <p className="w-7/6">{repository?.homepage}</p>
                </a>
                <div>
                  <span className="text-[gray]">Topics:</span>{' '}
                  <Badges repository={repository} />
                </div>

                <div>
                  <span className="text-[gray]">language:</span>{' '}
                  {repository?.language}
                </div>

                <div>
                  <span className="text-[gray]">Open Issues:</span>{' '}
                  {repository?.open_issues}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  )
}

export default Modal

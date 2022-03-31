import { useMedia } from 'src/uses/media'
const media = useMedia()

// Models
export type TModal = {
  isOpen: boolean
  type?: string
  options?: {
    callback?: Function
  }
}

export interface IInitialState {
  device: {
    media: 'pc' | 'sp' | null
  },
  modal: TModal
}

// States
const initialState: IInitialState = {
  device: {
    media: (media.sp as any).matches ? 'sp' : 'pc'
  },
  modal: {
    isOpen: false
  }
}

export default initialState

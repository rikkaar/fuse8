import {create} from 'zustand'
import {createSelectors} from './createSelectors'

interface Store {
	search: string
	setSearch: (search: string) => void
}

const useStoreBase = create<Store>()((set) => ({
	search: '',
	setSearch: (search) => set({search}),
}))

export const useStore = createSelectors(useStoreBase)

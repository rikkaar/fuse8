import {QueryKeys} from '@/shared/constants'
import {useQuery} from '@tanstack/react-query'
import {getCharacters} from 'rickmortyapi'

export const useCharacters = (searchQuery: string = '') => {
	return useQuery({
		queryKey: [...QueryKeys.SEARCH, searchQuery],
		// Вызывается всякий раз, когда меняется токен в localStorage
		queryFn: () =>
			getCharacters({
				name: searchQuery.toLowerCase(),
			}),
		enabled: Boolean(searchQuery.length),
	})
}

export type CharactersData = ReturnType<typeof useCharacters>
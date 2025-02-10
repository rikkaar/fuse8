import {useInfiniteQuery} from '@tanstack/react-query'
import {useMemo} from 'react'
import {QueryKeys} from '@/shared/constants'
import {useStore} from '@/shared/store/useStore'
import {getCharacters} from 'rickmortyapi'

export const useInfiniteCharacters = () => {
	const searchQuery = useStore.use.search()
	const query = useInfiniteQuery({
		queryKey: [...QueryKeys.SEARCH, searchQuery],
		queryFn: async ({pageParam}) => {
			const res = await getCharacters({
				name: searchQuery.toLowerCase(),
				page: pageParam,
			})
			return res
		},
		enabled: Boolean(searchQuery.length),
		initialPageParam: 1,
		getNextPageParam: (lastPage, pages, lastPageParam, allPageParams) => {
			return lastPage?.data?.info?.next ? lastPageParam + 1 : undefined
		},
	})

	const flattenCharacters = useMemo(() => {
		return query?.data?.pages.flatMap((pages) => pages.data.results || []) || []
	}, [query.data])

	return {
		query,
		flattenCharacters,
	}
}

export type InfiniteCharactersData = ReturnType<typeof useInfiniteCharacters>['query']

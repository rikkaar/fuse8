'use client'

import {InfiniteCharactersData} from '@/entities/character'
import {CharacterSearch} from '@/features/character-search'
import {QueryKeys} from '@/shared/constants'
import {useObserveQuery} from '@/shared/hooks/useObserveQuery'
import {cn} from '@/shared/lib/utils'
import {useStore} from '@/shared/store/useStore'
import {UseQueryResult} from '@tanstack/react-query'
import {useMemo} from 'react'

interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Search = ({className, ...rest}: SearchProps) => {
	const search = useStore.use.search()
	const {data, isPending} = useObserveQuery<InfiniteCharactersData['data']>([...QueryKeys.SEARCH, search])
	const characterCount = useMemo<number>(() => data?.pages.at(-1)?.data?.info?.count ?? 0, [data])
	return (
		<div
			className={cn('flex flex-col gap-1', className)}
			{...rest}
		>
			<CharacterSearch className='' />
			{Boolean(search.length) && !isPending && (
				<p className='text-muted-foreground pl-10 font-family-montserrat text-base font-normal pt-3'>{`Found characters: ${characterCount}`}</p>
			)}
		</div>
	)
}

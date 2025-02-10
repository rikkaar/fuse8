'use client'

import {CharacterCard, CharacterCardSkeleton, useInfiniteCharacters} from '@/entities/character'
import {cn} from '@/shared/lib/utils'
import {useStore} from '@/shared/store/useStore'
import Link from 'next/link'
import {useEffect} from 'react'
import {useIntersectionObserver} from 'usehooks-ts'

interface CharacterGridProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CharacterGrid = ({className, ...rest}: CharacterGridProps) => {
	const {query, flattenCharacters} = useInfiniteCharacters()
	const search = useStore.use.search()

	const {isIntersecting, ref} = useIntersectionObserver({
		threshold: 0.5,
	})

	useEffect(() => {
		if (!query.isFetching && query.hasNextPage && isIntersecting) {
			query.fetchNextPage()
		}
	}, [isIntersecting, query])

	return (
		<div
			className={cn(
				'grid-rows-[150px] grid h-full w-full auto-rows-[150px] grid-cols-6 gap-5 md:grid-rows-[262px_150px]',
				'',
				className,
			)}
			{...rest}
		>
			{flattenCharacters?.map((character, index) => (
				<Link
					ref={flattenCharacters.length - 1 === index ? ref : null}
					href={character.url}
					key={character.id}
					className={index < 2 ? 'col-span-6 md:col-span-3 xl:col-span-3' : 'col-span-6 md:col-span-3 xl:col-span-2'}
				>
					<CharacterCard character={character} />
				</Link>
			))}
			{query.isPending &&
				Boolean(search.length) &&
				Array.from({length: 8}).map((_, index) => (
					<CharacterCardSkeleton
						key={index}
						className={index < 2 ? 'col-span-6 md:col-span-3 xl:col-span-3' : 'col-span-6 md:col-span-3 xl:col-span-2'}
					/>
				))}
			{query.isError && (
				<h1 className={cn('flex items-center gap-x-2')}>{query.error?.message || 'An error occurred'}</h1>
			)}
		</div>
	)
}

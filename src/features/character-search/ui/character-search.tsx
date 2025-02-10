'use client'

import {cn} from '@/shared/lib/utils'
import {useEffect, useRef, useState} from 'react'
import {useDebounceValue} from 'usehooks-ts'
import {useStore} from '@/shared/store/useStore'
import {useInfiniteCharacters} from '@/entities/character'

interface CharacterSearchProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CharacterSearch = ({className, ...rest}: CharacterSearchProps) => {
	// const inputRef = useRef<HTMLInputElement>(null)
	// useEffect(() => {
	// 	inputRef?.current?.focus()
	// }, [])

	const [query, setQuery] = useState<string>('')
	const [debouncedValue, setValue] = useDebounceValue(query, 300)

	// Hold the debounced value in the store
	const setSearch = useStore.use.setSearch()
	useEffect(() => {
		setSearch(debouncedValue)
	}, [debouncedValue])

	return (
		<input
			className={cn(
				'text-1.5xl text-primary-foreground placeholder:text-primary-foreground shadow-basic px-6.5 py-5 font-bold',
				// 'focus-visible:ring-primary-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
				className,
			)}
			autoFocus
			type='search'
			placeholder='Search characters...'
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			// ref={inputRef}
			{...rest}
		/>
	)
}

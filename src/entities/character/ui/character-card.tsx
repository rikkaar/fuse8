import {formatLocalized} from '@/shared/lib/format'
import {cn} from '@/shared/lib/utils'
import clsx from 'clsx'
import React from 'react'
import {Character} from 'rickmortyapi'

interface CharacterCardProps extends React.HTMLAttributes<HTMLDivElement> {
	character: Character
}

export const CharacterCard = React.forwardRef<HTMLDivElement, CharacterCardProps>(
	({className, character, ...rest}: CharacterCardProps, ref) => {
		const characterStatusColor = (status: Character['status']) =>
			clsx({
				'text-destructive-foreground': status === 'Dead',
				'text-positive-foreground': status === 'Alive',
				'text-muted-foreground': status === 'unknown',
			})

		return (
			<div
				className={cn('shadow-basic flex h-full w-full flex-col justify-between p-5', className)}
				{...rest}
				ref={ref}
			>
				<h2 className='truncate text-3xl font-normal'>{character.name}</h2>
				<div className='text-muted-foreground font-family-montserrat flex items-center justify-between text-sm'>
					<span>
						Status: <span className={cn(characterStatusColor(character.status), 'font-bold')}>{character.status}</span>
					</span>
					<span>Created: {formatLocalized(character.created, 'dd.MM.yyyy')}</span>
				</div>
			</div>
		)
	},
)
CharacterCard.displayName = 'CharacterCard'

export const CharacterCardSkeleton = ({className, ...rest}: Omit<CharacterCardProps, 'character'>) => {
	return (
		<div
			className={cn('shadow-basic flex h-full w-full flex-col justify-between px-5 py-7.5', className)}
			{...rest}
		/>
	)
}

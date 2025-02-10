import {cn} from '@/shared/lib/utils'
import {CharacterGrid} from '@/widgets/character-grid'
import {Search} from '@/widgets/search'

export const Main = () => {
	return (
		<main
			className={cn(
				'bg-background relative isolate flex min-h-screen flex-col items-center justify-center',
				'xl:px-40 xl:py-32',
				'px-8 py-12',
			)}
		>
			<Search className='mb-auto w-full md:w-1/2 xl:w-1/3' />
			<CharacterGrid className='xl:pt-16 pt-4 md:pt-12' />
		</main>
	)
}

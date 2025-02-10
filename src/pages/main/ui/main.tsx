import {cn} from '@/shared/lib/utils'
import {CharacterGrid} from '@/widgets/character-grid'
import {Search} from '@/widgets/search'

export const Main = () => {
	return (
		<main
			className={cn(
				'bg-background relative isolate min-h-screen w-full flex flex-col items-center',
				'xl:px-40 xl:py-32',
				'md:px-8 md:py-12',
				'px-4 py-8',
			)}
		>
			<Search className='w-full md:w-1/2 xl:w-1/3' />
			<CharacterGrid className='pt-4 md:pt-12 xl:pt-16' />
		</main>
	)
}

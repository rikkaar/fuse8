import {MetadataRoute} from 'next'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
	// Pick a locale that is representative of the app
	// @see https://next-intl-docs.vercel.app/docs/environments/actions-metadata-route-handlers#manifest
	return {
		name: 'Fuse8 internship',
		short_name: 'Fuse8 internship',
		description: 'A performant site built with Next.js',
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		// icons: [
		// 	{
		// 		type: 'image/png',
		// 		src: '/favicon-32x32.png',
		// 		sizes: '32x32',
		// 	},
		// 	{
		// 		type: 'image/png',
		// 		src: '/favicon-16x16.png',
		// 		sizes: '16x16',
		// 	},
		// ],
	}
}

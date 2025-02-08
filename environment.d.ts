// Here we declare the environment variables that are available in the browser context

declare namespace NodeJS {
	interface ProcessEnv {
		NEXT_PUBLIC_API_LINK: string
	}
}

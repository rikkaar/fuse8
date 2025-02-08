/* eslint-disable i18next/no-literal-string */
'use client' // Error boundaries must be Client Components
export default function GlobalError({reset}: {error: Error & {digest?: string}; reset: () => void}) {
	return (
		// global-error must include html and body tags
		<html lang='en'>
			<body>
				<h2>Oops! Smth went wrong</h2>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	)
}

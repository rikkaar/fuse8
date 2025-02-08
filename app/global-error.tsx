/* eslint-disable i18next/no-literal-string */
'use client' // Error boundaries must be Client Components
export default function GlobalError({reset}: {error: Error & {digest?: string}; reset: () => void}) {
	return (
		// global-error must include html and body tags
		<html lang='ru'>
			<body>
				<h2>Что-то пошло не так!</h2>
				<button onClick={() => reset()}>Попробовать заново</button>
			</body>
		</html>
	)
}

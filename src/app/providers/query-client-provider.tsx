'use client'

import {QueryCache, QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {HTTPException} from 'hono/http-exception'
import {PropsWithChildren, useState} from 'react'

export const QueryClientContextProvider = ({children}: PropsWithChildren) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				queryCache: new QueryCache({
					onError: (err) => {
						if (err instanceof HTTPException) {
							// global error handling, e.g. toast notification ...
						}
					},
				}),
				defaultOptions: {
					queries: {
						retry: (failureCount, err) => {
							if (err instanceof HTTPException) {
								if (err.status === 404) return false
							}
							if (failureCount < 3) return true
							return false
						},
					},
					mutations: {
						retry: 1,
						retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
					},
				},
			}),
	)

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

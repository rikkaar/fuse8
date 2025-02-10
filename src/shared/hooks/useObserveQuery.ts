import {
	InfiniteData,
	QueryKey,
	UseInfiniteQueryOptions,
	UseQueryOptions,
	useInfiniteQuery,
	useQuery,
} from '@tanstack/react-query'

/**
 * Хук для создания запроса с возможностью опциональной настройки.
 *
 * @param queryKey - Ключ запроса, используемый для идентификации запроса в кэше.
 * @param options - Опциональные параметры для настройки запроса.
 * @returns Объект, возвращаемый хуком `useQuery` с данными запроса и методами для управления состоянием запроса.
 *
 * @template TData - Тип данных, возвращаемых запросом.
 */
export const useObserveQuery = <TData = unknown, TError = Error>(
	queryKey: QueryKey,
	options?: Omit<UseQueryOptions<TData, TError>, 'enabled' | 'queryKey'>, // Исключаем `enabled` и `queryKey`, так как они задаются явно
) => {
	return useQuery<TData, TError>({
		queryKey,
		enabled: false, // Запрос будет отключен по умолчанию
		...options,
	})
}

/**
 * Хук для создания бесконечного запроса с возможностью опциональной настройки.
 *
 * @param queryKey - Ключ запроса, используемый для идентификации запроса в кэше.
 * @param options - Опциональные параметры для настройки запроса.
 * @returns Объект, возвращаемый хуком `useInfiniteQuery` с данными запроса и методами для управления состоянием запроса.
 *
 * @template TData - Тип данных, возвращаемых запросом.
 * @template TPageData - Тип данных для каждой страницы.
 */
export const useObserveInfiniteQuery = <TPageData = unknown, TData = InfiniteData<TPageData>>(
	queryKey: QueryKey,
	options?: Omit<UseInfiniteQueryOptions<TPageData, unknown, TData, TPageData, QueryKey>, 'enabled' | 'queryKey'>, // Исключаем `enabled` и `queryKey`, так как они задаются явно
) => {
	return useInfiniteQuery<TPageData, unknown, TData>({
		queryKey,
		getNextPageParam: () => true,
		initialPageParam: true,
		enabled: false, // Запрос будет отключен по умолчанию
		...options,
	})
}

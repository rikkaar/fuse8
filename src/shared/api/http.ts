import {AxiosError, InternalAxiosRequestConfig, ParamsSerializerOptions} from 'axios'
import qs from 'qs'
import {Local} from '@/shared/constants'
import {Api, HttpClient} from './Api'

const injectAuthorization = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
	try {
		// replace тут существует из-за особенностей хранения переменных через useLocalStorage хук из usehooks-ts
		config.headers.Authorization = `Bearer ${localStorage.getItem(Local.TOKEN)?.replace(/^"(.*)"$/, '$1')}`
		return config
	} catch (error) {
		// редиректим на страницу логина, если токена вообще нет
		// navigate('/auth/signin');
		throw new Error('User is not specified')
	}
}

const responseIntercept = (error: AxiosError) => {
	const {response} = error
	if (response && response.status === 401) {
		console.error(`Был получен ответ со статусом 401`, error)
	}
	return Promise.reject(error)
}

const paramsSerializer = (params: Record<string, unknown>, options?: ParamsSerializerOptions): string => {
	return qs.stringify(params, {indices: false})
}

const $api = new Api(
	new HttpClient({
		baseURL: import.meta.env.VITE_API,
		paramsSerializer: paramsSerializer,
	}),
)

$api.http.instance.interceptors.request.use(injectAuthorization, (error) => Promise.reject(error))
$api.http.instance.interceptors.response.use((response) => response, responseIntercept)

export {$api}

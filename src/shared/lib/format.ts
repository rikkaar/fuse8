import {format} from 'date-fns'
import {enUS, ru} from 'date-fns/locale'

const locales = {ru, enUS}
const locale = global?.window?.__localeId__ || 'enUS'

export const formatLocalized = (...params: Parameters<typeof format>): string => {
	const [date, formatStr, options] = params

	return format(date, formatStr, {
		locale: locales[locale],
		...options,
	})
}

declare global {
	interface Window {
		__localeId__: keyof typeof locales
	}
}

import {format} from 'date-fns'
import {FormatRelativeToken, enUS, ru} from 'date-fns/locale'

const locales = {ru, enUS}
window.__localeId__ = 'enUS'

export const formatLocalized = (...params: Parameters<typeof format>): string => {
	const [date, formatStr, options] = params

	return format(date, formatStr, {
		locale: locales[window.__localeId__],
		...options,
	})
}

declare global {
	interface Window {
		__localeId__: keyof typeof locales
	}
}

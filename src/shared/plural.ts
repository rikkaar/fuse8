/**
 * Функция для склонения числительных в русском языке
 * @param number числительное
 * @param txt массив слов соответствующих числительному. Сколнения указываются в порядке: [один, три, пять]
 * @param cases а это...
 * @returns склоненное числительное
 *
 * @example `${30} ${plural(30, ['день', 'дня', 'дней'])}`
 */
export const plural = (number: number, txt: string[], cases: number[] = [2, 0, 1, 1, 1, 2]) =>
	txt[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]!]

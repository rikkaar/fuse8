import {useRef} from 'react'

/**
 * Хук для отслеживания предыдущего значения переменной.
 *
 * @param value - Текущее значение переменной, для отслеживания предыдущего состояния.
 * @param isEqualFunc - Опциональная функция для сравнения текущего и предыдущего значения. Если не указана, используется строгое неравенство.
 * @returns Предыдущее значение переменной, или `null`, если нет предыдущего значения или если текущее значение равно предыдущему.
 *
 * @template TValue - Тип значения, которое отслеживается.
 */
export const usePrevious = <TValue>(
	value: TValue,
	isEqualFunc?: (prev: TValue, next: TValue) => boolean,
): TValue | null => {
	// Ссылка на объект, содержащий текущее и предыдущее значения
	const ref = useRef<{value: TValue; prev: TValue | null}>({
		value,
		prev: null,
	})

	const current = ref.current.value

	// Обновление ссылки, если текущее значение не равно предыдущему
	if (isEqualFunc ? !isEqualFunc(current, value) : value !== current) {
		ref.current = {
			value,
			prev: current,
		}
	}

	return ref.current.prev
}

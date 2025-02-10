import {useMediaQuery} from 'usehooks-ts'

/**
 * @description
 * Хук `useTouch` проверяет, поддерживает ли устройство ввод при помощи сенсорного экрана.
 * Возвращает булево значение, указывающее на наличие сенсорного ввода (например, для мобильных устройств).
 *
 * @returns `true`, если устройство поддерживает сенсорный ввод; `false` в противном случае.
 */
export const useTouch = () => {
	return useMediaQuery('(pointer: coarse)')
}

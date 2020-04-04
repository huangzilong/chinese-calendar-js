import calendar from '../src'
import { HOLIDAYS_TYPE } from '../src/constants'

test('法定的节假日', () => {
  expect(calendar.isHoliday('2020-10-08')).toBe(true)
  expect(calendar.getHolidayDetail('2020-10-07')).toEqual(HOLIDAYS_TYPE.NATIONAL_DAY)
})

test('非法定的节假日', () => {
  expect(calendar.isHoliday('2020-04-04')).toBe(false)
  expect(calendar.getHolidayDetail('2020-04-04')).toEqual([])
})

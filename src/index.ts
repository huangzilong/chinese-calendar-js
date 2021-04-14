import { Holidays } from './constants'

const isHoliday = (day: string): boolean => {
  return Holidays.has(day)
}

const getHolidayDetail = (day: string): (string | number)[] => {
  return Holidays.get(day) || []
}

export default {
  isHoliday,
  getHolidayDetail,
}

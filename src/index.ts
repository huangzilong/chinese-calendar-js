import { Holidays } from './constants'

export default {
  isHoliday: (day: string): boolean => {
    return Holidays.has(day)
  },
  getHolidayDetail: (day: string): (string | number)[] => {
    return Holidays.get(day) || []
  },
}

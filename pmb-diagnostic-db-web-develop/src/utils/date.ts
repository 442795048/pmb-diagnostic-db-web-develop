import moment from 'moment'
/**
 * 根据具体时间，算出往前/往后N个月年份
 */
export const getSpecifyMonths = (date: any, count: any) => {
	const year = new Date(date).getFullYear()
	const mouth = new Date(date).getMonth()
	const before = () => {
		const current = new Date(year, mouth - (count - 1), 1)
		return moment(current).format('YYYY-MM-DD')
	}
	const after = () => {
		const current = new Date(year, mouth + (count - 1), 1)
		const lastDay =	moment(current).endOf('month').format('YYYY-MM-DD');
		return lastDay
	}
  return {
		before,
		after
	}
}

/**
 * 获取指定月份第一天
 */
export const getFirstDayOfMonth = (time: any) => {
  return moment(time).startOf('month').format('YYYY-MM-DD');
}
/**
 * 获取指定月份最后一天
 */
export const getLastDayOfMonth = (time: any) => {
  return moment(time).endOf('month').format('YYYY-MM-DD');
}
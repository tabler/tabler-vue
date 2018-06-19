export const months = [
  'Month',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'September',
  'October',
  'November',
  'December'
]

export const days = ['Day', 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

export function years () {
  const years = ['Years']
  for(let year = 2018; year >= 1897; year --) {
    years.push(year)
  }
  return years
}
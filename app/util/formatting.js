import moment from 'moment-timezone'

export default timeStampToDate = (timeStamp) => {

  return moment.unix(timeStamp).tz('Europe/Helsinki').calendar()
}
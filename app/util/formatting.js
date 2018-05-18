import moment from 'moment-timezone'

export const timeStampToDate = (timeStamp) => {

  return moment.unix(timeStamp).tz('Europe/Helsinki').calendar()
}

export const removeFromArray = (array, element) => {

  return array.filter(elem => {

    return elem !== element
  })
}
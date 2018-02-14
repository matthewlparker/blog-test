import React from 'react'

const TimeFormat = ({time}) => {
  let year = time.substring(2, 4)
  let month = time.substring(5, 7)
  let formatMonth = (month) => {
    switch(month){
    case '01': return 'Jan'
    case '02': return 'Feb'
    case '03': return 'Mar'
    case '04': return 'Apr'
    case '05': return 'May'
    case '06': return 'Jun'
    case '07': return 'Jul'
    case '08': return 'Aug'
    case '09': return 'Sep'
    case '10': return 'Oct'
    case '11': return 'Nov'
    case '12': return 'Dec'
    default: return ''
    }
  }

  month = formatMonth(month)

  return (
    <div className='article-date'>
      {month}
      <br />
      {year}
    </div>
  )
}

export default TimeFormat

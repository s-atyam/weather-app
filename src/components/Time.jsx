import React from 'react'

function Time({weather:{dt}}) {
    const days =['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
    const month =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const d = new Date(dt*1000)

    let varible = `${days[d.getDay()]}, ${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()} | Local Time: ${d.getHours()>12?d.getHours()-12:d.getHours()}:${d.getMinutes()<=9?`0${d.getMinutes()}`:`${d.getMinutes()}`} ${d.getHours()>=12?'PM':'AM'}`

  return (
    <div className="flex w-1/3 h-14  rounded-md mt-10 shadow-lg shadow-cyan-700 items-center justify-center text-gray-700 text-xl">
        {`${varible}`}
      </div>
  )
}

export default Time
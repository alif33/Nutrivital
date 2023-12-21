import React from 'react'

const SheduleCard = ({ day, time}) => {
  return (
      <div className='text-center font-urbanist  font-bold '>
          <h5 className="text-2xl leading-7">{ day}</h5>
          <p className="font-normal text-4xl mt-3">{ time}</p>
    </div>
  )
}

export default SheduleCard
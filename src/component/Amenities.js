import React from 'react'

const Amenities = (props) => {
  console.log(props)

  return (
    <>
      <div className='amenities-main'>
          <h3>Amenities</h3>
        <div className='amenities-con'>
        <h1>azam = {props.title2}</h1>
        <h3>{props.title}</h3>
          <div>
       <h1>{props.title}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Amenities
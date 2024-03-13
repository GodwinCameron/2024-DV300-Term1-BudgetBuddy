import React from 'react'

function TotalCard(props) {

  return (
    <div className='total-card p-2'>
        {/* <div className='icon' style={{backgroundColor: total.color}}> */}
        <div className='icon' style={{backgroundColor: '#E4FDCD'}}>
            {/* <img src={total.icon} width={40} height={40} /> */}
            <img src={'income.png'} width={40} height={40} />
        </div>
        <div className='labels'>
            <h4>R {props.total}</h4>
            {/* <p>{total.label}</p> */}
            <p>Income before tax</p>
        </div>
    </div>
  )
}

export default TotalCard
import React from 'react'

function TotalCardCopy(props) {
  const {total} = props

  return (
    <div className='total-card p-2'>
        <div className='icon' style={{backgroundColor: total.color}}>
            <img src={total.icon} width={40} height={40} />
        </div>
        <div className='labels'>
            <h4>R {total.total}</h4>
            <p>{total.label}</p>

        </div>
    </div>
  )
}

export default TotalCardCopy
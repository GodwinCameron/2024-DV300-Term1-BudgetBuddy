import React from 'react'

function LastTotalCard(props) {
  const {total, amount} = props;

  return (
    <div className='final-total p-2'>
        <div className='icon' style={{ backgroundColor: amount > 0 ? total.color : "#fc3a21" }}>
            <img src={total.icon} width={40} height={40} />
        </div>
        <h2 style={{color: amount > 0 ? "#caff91" : "#ff745e"}}>{new Intl.NumberFormat('en-za', { style: 'currency', currency: 'ZAR' }).format(amount)}</h2>
        <p>{total.label}</p>
    </div>
  )
}

export default LastTotalCard
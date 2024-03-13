import React from 'react'
import TaxBlock from './items/TaxBlock'
import { dummyIncome } from '../utils'

function Taxes(props) {
  return (
    <div data-toggle="tooltip" title="Those bastards!">
        <h3>Tax Bracket Calculation</h3>

        {/* List */}
        <div className='scroll-row hide-scroll'>
            {dummyIncome.map((item, index) => (
                <TaxBlock key={index} tax={item} />
            ))}
        </div>
    </div>
  )
}

export default Taxes
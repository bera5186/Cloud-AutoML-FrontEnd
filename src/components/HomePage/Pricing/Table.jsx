import React, { useState } from 'react'

// components
import Switch from './Switch'

// helpers
import {monthlyPrice, yearlyPrice} from './Price'

const Table = () => {
    

    

    const [pricing, setPricing] = useState(monthlyPrice)
    const [title, setTitle] = useState('Monthly')


    const handleToggle = () => {

        if(pricing === monthlyPrice){
            setPricing(yearlyPrice)
            setTitle('Annually')
        }
        else {
            setPricing(monthlyPrice)
            setTitle('Monthly')
        }

    }

    return (
        <div className="table-wrapper">
            <Switch pricing={title} handleToggle={handleToggle}/>
            <h1>{title}</h1>
            <ul>
                <li>Basic: {pricing.basic}</li>
                <li>Standard: {pricing.standard}</li>
                <li>Premium: {pricing.premium}</li>
            </ul>


        </div>


    )
}

export default Table

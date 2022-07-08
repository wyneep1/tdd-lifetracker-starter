
import * as React from 'react'
export default function SummaryStat (props){
    return(
        <div className="summary-stat">
            <h2>Calories: {props.stat}</h2>
            { props.label ? <h3 className='label'> 
            Category: {props.label} </h3> : null }
            { props.substat ? <h4 className='substat'> 
            Date: {props.substat} </h4> : null}

        </div>
    )
}
import * as React from "react"
import SummaryStat from "../SummaryStat/SummaryStat"
import "./ActivityFeed.css"
export default function ActivityFeed(props){
    return (
        <div className='activity-feed'>
            <div className='per-category'>
              <div className="box-1">
                  <div className="nutrition">
                <h2> Average Daily Calories </h2>
                </div>
                {props?.activity?.map((activity) => (
                    <SummaryStat stat={parseInt(activity?.calories).toFixed(2)} label={activity?.category} substat={activity?.created_at?.substring(0,10)}/>
                ))}
                  </div>
                <div className="box-2">
                  <div className="nutrition">
                <h2> Total Calories Per Day </h2>
                  </div>
                {props?.activity2?.map((activity) => (
                    <SummaryStat stat={parseInt(activity?.calories).toFixed(2)} label={activity?.category} substat={activity?.created_at.substring(0,10)}/>
                ))}
                </div>
            </div>
        </div>
    )  
}

/*
 <div className="button">
        <button className="eBtn" >Add Exercise</button>
        <button className="sBtn">Log Sleep</button>
        <button className="nBtn">Record Nutrition</button>
      </div>
        <div className="feed">
          <div className="exercise">
          <h2>Total Exercise Minutes</h2>
        </div>
        <div className="sleep">
          <h2>Avg Sleep Hours</h2>
        </div>
        </div>

        <h2>More Stats</h2>
      <div class="more-stats">
          <div className="calories">
            <h2>Maximum Hourly Calories</h2>
          </div>
        <div className="intense">
            <h2>Avg Exercise Intensity</h2>
          </div>
        <div className="hours">
          <h2>Total Hours Slept</h2>
        </div>
        </div>
      
    </div>
  )
}*/


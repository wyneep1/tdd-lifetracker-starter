import React from 'react'
import AuthContext from '../../../../contexts/auth'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import "./ActivityPage.css"
export default function ActivityPage() {
  const {auth} = useContext(AuthContext)
  return (

    <div >
      {!auth && <Navigate to="/login" replace={true}/>}
      <h1>Activity Feed</h1>
      
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
        <div className="nutrition">
          <h2>Average Daily Calories</h2>
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
}
//need an onClick={handleExercise}
//If the `isProcessing` flag is `true`, it should render the `Loading.jsx` component
//If the `isProcessing` flag is `false`, it should render the `ActivityFeed.jsx` component and pass it the
//

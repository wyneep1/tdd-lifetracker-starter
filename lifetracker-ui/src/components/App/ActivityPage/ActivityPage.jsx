import React from 'react'
import AuthContext from '../../../../contexts/auth'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import "./ActivityPage.css"
import ActivityContext from '../../../../contexts/activity'
import ActivityFeed from '../ActivityFeed/ActivityFeed'

export default function ActivityPage() {
  const {auth} = useContext(AuthContext)
  const{errorContext, activityContext, activityContext2, loadingContext} = useContext(ActivityContext)
  const [isLoading, setIsLoading] = loadingContext
  const [error, setError] = errorContext
  const [activity, setActivity] = activityContext
  const [activity2, setActivity2] = activityContext2

  return (
    <div >
      {!auth && <Navigate to="/login" replace={true}/>}
      <h1>Activity Feed</h1>
    <ActivityFeed activity={activity } activity2={activity2}/>
    </div>
  ) }  

  
//need an onClick={handleExercise}
//If the `isProcessing` flag is `true`, it should render the `Loading.jsx` component
//If the `isProcessing` flag is `false`, it should render the `ActivityFeed.jsx` component and pass it the
//

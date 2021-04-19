import firebase from '../../firebase'
import { Redirect } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {CircularProgress} from '@material-ui/core'

export default () => {
  const [loading, setloading] = useState(true)

  console.log("in logout");
  useEffect(() => {
    firebase.auth().signOut()
      .then(() => {
        alert("logged out successfully")
      })
      .finally(() => {
      setloading(false)
    })
  }, [])
  return (
 
    <div>{ loading?<CircularProgress />:<Redirect to="/" />}</div>
  )
}
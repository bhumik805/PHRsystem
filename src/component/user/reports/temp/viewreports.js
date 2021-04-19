import "./css/viewreport.css"

import { useState, useEffect } from 'react'
import firebase from '../../../../firebase'
import ReportPresent from '../Reportpresent'
import AddReport from '../addreport'
import Topbar from '../../../home/topbar'
import Header from '../../../home/header'

export default (props) => {
  const reff = firebase.firestore().collection("users").doc(props.uid).collection("reports")
  return (
    <div>
      <div className="home">
        <Topbar />
        <Header />
      </div>
      <div className="viewreport">
        <div className="container-md">
          {reff ? <ReportPresent reff={reff}/> :<></>}
          {reff ? <AddReport reff={reff}/> : <></>}
        </div>
      </div>
    </div>
  )
}
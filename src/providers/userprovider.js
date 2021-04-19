import { useState, createContext , useEffect } from 'react'
import firebase from '../firebase'




export const UserinfoContext = createContext();

export function UserinfoProvider(props) {
  const [userdetails, setUserdetails] = useState({
    loading: true,
    isAuthenticated: false,
    email: "",
    phone: "",
    uid:"",
    displayName: ""
  })
  const setUserinfo = user => {
    setUserdetails(()=>({
      isAuthenticated: true,
      email: user.email,
      number: user.phoneNumber,
      displayName: user.displayName,
      reports: [],
      uid: user.uid,
      loading:false
    }))
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserinfo(user)
      } else {
        if (userdetails.loading) {
          setUserdetails((perviousState) => perviousState.loading=false)
        }
      }
    })
  }, [])
  return (
    <UserinfoContext.Provider value={[userdetails,setUserdetails]}>
      {props.children}
    </UserinfoContext.Provider>
  )
}
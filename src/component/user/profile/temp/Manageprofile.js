import { useState,useEffect, createContext} from 'react'
import firebase from '../../../firebase' 
import Profile from './Profile'

const Manageprofile = (props) => {
  const [userProfile, setUserProfile] = useState({
    displayName: "",
    firstName: "",
    lastName: "",
    phoneNumber: null,
    address: "",
    city: "",
    country: "",
    postalCode: null,
    bloodGroup: "",
    height: "",
    weight: null,
    familyDoc: "",
    familyDocContact: "",
    disease_allergy:""
  })

  useEffect(() => {
    const unsubscibe = firebase.firestore().collection("users").doc(props.uid).onSnapshot((userProfileDoc) => {
      setUserProfile({
        ...userProfile,
        ...userProfileDoc.data()
      })
    })
    return () => {
      unsubscibe()
    }
  },[])
  const updateProfile = () => {
    firebase.firestore().collection("users").doc(props.uid).set(userProfile)
      .then(() => {
        console.log("updated");
      })
      .catch((err) => {
      console.log(err);
    })
  }
  const updateInfo = (field, value) => {
    setUserProfile({
      ...userProfile,
      [field]:value
    })
  }
  return (
    <Profile profile={userProfile} updateProfile={updateProfile} updateInfo={ updateInfo }/>
  )
}

export default Manageprofile
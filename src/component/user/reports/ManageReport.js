import { useState , useEffect } from 'react'
import firebase from '../../../firebase'
import "firebase/storage"
import Reportpresent from './Reportpresent'
import AddReport from './addreport'
import Topbar from '../../home/topbar'
import Header2 from '../../home/header2'
import Footer from '../../home/footer'

import { Dropdown } from 'react-bootstrap'
import "./css/viewreport.css"
import EditAccess from './editAccess'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'


const ManageReport = (props) => {
  const storageref = firebase.storage().ref()
  const [currentreportemail, setCurrentreportemail] = useState(props.email)
  const [currentreportuid, setCurrentreportuid] = useState(props.uid)
  const [data, setData] = useState(() => ({

    hasaccess: [],
    accessto: [],
    request: [],
    accesstouid: []
  }))

  useEffect(() => {
    const unsub = firebase.firestore().collection("accessdetails").doc(props.email).onSnapshot((snap) => {
      snap.data() && setData(snap.data())
    })
    return ()=>{unsub()}
  }, [props.uid]) 
  const addReport =(report, imageFiles) => {

    for (let i = 0; i < imageFiles.length; i++) {
      const uploadTask = storageref.child(`reports/${report.id}/${i + 1}`).put(imageFiles[i])
      uploadTask.on('state_changed',
        (snapshot) => {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((durl) => {
            return firebase.firestore().collection("users").doc(props.uid).collection("reports").doc(report.id).update({
              src: firebase.firestore.FieldValue.arrayUnion(durl)
            }).catch((err) => console.log(err))
          })
        }
      )
    }
    firebase.firestore().collection("users").doc(props.uid).collection("reports").doc(report.id).set(report).catch((err) => {
      console.log(err);
    })
  }
  const setCurrentValue = (val, index)=> {

    setCurrentreportemail(val)
    setCurrentreportuid(data.accesstouid[index])
  }
  const deleteReport = (reportID,title) => {
    
    const d = window.confirm(`Delete ${title}???`)
    if(!d)return
    firebase.firestore().collection("users").doc(props.uid).collection("reports").doc(reportID)
      .delete()
      .then(() => {
        let folref = storageref.child(`reports/${reportID}`)
        folref.listAll()
          .then((result) => {
            result.items.forEach((file) => {
              file.delete()
            })
          })
      })
      .then(() => {
        console.log(reportID+" deleted");
      })
      .catch((err) => {
        console.log(err);
      })
      
    
  }
  const addAccess = (email) => {
    firebase.firestore().collection("accessdetails").doc(props.email).update({
      hasaccess: firebase.firestore.FieldValue.arrayUnion(email)
    })
      .then(() => {
        firebase.firestore().collection("accessdetails").doc(email).update({
          accessto: firebase.firestore.FieldValue.arrayUnion(props.email),
          accesstouid: firebase.firestore.FieldValue.arrayUnion(props.uid)
        })
      })
      .then(() => {
        
        alert(`${email} is added`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const removeAccess = (email) => {
    firebase.firestore().collection("accessdetails").doc(props.email).update({
      hasaccess: firebase.firestore.FieldValue.arrayRemove(email)
    })
      .then(() => {
        firebase.firestore().collection("accessdetails").doc(email).update({
          accessto: firebase.firestore.FieldValue.arrayRemove(props.email),
          accesstouid: firebase.firestore.FieldValue.arrayRemove(props.uid)
        })
      })
      .then(() => {
        alert(`${email} is removed`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const removeAccessto = (email) => {
    const d = window.confirm(`remove ${email} ????`)
    if (d) {
      firebase.firestore().collection("accessdetails").doc(props.email).update({
        accessto: firebase.firestore.FieldValue.arrayRemove(email),
        accesstouid: firebase.firestore.FieldValue.arrayRemove(data.accesstouid[data.accessto.indexOf(email)])
      })
        .then(() => {
          firebase.firestore().collection("accessdetails").doc(email).update({
            hasaccess: firebase.firestore.FieldValue.arrayRemove(props.email)
          })
        })
        .then(() => {
          setCurrentreportemail(props.email)
            setCurrentreportuid(props.uid)
          alert(`${email} is removed`)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  const addRequest = (email) => {
      firebase.firestore().collection("accessdetails").doc(email).update({
      requests: firebase.firestore.FieldValue.arrayUnion(props.email)
    })
        .then(() => {
        alert(`${email} is added`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const acceptRequest = (email) => {
    firebase.firestore().collection("accessdetails").doc(email).update({
      accessto: firebase.firestore.FieldValue.arrayUnion(props.email),
      accesstouid:firebase.firestore.FieldValue.arrayUnion(props.uid)
    })
      .then(() => {
        firebase.firestore().collection("userID").doc(props.email).update({
          requests: firebase.firestore.FieldValue.arrayRemove(email),
          hasaccess:firebase.firestore.FieldValue.arrayUnion(email)
        })
      })
      .then(() => {
        alert(`${email} is removed`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const declineRequest = (email) => {
      firebase.firestore().collection("accessdetails").doc(props.email).update({
        requests: firebase.firestore.FieldValue.arrayRemove(email),
      })
      .catch((err) => {
        console.log(err)
      })
  }

    return ( 
      <div>
        <div className="home">
          <Topbar />
          <Header2 />
          
        </div>
        <div className="mainbodymar">
          <div className="container-md">
            <div className="reportbtns">
              <div className="twobtns">
                <AddReport add={(report, reportFiles) => addReport(report, reportFiles)} />
                <EditAccess
                  addAccess={(email) => { addAccess(email) }}
                  removeAccess={(email) => { removeAccess(email) }}
                  addRequest={(email) => { addRequest(email) }}
                  acceptRequest={(email) => { acceptRequest(email) }}
                  declineRequest={(email) => { declineRequest(email) }}
                  hasaccess={data.hasaccess}
                  requests={data.requests}
                />
              </div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ marginBottom: "5px" }}>
                  {currentreportemail}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => { setCurrentreportemail(props.email); setCurrentreportuid(props.uid) }}>{ props.email }</Dropdown.Item>
                  {data.accessto.map((email, index) => <div key={index}><Dropdown.Item  className="drpdwnlinks" onClick={() => setCurrentValue(email, index)}>{email} </Dropdown.Item><RemoveCircleIcon className="emailremovebtn" onClick={() => removeAccessto(email)} /></div>)}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Reportpresent uid={props.uid} currentreportuid={currentreportuid} deleteReport={(rid,title)=>deleteReport(rid,title)}/>
          </div>
        </div>
        <div className="home"><Footer /></div>
      </div>

    )
  
}


export default ManageReport
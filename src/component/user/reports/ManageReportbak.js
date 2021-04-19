import { Component } from 'react'
import firebase from '../../../firebase'
import "firebase/storage"
import Reportpresent from './Reportpresent'
import AddReport from './addreport'
import Topbar from '../../home/topbar'
import Header2 from '../../home/header2'
import { Dropdown } from 'react-bootstrap'
import "./css/viewreport.css"
import EditAccess from './editAccess'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'

class ManageReport extends Component {
  state = {
    reports: [],
    newreport: {},
    hasaccess: [],
    accessto: [this.props.email],
    request: [],
    currentreportemail: this.props.email,
    currentreportuid: this.props.uid,
    accesstouid: [],
    hasaccessuid: [],
    loading: true
  }
  componentDidMount() {
    firebase.firestore().collection("userID").doc(this.props.email).get().then((snapshot) => {
      const data = snapshot.data()
      this.setState({ ...data })
    })
      .catch((err) => {
        console.log(err);
      })
  }
  addReport(report, imageFiles) {
    const storageref = firebase.storage().ref()
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
            return firebase.firestore().collection("users").doc(this.props.uid).collection("reports").doc(report.id).update({
              src: firebase.firestore.FieldValue.arrayUnion(durl)
            }).catch((err) => console.log(err))
          })
        }
      )
    }
    firebase.firestore().collection("users").doc(this.props.uid).collection("reports").doc(report.id).set(report).catch((err) => {
      console.log(err);
    })
  }
  setCurrentValue(val, index) {

    this.setState({
      currentreportemail: val,
      currentreportuid: this.state.accesstouid[index]
    })
  }
  deleteReport(uid) {

  }
  addAccess(email) {
    firebase.firestore().collection("userID").doc(this.props.email).update({
      hasaccess: firebase.firestore.FieldValue.arrayUnion(email)
    })
      .then(() => {
        firebase.firestore().collection("userID").doc(email).update({
          accessto: firebase.firestore.FieldValue.arrayUnion(this.props.email),
          accesstouid: firebase.firestore.FieldValue.arrayUnion(this.props.uid)
        })
      })
      .then(() => {
        
        alert(`${email} is added`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  removeAccess(email) {
    firebase.firestore().collection("userID").doc(this.props.email).update({
      hasaccess: firebase.firestore.FieldValue.arrayRemove(email)
    })
      .then(() => {
        firebase.firestore().collection("userID").doc(email).update({
          accessto: firebase.firestore.FieldValue.arrayRemove(this.props.email),
          accesstouid: firebase.firestore.FieldValue.arrayRemove(this.props.uid)
        })
      })
      .then(() => {
        alert(`${email} is removed`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  removeAccessto(email) {
    const d = window.confirm(`remove ${email} ????`)
    if (d) {
      firebase.firestore().collection("userID").doc(this.props.email).update({
        accessto: firebase.firestore.FieldValue.arrayRemove(email),
        accesstouid: firebase.firestore.FieldValue.arrayRemove(this.state.accesstouid[this.state.accessto.indexOf(email)])
      })
        .then(() => {
          firebase.firestore().collection("userID").doc(email).update({
            hasaccess: firebase.firestore.FieldValue.arrayRemove(this.props.email)
          })
        })
        .then(() => {
          const accessto = this.state.accessto.filter(val => val != email)
          this.setState((prev) => ({
            ...prev,
            accessto,
            currentreportemail: this.props.email,
            currentreportuid: this.props.uid
          }))
          alert(`${email} is removed`)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  addRequest(email) {
      firebase.firestore().collection("userID").doc(email).update({
      requests: firebase.firestore.FieldValue.arrayUnion(this.props.email)
    })
        .then(() => {
        alert(`${email} is added`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  acceptRequest(email) {
    firebase.firestore().collection("userID").doc(email).update({
      accessto: firebase.firestore.FieldValue.arrayUnion(this.props.email),
      accesstouid:firebase.firestore.FieldValue.arrayUnion(this.props.uid)
    })
      .then(() => {
        firebase.firestore().collection("userID").doc(this.props.email).update({
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
  declineRequest(email) {
      firebase.firestore().collection("userID").doc(this.props.email).update({
        requests: firebase.firestore.FieldValue.arrayRemove(email),
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {

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
                <AddReport add={(report, reportFiles) => this.addReport(report, reportFiles)} />
                <EditAccess
                  addAccess={(email) => { this.addAccess(email) }}
                  removeAccess={(email) => { this.removeAccess(email) }}
                  addRequest={(email) => { this.addRequest(email) }}
                  acceptRequest={(email) => { this.acceptRequest(email) }}
                  declineRequest={(email) => { this.declineRequest(email) }}
                  hasaccess={this.state.hasaccess}
                  requests={this.state.requests}
                />
              </div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ marginBottom: "5px" }}>
                  {this.state.currentreportemail}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => { this.setState({ currentreportemail: this.props.email, currentreportuid: this.props.uid }) }}>{this.props.email}</Dropdown.Item>
                  {this.state.accessto.map((email, index) => <div><Dropdown.Item key={index} className="drpdwnlinks" onClick={() => this.setCurrentValue(email, index)}>{email} </Dropdown.Item><RemoveCircleIcon className="emailremovebtn" onClick={() => this.removeAccessto(email)} /></div>)}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Reportpresent uid={this.props.uid} currentreportuid={this.state.currentreportuid} />
          </div>
        </div>
      </div>

    )
  }
}


export default ManageReport
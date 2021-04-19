import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import firebase from '../../../firebase'
import { uuid } from 'uuidv4'
import "firebase/storage"

export default (props) => {

  
  const [reportFiles,setReportFiles] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [reportDescription, setReportDescription] = useState("")
  const [reportTitle, setReportTitle] = useState("")
  const [reportid, setReportid] = useState(uuid())
  const [date,setDate] = useState(()=>new Date())
  // const reportRef = props.ref.doc(reportid)
  const addRe =  (e) => {
    e.preventDefault()
    
    const report={
      title: reportTitle,
      src : null,
      description: reportDescription,
      id: reportid,
      date: firebase.firestore.FieldValue.serverTimestamp(date)
    }
      setReportDescription("")
      setReportFiles(null)
      setReportTitle("")
      setReportid(uuid())
    setShowModal(false)
    // console.log(reportFiles);
      props.add(report,reportFiles)
  }
  const hide = () => {
    setReportDescription("")
    setReportFiles(null)
    setReportTitle("")
    setReportid(()=>uuid())
    setDate(()=>new Date())
    setShowModal(false)
  }
  return (
    <div>
      
      <Button onClick={() => setShowModal(true)} style={{marginBottom:"5px"}}>Add report</Button>

      <Modal
        show={showModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={()=>hide()}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add report
          </Modal.Title>
        </Modal.Header>
        <Form style={{
          fontFamily: "sans-serif",
          fontSize: "17px"
        }}
          onSubmit={addRe} >
          <Modal.Body>
            <Form.Group>
              <Form.File label="Select report" required onChange={(e) => setReportFiles(e.target.files)} multiple/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Name of report</Form.Label>
              <Form.Control type="text" value={reportTitle} onChange={(e) => setReportTitle(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description of report</Form.Label>
              <Form.Control as="textarea" value={reportDescription} onChange={(e) => setReportDescription(e.target.value)} rows={2} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date of report</Form.Label>
              <Form.Control type="date" value={date.toJSON().slice(0,10)} onChange={(e)=>{setDate(new Date(e.target.value))}}></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>hide()}>Cancel</Button>
            <Button variant="primary" type="submit">Add report</Button>
          </Modal.Footer>
        </Form>
      </Modal></div>)
}
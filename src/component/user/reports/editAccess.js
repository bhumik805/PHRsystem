import { Tabs, Tab, Modal, Button, ListGroup } from 'react-bootstrap'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import { useState } from 'react'

export default (props) => {

  const [showmodal, setShowModal] = useState(false)
  const [addemail, setAddemail] = useState("")
  const [addreq,setAddreq] = useState("")
  const hide = () => {
    setShowModal(false)
  }
  const delemail = (email) => {
    const d = window.confirm(`remove ${email}?`)
    if (d) {
      props.removeAccess(email) 
      setShowModal(false)
    }
  }
  const addAccess = () => {
    if(!addemail){return}
    const d = window.confirm(`add ${addemail}?`)
    if (d) {
      props.addAccess(addemail) 
      setAddemail("")
      setShowModal(false)
    }
  }
  const addReq = () => {
    if(!addreq){return}
    setShowModal(false)
    setAddreq("")
    props.addRequest(addreq)
  }
  const acceptRequest = (email) => {
    const d = window.confirm(`add ${email}?`)
    if (d) {
      props.acceptRequest(email) 
      setShowModal(false)
    }
  }
  const declineRequest = (email) => {
    setShowModal(false)
    props.declineRequest(email)
  }
  return (

    <div>
      <Button style={{ marginBottom: "5px" }} onClick={() => setShowModal(true)}>Edit report access</Button>
      <Modal
        show={showmodal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => hide()}
        centered
      >
        <Tabs defaultActiveKey="Has access" id="controlled-tab-example">
          <Tab eventKey="Has access"  title="Has access" >
             <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  People who have access to your reports
                </Modal.Title>
              </Modal.Header>
            <Modal.Body >
              <ListGroup variant="flush">
                {props.hasaccess && props.hasaccess.map((email,index) =>
                {
                  return <ListGroup.Item key={index}>{email}<RemoveCircleIcon data-toggle="tooltip" title="Remove access" className="float-right editmodicon"  onClick={()=>delemail(email) }/></ListGroup.Item>
                })}
              </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <input className="form-control col-sm-6" placeholder="email" onChange={ (e)=>setAddemail(()=>e.target.value) }  value={addemail}/>
              <Button variant="primary" onClick={addAccess}>Add email</Button>
              <Button variant="secondary" onClick={hide}>Close</Button>
            </Modal.Footer>
          </Tab>
          <Tab eventKey="Requests" title="Requests" >
          <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Request people for their reports
                </Modal.Title>
              </Modal.Header>
            <Modal.Body >
              <ListGroup variant="flush">
                  {props.requests && props.requests.map((email) =>
                  {
                    return <ListGroup.Item>{email} <CloseIcon className="float-right editmodicon" onClick={() => declineRequest(email)} /><CheckIcon className="float-right editmodicon" onClick={ ()=>acceptRequest(email) }/></ListGroup.Item>
                  })}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
            <input className="form-control col-sm-6" placeholder="email" onChange={ (e)=>setAddreq(()=>e.target.value) }  value={addreq}/>
              <Button variant="primary" onClick={addReq}>Request</Button>
              <Button variant="secondary" onClick={hide}>Close</Button>
            </Modal.Footer>
          </Tab>
        </Tabs>


      </Modal>
    </div>
  )
}

// || request.auth.token.email in get(/databases/$(database)/documents/accessdetails/$(emailofuser())).data.hasaccess
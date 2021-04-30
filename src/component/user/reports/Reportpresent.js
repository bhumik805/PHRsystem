import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete';
import firebase from '../../../firebase'
import { useEffect, useState } from 'react'
import ImgsViewer from 'react-images-viewer'
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from 'axios'



function Reportpresent(props) {
  const [reports, setReports] = useState([])
  const [src, setSrc] = useState([])
  const [showreport, setShowreport] = useState(false)
  const [currimg, setCurrimg] = useState(0)
  const [title, setTitle] = useState("")
  
  useEffect(() => {
    const unsub = firebase.firestore().collection("users").doc(props.uid==props.currentreportuid?props.uid:props.currentreportuid).collection("reports").orderBy("date", "asc").onSnapshot((querySnapsShot) => {

      const arr = []
      querySnapsShot.forEach((report) => {
        arr.push(report.data())
      })
      setReports(arr)
    })
    return () => { unsub() }
  }, [props.currentreportuid])
  const ViewReport = (srcs, title) => {
    if (srcs) {
      const srcarr = srcs.map((url) => {
        return {
          src: url
        }
      })
      setTitle(title)
      setSrc(srcarr)
      setShowreport(true)
    }
  }
  const closeReport = () => {
    setTitle("")
    setSrc([])
    setShowreport(false)
  }
  async function downloadIMG() {
    const res = await axios({
      url: src[currimg].src,
      method: "GET",
      responseType: "blob"
    })

    const url = window.URL.createObjectURL(new Blob([res.data]))
    const a = document.createElement("a")
    a.href = url
    a.download = `${title} ${currimg + 1}.jpg`
    a.click()
  }
  return (
    <div className="card-deck row" style={{marginBottom: "45px",
      marginTop: "20px"}}>
      
      {reports && reports.map((report) => {

        return (
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4"  key={report.id}>
            <div className="card">

              <div className="view overlay cardimg" style={{ height: " 320px" }} onClick={() => { ViewReport(report.src, report.description) }}>
                <img className="card-img-top" src={report.src && report.src[0]} alt="Report images" />
              </div>

              <div className="card-body reportbody">
                <div className="card-title">{report.title}</div>

                <p className="card-text">{report.description}</p>
                <small className="small">{report.date && report.date.toDate().toJSON().slice(0, 10)}</small>
              </div>
              {props.uid==props.currentreportuid?<div className="deleicon" onClick={() => { props.deleteReport(report.id,report.title)  }}>
                <Fab color="primary">
                  <DeleteIcon />
                </Fab>
              </div>:null}
            </div>
          </div>)
      })}
      
      <ImgsViewer
        imgs={src}
        enableKeyboardInput={true}
        backdropCloseable={true}
        isOpen={showreport}
        currImg={currimg}
        onClose={closeReport}
        closeBtnTitle="close"
        leftArrowTitle=""
        rightArrowTitle=""
        onClickImg={downloadIMG}
        customControls={[<GetAppIcon style={{
          color: "white",
          position: "relative",
          top: "13px",
          cursor: "pointer"
        }} onClick={downloadIMG} />]}
        onClickNext={() => setCurrimg(curr => curr + 1)}
        onClickPrev={() => setCurrimg(curr => curr - 1)}

      />

    </div>)
}

export default Reportpresent
// props.report.text.substr(0, 80)).concat("...")
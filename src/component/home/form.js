import { useState } from 'react'
import firebase from '../../firebase'
export default () => {
  // window.addEventListener('load', function () {
    
  //   // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //   var forms = document.getElementsByClassName('needs-validation');
  //   // Loop over them and prevent submission
  //   var validation = Array.prototype.filter.call(forms, function(form) {
  //     form.addEventListener('submit', function(event) {
  //       if (form.checkValidity() === false) {
         
  //       }
  //       event.preventDefault();
  //       event.stopPropagation();
  //       form.classList.add('was-validated');
  //     }, false);
  //   });
  // }, false);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [feedback,setFeedback] = useState("")
  const submit = (e) => {
    e.preventDefault()
    firebase.firestore().collection("feedbacks").add({
      name,
      email,
      subject,
      feedback,
      date:firebase.firestore.FieldValue.serverTimestamp()
    })
      .then(() => {
        alert("Thank you for yout feedback")
        setName("")
        setEmail("")
        setSubject("")
        setFeedback("")
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div>
      <form className="needs-validation" onSubmit={submit} >
        <div className="form-row">
          <div className="col-md-6 form-group">
            <input type="text" name="name" value={name} className="form-control" id="name" placeholder="Your Name" onChange={(e)=>setName(()=>e.target.value)} />
            <div className="validate"></div>
          </div>
          <div className="col-md-6 form-group">
            <input type="email" className="form-control" value={email} name="email" id="email" placeholder="Your Email" onChange={(e)=>setEmail(()=>e.target.value)} />
            <div className="validate"></div>
          </div>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="subject" value={subject} id="subject" placeholder="Subject" onChange={(e)=>setSubject(()=>e.target.value)} />
          <div className="validate"></div>
        </div>
        <div className="form-group">
          <textarea className="form-control" name="message" rows="5" value={feedback}  onChange={(e)=>setFeedback(()=>e.target.value)} required></textarea>
          <div className="validate"></div>
        </div>
        <div className="text-center"><button className="btn btn-primary contactsubmit"  type="submit">Submit feedback</button></div>
      </form>
    </div>
  )
}

{/* <div class="col-md-4 mb-3">
      <label for="validationCustomUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required/>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div> */}

  //   <div class="form-group">
  //   <div class="form-check">
  //     <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
  //     <label class="form-check-label" for="invalidCheck">
  //       Agree to terms and conditions
  //     </label>
  //     <div class="invalid-feedback">
  //       You must agree before submitting.
  //     </div>
  //   </div>
  // </div>
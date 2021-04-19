import './profile.css'
import Topbar from '../../../home/topbar'
import Header2 from '../../../home/header2'
import { useContext , useState } from 'react'
import { Email } from '@material-ui/icons'

// displayName: "",
//     firstName: "",
//     lastName: "",
//     phoneNumber: 0,
//     address: "",
//     city: "",
//     country: "",
//     postalCode: 0,
//     bloodGroup: "",
//     height: "",
//     weight: 0,
//     familyDoc: "",
//     familyDocContact: "",
//     disease_allergy:""
const Profile = (props) => { 
  const [email,setEmail] = useState(props.profile.email)
  const [displayName,setDisplayname] = useState(props.profile.displayName)
  const [firstName, setFirstName] = useState(props.profile.firstName)
  const [lastName, setLastName] = useState(props.profile.lastName)
  const [phoneNumber, setPhoneNumber] = useState(props.profile.phoneNumber)
  const [address, setAddress] = useState(props.profile.address)
  const [city, setCity] = useState(props.profile.city)
  const [country, setCountry] = useState(props.profile.country)
  const [postalCode, setPostalCode] = useState(props.profile.postalCode)
  const [bloodGroup, setBloodGroup] = useState(props.profile.bloodGroup)
  const [height, setHeight] = useState(props.profile.height)
  const [weight, setWeight] = useState(props.profile.weight)
  const [familyDoc, setFamilyDoc] = useState(props.profile.familyDoc)
  const [familyDocContact, setFamilyDocContact] = useState(props.profile.familyDocContact)
  const [disease_allergy, setDisease_allergy] = useState(props.profile.disease_allergy)


  const update = () => {
    let text = ""
    if (firstName !== props.profile.firstName) {
      text += "Firstname : " + props.profile.firstName + " --> " + firstName + "\n"
      props.updateInfo("firstName",firstName)
    }
    if (lastName !== props.profile.lastName) {
      text += "Lastname : " + props.profile.lastName + " --> " + lastName + "\n"
      props.updateInfo("lastName",lastName)
    }
    if (phoneNumber !== props.profile.phoneNumber) {
      text += "Phone number : " + props.profile.phoneNumber + " --> " + phoneNumber + "\n"
      props.updateInfo("phoneNumber",phoneNumber)
    }
    if (address !== props.profile.address) {
      text += "Address : " + props.profile.address +" --> "+address + "\n"
      props.updateInfo("address",address)
    }
    if (city !== props.profile.city) {
      text += "City : " + props.profile.city +" --> "+city + "\n"
      props.updateInfo("city",city)
    }
    if (country !== props.profile.country) {
      text += "Country : " + props.profile.country +" --> "+country + "\n"
      props.updateInfo("country",country)
    }
    if (postalCode !== props.profile.postalCode) {
      text += "Postal code : " + props.profile.postalCode +" --> "+postalCode + "\n"
      props.updateInfo("postalCode",postalCode)
    }
    if (bloodGroup !== props.profile.bloodGroup) {
      text += "Blood group : " + props.profile.bloodGroup +" --> "+bloodGroup + "\n"
      props.updateInfo("bloodGroup",bloodGroup)
    }
    if (height !== props.profile.height) {
      text += "Height : " + props.profile.height +" --> "+height + "\n"
      props.updateInfo("height",height)
    }
    if (weight !== props.profile.weight) {
      text += "Weight : " + props.profile.weight +" --> "+weight + "\n"
      props.updateInfo("weight",weight)
    }
    if (familyDoc !== props.profile.familyDoc) {
      text += "Family Doctor : " + props.profile.familyDoc +" --> "+familyDoc + "\n"
      props.updateInfo("familyDoc",familyDoc)
    }
    if (familyDocContact !== props.profile.familyDocContact) {
      text += "Family doctor contact : " + props.profile.familyDocContact +" --> "+familyDocContact + "\n"
      props.updateInfo("familyDocContact",familyDocContact)
    }
    if (disease_allergy !== props.profile.disease_allergy) {
      text += "Disease Allery : " + props.profile.disease_allergy +" --> "+disease_allergy + "\n"
      props.updateInfo("disease_allergy",disease_allergy)
    }
    props.updateProfile()
  }
  return (
    <div>
      <div className="home">
        <Topbar />
        <Header2/>
      </div>
      <div className="profile">
        <div class="main-content">
          <div class="container" style={{ textAlign: "left" }}>
            <div class="row justify-content-center">
              <div>
                <div class="card bg-white shadow">
                  <div class="card-header bg-white border-0">
                    <div class="row align-items-center">
                      <div class="col-8">
                        <h3 class="mb-0" style={{fontSize:"25px"}}>My account</h3>
                      </div>
                      <div class="col-4 text-right">
                        <span class="btn btn-sm btn-primary" style={{    width: "60%",transform:"none"}} onClick={update}>Edit</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <form>
                      <h6 class="heading-small text-muted mb-4">User information</h6>
                      <div class="pl-lg-4">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-username">Username</label>
                              <input type="text" id="input-username" class="form-control form-control-alternative" value={displayName} onChange={(e)=>setDisplayname(e.target.value)} 
                              />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-group">
                              <label class="form-control-label" for="input-email">Email address</label>
                              <input type="email" id="input-email" class="form-control form-control-alternative" value={email} onChange={(e)=>setEmail(e.target.value)} 
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-first-name">First name</label>
                              <input type="text" id="input-first-name" class="form-control form-control-alternative" value={firstName} onChange={(e)=>setFirstName(e.target.value)} 
                              />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-last-name">Last name</label>
                              <input type="text" id="input-last-name" class="form-control form-control-alternative" value={lastName} onChange={(e)=>setLastName(e.target.value)} 
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-phone-number">Phone number</label>
                              <input type="text" id="input-phone-number" class="form-control form-control-alternative" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} 
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr class="my-4" />
                      <h6 class="heading-small text-muted mb-4">Contact information</h6>
                      <div class="pl-lg-4">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-address">Address</label>
                              <input id="input-address" class="form-control form-control-alternative" value={address} onChange={(e)=>setAddress(e.target.value)} 
                                type="text" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-4">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-city">City</label>
                              <input type="text" id="input-city" class="form-control form-control-alternative" value={city} onChange={(e)=>setCity(e.target.value)} 
                              />
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-country">Country</label>
                              <input type="text" id="input-country" class="form-control form-control-alternative" value={country} onChange={(e)=>setCountry(e.target.value)} 
                              />
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="form-group">
                              <label class="form-control-label" for="input-country">Postal code</label>
                              <input type="number" id="input-postal-code" class="form-control form-control-alternative" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} 
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr class="my-4" />
                      <h6 class="heading-small text-muted mb-4">Medical info</h6>
                      <div class="pl-lg-4">

                        <div class="row">
                          <div class="col-lg-4">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-city">Blood group</label>
                              <input type="text" id="input-city" class="form-control form-control-alternative" value={bloodGroup} onChange={(e)=>setBloodGroup(e.target.value)} 
                              />
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-height">Height</label>
                              <input type="text" id="input-height" class="form-control form-control-alternative" value={height} onChange={(e)=>setHeight(e.target.value)} 
                              />
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-weight">Weight</label>
                              <input type="text" id="input-weight" class="form-control form-control-alternative" value={weight} onChange={(e)=>setWeight(e.target.value)} 
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-famdoc">Family doctor</label>
                              <input type="text" id="input-famdoc" class="form-control form-control-alternative" value={familyDoc} onChange={(e)=>setFamilyDoc(e.target.value)} 
                              />
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-famdoc-con">Family doctor contact</label>
                              <input type="text" id="input-famdoc-con" class="form-control form-control-alternative" value={familyDocContact} onChange={(e)=>setFamilyDocContact(e.target.value)} 
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group focused">
                              <label class="form-control-label" for="input-medinfo">Disease / Allergy</label>
                              <textarea id="input-medinfo" class="form-control form-control-alternative"  value={disease_allergy} onChange={(e)=>setDisease_allergy(e.target.value)} 
                                 ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr class="my-4" />

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
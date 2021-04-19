import { Component } from 'react'
import firebase from '../../../firebase'
import Topbar from '../../home/topbar'
import Header2 from '../../home/header2'
import Footer from '../../home/footer'
import Preloader from '../../Preloader'
import "./profile.css"
class Profile2 extends Component{
  state = {
    displayName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
    postalCode: 0,
    bloodGroup: "",
    height: "",
    weight: "",
    familyDoc: "",
    familyDocContact: "",
    disease_allergy: "",
    email: "",
    deleting:true
  }
  componentDidMount() {
    firebase.firestore().collection("users").doc(this.props.uid).onSnapshot((userProfileDoc) => {
      this.setState(userProfileDoc.data())
    })
  }
  updateData = () => {

    firebase.firestore().collection("users").doc(this.props.uid).update(this.state)
      .then(() => {
        console.log("updated");
      })
      .catch((err) => {
      console.log(err);
    })
  }
  deleteAccount(e) {
    e.preventDefault()
    
  }


  render() {
    return (
      <div className="minheight">
      <div className="home">
        <Topbar />
        <Header2/>
      </div>
        {this.state.deleting ?
          <div className="profile mainbodymar">
          <div className="main-content">
            <div className="container" style={{ textAlign: "left" }}>
              <div className="row justify-content-center">
                <div>
                  <div className="card bg-white shadow">
                    <div className="card-header bg-white border-0">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h3 className="mb-0" style={{ fontSize: "25px" }}>My account</h3>
                        </div>
                        <div className="col-4 text-right">
                          <span className="btn btn-sm btn-primary" style={{ width: "60%", transform: "none" }} onClick={this.updateData}>Edit</span>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <form>
                        <h6 className="heading-small text-muted mb-4">User information</h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-displayName">Display name</label>
                                <input type="text" id="input-displayName" name="displayName" className="form-control form-control-alternative"
                                  value={this.state.displayName}
                                    
                                    disabled
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label" for="input-email">Email address</label>
                                <input type="email" id="input-email" name="email" className="form-control form-control-alternative"
                                  value={this.state.email}
                                  disabled
                                    
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-first-name">First name</label>
                                <input type="text" id="input-first-name" name="firstName" className="form-control form-control-alternative"
                                  onChange={(e) => this.setState({ firstName: e.target.value })} value={this.state.firstName}
                                  
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-last-name">Last name</label>
                                <input type="text" id="input-last-name" name="lastName" className="form-control form-control-alternative"
                                  value={this.state.lastName}
                                  onChange={(e) => this.setState({ lastName: e.target.value })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-phone-number">Phone number</label>
                                <input type="text" id="input-phone-number" name="phoneNumber" className="form-control form-control-alternative"
                                  onChange={(e) => this.setState({ phoneNumber: e.target.value })} value={this.state.phoneNumber}
                                  
                                />
                              </div>
                            </div>
                          
                          </div>
                        </div>
                        <hr className="my-4" />
                        <h6 className="heading-small text-muted mb-4">Contact information</h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-address">Address</label>
                                <input id="input-address" name="address" className="form-control form-control-alternative"
                                  value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })}
                                  type="text" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-city">City</label>
                                <input type="text" id="input-city" name="city" className="form-control form-control-alternative"
                                  value={this.state.city} onChange={(e) => this.setState({ city: e.target.value })}
                                  
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-country">Country</label>
                                <input type="text" id="input-country" className="form-control form-control-alternative"
                                  name="country"
                                  value={this.state.country} onChange={(e) => this.setState({ country: e.target.value })}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label className="form-control-label" for="input-country">Postal code</label>
                                <input type="number" id="input-postal-code" className="form-control form-control-alternative"
                                  name="postalCode"
                                  value={this.state.postalCode} onChange={(e) => this.setState({ postalCode: e.target.value })}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr className="my-4" />
                        <h6 className="heading-small text-muted mb-4">Medical info</h6>
                        <div className="pl-lg-4">

                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-city">Blood group</label>
                                <input type="text" id="input-city" className="form-control form-control-alternative" name="bloodGroup"
                                  value={this.state.bloodGroup} onChange={(e) => this.setState({ bloodGroup: e.target.value })}
                                  
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-height">Height</label>
                                <input type="text" id="input-height" className="form-control form-control-alternative" name="height"
                              
                                  value={this.state.height} onChange={(e) => this.setState({ height: e.target.value })}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-weight">Weight</label>
                                <input type="text" id="input-weight" className="form-control form-control-alternative"
                                  name="weight"
                                  value={this.state.weight} onChange={(e) => this.setState({ weight: e.target.value })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-famdoc">Family doctor</label>
                                <input type="text" id="input-famdoc" className="form-control form-control-alternative"
                                  name="familyDoc"
                                  value={this.state.familyDoc} onChange={(e) => this.setState({ familyDoc: e.target.value })}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-famdoc-con">Family doctor contact</label>
                                <input type="text" id="input-famdoc-con" className="form-control form-control-alternative"
                                  name="familyDocContact"
                                  value={this.state.familyDocContact} onChange={(e) => this.setState({ familyDocContact: e.target.value })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-medinfo">Disease / Allergy</label>
                                <textarea id="input-medinfo" className="form-control form-control-alternative" name="disease_allergy"
                                  value={this.state.familyDocContact} onChange={(e) => this.setState({ disease_allergy: e.target.value })}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <hr className="my-4" />
                          {/* <div className="row">
                            <button className="btn btn-danger m-auto" onClick={this.deleteAccount}>Delete Account</button>
                          </div> */}
                        </div>
                      

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
          : <Preloader text="Deleting your accont..."/>}
        <div className="home"><Footer /></div>
      </div>
    )
  }
}

export default Profile2
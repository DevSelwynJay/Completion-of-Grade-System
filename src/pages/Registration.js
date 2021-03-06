import Logo from '../images/bulsu-logo.png';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';


function Registration(){
    const getInitialState = () => { // sets the default value of the dropdown to Faculty.
      const value = "Faculty";
      return value;
    };
    
    const [value, setValue] = useState(getInitialState); // this is the getter and setter of the value of the dropdown regtype.

    const handleChange = (e) => { // sets the variable value to the selected option in the dropdown.
      setValue(e.target.value);
    };

    return(
      <>
       <section>
           <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-4 text-container bg-primary'>
                    <div className='d-flex align-items-center justify-content-center gap-2 logo-container'>
                     <div>
                        <img className='bd-placeholder-img rounded-circle' width="75" height="75" src={Logo} alt='logo' />
                     </div>
                     <div>
                        <h4 className='text-white text-uppercase fw-bold m-0'>Bulacan State University</h4>
                        <h5 className='text-white text-uppercase'>Completion of Grade System</h5>
                     </div>
                    </div>
                    <div className='text-center'>
                     <h1 className='text-white fw-bold'>Hello! Welcome!</h1>
                     <p className='text-white fs-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                     <Link className='btn btn-outline-light' to="/login">Sign in</Link>
                    </div>
                </div>
                <div className='col-xl-8 form-container'>
                    <form>
                    <h1 className='text-center mb-3 fw-bold'>Registration</h1>
                        <div className='row'>
                           <div className='col-sm-6 mb-3'>
                              <div className='control has-icon-left'>
                                <span className='is-left'>
                                   <FontAwesomeIcon icon={faUser} />
                                </span>
                                <input type="text" className="form-control " placeholder="First name"/>
                              </div>
                           </div>
                           <div className='col-sm-6 mb-3'>
                              <div className='control has-icon-left'>
                              <span className='is-left'>
                                 <FontAwesomeIcon icon={faUser} />
                              </span>
                              <input type="text" className="form-control " placeholder="Last name"/> 
                              </div>
                           </div>
                        </div>
                        <div className='row'>
                           <div className='col-sm-6 mb-3'>
                              <div className='control has-icon-left'>
                                <span className='is-left'>
                                   <FontAwesomeIcon icon={faPhone} />
                                </span>
                                <input type="text" className="form-control " placeholder="Contact No."/>
                              </div>
                           </div>
                           <div className='col-sm-6 mb-3'>
                             <div className='control has-icon-left'>
                                 <span className='is-left'>
                                    <FontAwesomeIcon icon={faUsers} />
                                 </span>
                                 <select value={value} onChange={handleChange} className="form-select" aria-label="Default select example">
                                 <option value="Faculty" >Faculty</option>
                                 <option value="Student">Student</option>
                                 </select>
                             </div>
                           </div>
                        </div>
                        {value==="Student" && ( // If value is equal to student, these div will mount.
                           <div className='row'>
                              <div className='col-sm-6 mb-3'>
                                 <input type="text" className="form-control " placeholder="Student No."/>
                              </div>
                              <div className='col-sm-6 mb-3'>
                                 <input type="text" className="form-control " placeholder="Year  Section"/>
                              </div>
                           </div>
                        )}
                        <div className='row mb-3'>
                           <div className='col-sm-12 mb-3'>
                             <div className='control has-icon-left'>
                               <span className='is-left'>
                                 <FontAwesomeIcon icon={faEnvelope} />
                               </span>
                               <input type="text" className="form-control " placeholder="Email"/>
                             </div>
                           </div>
                           <div className='col-sm-12 mb-3'>
                             <div className='control has-icon-left'>
                               <span className='is-left'>
                                 <FontAwesomeIcon icon={faEnvelope} />
                               </span>
                               <input type="text" className="form-control " placeholder="Password"/> 
                             </div>
                           </div>
                           <div className='col-sm-12 mb-3'>
                             <div className='control has-icon-left'>
                               <span className='is-left'>
                                 <FontAwesomeIcon icon={faLock} />
                               </span>
                              <input type="text" className="form-control " placeholder="Confirm Password"/> 
                             </div>
                           </div>
                           <div className='col-sm-12'>
                              <div className="mb-3">
                                 <input className="form-control" type="file" id="formFile" />
                              </div>
                           </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12 d-flex justify-content-center'>
                               <button className='btn btn-primary'>Sign up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
           </div>
       </section>
      </>
    );
}

export default Registration;
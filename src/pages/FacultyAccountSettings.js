import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

function FacultyAccountSettings(){
   
    return(
      <>
      
      <Header/>

      <div className='p-md-5'>
        <div className='container'>
            <h3 className='fw-bold mb-4'>Account Settings</h3>
            <div className='row'>
              <div className='col-sm-8'>
                  <h4 className='text-black mb-3'>Users Details</h4>
                  <table className='table account-settings'>
                    <tr>
                        <td><strong>Full Name:</strong></td>
                        <td>Jay Faustino</td>
                        <td>
                          <span>
                              Edit
                              <span className='ms-2'>
                                <FontAwesomeIcon icon={faPen}/>
                              </span>
                          </span>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td>JayFaustino@yahoo.com</td>
                        <td>
                          <span>
                              Edit
                              <span className='ms-2'>
                                <FontAwesomeIcon icon={faPen}/>
                              </span>
                          </span>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Contact No:</strong></td>
                        <td>0907080700</td>
                        <td>
                          <span>
                              Edit
                              <span className='ms-2'>
                                <FontAwesomeIcon icon={faPen}/>
                              </span>
                          </span>
                        </td>
                    </tr>
                  </table>
              </div>
              <div className='col-sm-4'>
                  <h4 className='text-black mb-3'>Change Password</h4>
                  <div className='row'>
                    <div className='col-sm-12 mb-3'>
                        <input type="text" className="form-control " placeholder="Old Password"/>
                    </div>
                    <div className='col-sm-12 mb-3'>
                        <input type="text" className="form-control " placeholder="New Password"/>
                    </div>
                    <div className='col-sm-12 mb-3'>
                        <input type="text" className="form-control " placeholder="Confirm Password"/>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-12 d-flex justify-content-end'>
                        <button className='btn btn-primary'>Submit</button>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>

      </>
    );
}

export default FacultyAccountSettings;
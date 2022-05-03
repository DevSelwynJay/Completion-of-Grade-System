import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

function StudentDashboard(){
   
    return(
      <>
      
      <Header/>

      <div className='p-md-5'>
        <div className='container'>
            <div className='row mb-4'>
              <div className='col-sm-8'>
                  <h3 className='fw-bold m-0'>Completion Forms</h3>
              </div>
              <div className='col-sm-4'>
                  <div className='d-flex gap-2'>
                    <div className='control flex-grow-1 has-icon-left'>
                        <span className='is-left'>
                          <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <input type="text" className="form-control"/> 
                    </div>
                    <button className='btn btn-primary'>Search</button>
                  </div>
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-sm-6'>
                  <h4 className='text-black m-0'>Summary</h4>
              </div>
              <div className='col-sm-6'>
                  <div className='row'>
                    <div className='col-sm-6'>
                        <div className='d-flex gap-2 align-items-center'>
                          <div>
                              Status
                          </div>
                          <div className='flex-grow-1'>
                              <select className="form-select">
                                <option value="Processed" selected>Processed</option>
                              </select>
                          </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='d-flex gap-2 align-items-center'>
                          <div>
                              Rows per Page
                          </div>
                          <div className='flex-grow-1'>
                              <select className="form-select">
                                <option value="10">10</option>
                                <option value="5" selected>5</option>
                              </select>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-8'>
                  <table className="table table-striped">
                    <thead>
                        <tr>
                          <th scope="col">Subject</th>
                          <th scope="col">Faculty Name</th>
                          <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>Math</td>
                          <td>Selwyn Jay Faustino</td>
                          <td>Processing</td>
                        </tr>
                    </tbody>
                  </table>
                  <div className='row align-items-center mb-3'>
                    <div className='col-sm-6'>
                        <p className='text-black m-0'>Page 1 fo 6</p>
                    </div>
                    <div className='col-sm-6 d-flex justify-content-end'>
                        <nav>
                          <ul className="pagination m-0">
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                </a>
                              </li>
                              <li className="page-item"><a className="page-link" href="#">1</a></li>
                              <li className="page-item"><a className="page-link" href="#">2</a></li>
                              <li className="page-item"><a className="page-link" href="#">3</a></li>
                              <li className="page-item"><a className="page-link" href="#">4</a></li>
                              <li className="page-item"><a className="page-link" href="#">5</a></li>
                              <li className="page-item"><a className="page-link" href="#">6</a></li>
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                </a>
                              </li>
                          </ul>
                        </nav>
                    </div>
                  </div>
              </div>
              <div className='col-sm-4'>
                  <div className='shadow py-4 px-3 mb-5 bg-white rounded'>
                    <form>
                        <h5 className='text-uppercase fw-bold mb-3 text-center'>Request New Completion Form</h5>
                        <div className='row'>
                          <div className='col-sm-12 mb-3'>
                              <input type="email" className="form-control " placeholder="Email"/>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-6 mb-3'>
                              <input type="email" className="form-control " placeholder="Email"/>
                          </div>
                          <div className='col-sm-6 mb-3'>
                              <input type="email" className="form-control " placeholder="Email"/>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-6 mb-3'>
                              <input type="email" className="form-control " placeholder="Email"/>
                          </div>
                          <div className='col-sm-6 mb-3'>
                              <input type="email" className="form-control " placeholder="Email"/>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-6 mb-3'>
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Term</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className='col-sm-6 mb-3'>
                           <select className="form-select" aria-label="Default select example">
                              <option selected>Academic Term</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-4 mb-3'>
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Course</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className='col-sm-4 mb-3'>
                            <select className="form-select" aria-label="Default select example">
                              <option selected>Year</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className='col-sm-4 mb-3'>
                           <select className="form-select" aria-label="Default select example">
                              <option selected>Section</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-6 mb-3'>
                            <label>From</label>
                            <input type="text" className="form-control " placeholder="Year"/>
                          </div>
                          <div className='col-sm-6 mb-3'>
                             <label>To</label>
                            <input type="text" className="form-control " placeholder="Year"/>
                          </div>
                        </div>
                        <div className='row'>
                           <div className='col-sm-12 mb-3'>
                             <label className="form-label">Reason/s for Incomplete Grading Sheet:</label>
                             <textarea className="form-control" rows="3" placeholder='Type here'></textarea>
                           </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-12 d-flex justify-content-end'>
                              <button className='btn btn-primary'>Submit</button>
                          </div>
                        </div>
                    </form>
                  </div>
              </div>
            </div>
        </div>
      </div>

      </>
    );
}

export default StudentDashboard;
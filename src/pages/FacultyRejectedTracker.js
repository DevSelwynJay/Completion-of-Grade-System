import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

function FacultyRejectedTracker(){
   
    return(
      <>
      
      <Header/>

      <div className='p-md-5'>
        <div className='container'>
            <div className='row mb-4'>
              <div className='col-sm-8'>
                  <h3 className='fw-bold m-0'>Rejected Requests</h3>
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
                 
              </div>
              <div className='col-sm-6'>
                  <div className='row'>
                    <div className='col-sm-6 offset-sm-6'>
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
              <div className='col-sm-12'>
                  <table className="table table-striped">
                    <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Subject</th>
                          <th scope="col">Student Name</th>
                          <th scope="col">Date Submitted</th>
                          <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>2022-001</td>
                          <td>Math</td>
                          <td>Jayson Batoon</td>
                          <td>mm/dd/yyyy</td>
                          <td>Rejected</td>
                        </tr>
                        <tr>
                          <td>2022-002</td>
                          <td>English</td>
                          <td>Jayson Batoon</td>
                          <td>mm/dd/yyyy</td>
                          <td>Rejected</td>
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
            </div>
        </div>
      </div>

      </>
    );
}

export default FacultyRejectedTracker;
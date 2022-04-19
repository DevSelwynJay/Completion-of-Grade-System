import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

function DashboardStudent(){
   
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
                            <select class="form-select">
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
                            <select class="form-select">
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
                  <table class="table table-striped">
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
                    <ul class="pagination m-0">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li className="page-item"><a class="page-link" href="#">1</a></li>
                        <li className="page-item"><a class="page-link" href="#">2</a></li>
                        <li className="page-item"><a class="page-link" href="#">3</a></li>
                        <li className="page-item"><a class="page-link" href="#">4</a></li>
                        <li className="page-item"><a class="page-link" href="#">5</a></li>
                        <li className="page-item"><a class="page-link" href="#">6</a></li>
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
                        <h5 className='text-uppercase fw-bold mb-3'>Request New Completion Form</h5>
                        <div className='row'>
                            <div className='col-sm-12 mb-3'>
                                <input type="email" className="form-control " placeholder="Email"/>
                            </div>
                            <div className='col-sm-12 mb-3'>
                                <input type="email" className="form-control " placeholder="Email"/>
                            </div>
                            <div className='col-sm-12 mb-3'>
                                <input type="email" className="form-control " placeholder="Email"/>
                            </div>
                            <div className='col-sm-12 mb-3'>
                                <input type="email" className="form-control " placeholder="Email"/>
                            </div>
                            <div className='col-sm-12 mb-3'>
                                <input type="email" className="form-control " placeholder="Email"/>
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

export default DashboardStudent;
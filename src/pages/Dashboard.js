import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

function Dashboard(){
   
    return(
      <>
      
       <Header/>

        <div className='p-md-5'>
        <div className='container'>
            <div className='row mb-5'>
            <div className='col-sm-6'>
                <h3 className='fw-medium m-0'>Completion Forms</h3>
            </div>
            <div className='col-sm-6'>
                <div className='row align-items-center h-100'>
                <div className='col-lg-6 col-xl-5'>
                    <div className='d-flex align-items-center gap-2'>
                        <div>
                            Rows per Page
                        </div>
                        <div className='col'>
                            <select class="form-select">
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-xl-7'>
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
            </div>
            </div>
            <div className='row mb-3'>
            <div className='col-sm-6'>
                <h3 className='fw-medium text-black m-0'>Summary</h3>
            </div>
            <div className='col-sm-6'>
                <div className='row'>
                <div className='col-sm-6'>
                    <div className='d-flex gap-2 align-items-center'>
                        <div>
                            Show
                        </div>
                        <div className='flex-grow-1'>
                            <select class="form-select">
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            </select>
                        </div>
                    </div>
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
            </div>
            <div className='row'>
            <div className='col-sm-12'>
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col" className='id'>ID</th>
                        <th scope="col">Document Name</th>
                        <th scope="col">Faculty ID</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <div className='row'>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>View File</button>
                              </div>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>Update</button>
                              </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <div className='row'>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>View File</button>
                              </div>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>Update</button>
                              </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <div className='row'>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>View File</button>
                              </div>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>Update</button>
                              </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <div className='row'>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>View File</button>
                              </div>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>Update</button>
                              </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <div className='row'>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>View File</button>
                              </div>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>Update</button>
                              </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <div className='row'>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>View File</button>
                              </div>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>Update</button>
                              </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <div className='row'>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>View File</button>
                              </div>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>Update</button>
                              </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <div className='row'>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>View File</button>
                              </div>
                              <div className='col-sm-6'>
                                <button className='btn btn-primary'>Update</button>
                              </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>

      </>
    );
}

export default Dashboard;
import Logo from '../images/bulsu-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Dashboard(){
   
    return(
      <>
        <header className='bg-primary p-md-3'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-sm-6'>
                    <div className='d-flex align-items-center gap-2'>
                    <div>
                        <img className='bd-placeholder-img rounded-circle' width="65" height="65" src={Logo} alt='logo' />
                    </div>
                    <div>
                        <h5 className='text-white text-uppercase fw-bold m-0'>Bulacan State University</h5>
                        <h6 className='text-white text-uppercase'>Completion of Grade System</h6>
                    </div>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='d-flex align-items-center justify-content-end gap-3'>
                    <div>
                        <span className='text-white fs-3'>
                            <FontAwesomeIcon icon={faBell}/>
                        </span>
                    </div>
                    <div>
                        <h5 className='m-0 text-white'>Juan Dela Cruz</h5>
                        <h6 className='text-right text-white'>Account Setting</h6>
                    </div>
                    <div>
                        <span className='text-white fs-1'>
                            <FontAwesomeIcon icon={faUserCircle}/>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </header>

        <div className='p-md-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6'>
                    <h3 className='fw-medium'>Completion Forms</h3>
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
        </div>
        </div>

        <div className='p-md-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6'>
                    <h3 className='fw-medium text-black'>Summary</h3>
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
                            <th scope="col">ID</th>
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
                            <td><button className='btn btn-primary'>View File</button> <button className='btn btn-primary'>Update</button></td>
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
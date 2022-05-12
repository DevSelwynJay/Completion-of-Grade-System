import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import ModalApprove from "../components/ModalApprove";
import ModalReject from "../components/ModalReject";
import React, { useState } from "react";

function FacultyDashboard(){

  const [modalOpenApprove, setModalOpenApprove] = useState(false);
  const [modalOpenReject, setModalOpenReject] = useState(false);
   
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
              <div className='col-sm-12'>
                  <table class="table table-striped">
                    <thead>
                        <tr>
                          <th scope="col" className='id'>ID</th>
                          <th scope="col">Student Name</th>
                          <th scope="col">Date Submitted</th>
                          <th scope="col">Status</th>
                          <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>1</td>
                          <td>Selwyn Jay Faustino</td>
                          <td>07/27/2000</td>
                          <td>Processed</td>
                          <td>
                              <div className='row'>
                                <div className='col-sm-6'>
                                    <button className='btn btn-primary openModalBtn' 
                                    onClick={() => {
                                      setModalOpenApprove(true);
                                    }}>Approve
                                    </button>
                                </div>
                                <div className='col-sm-6'>
                                    <button className='btn btn-primary'
                                    onClick={() => {
                                      setModalOpenReject(true);
                                    }}>Reject</button>
                                </div>
                              </div>
                          </td>
                        </tr>
                    </tbody>
                  </table>
              </div>
            </div>
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
      </div>

      {modalOpenApprove && <ModalApprove setOpenModalApprove={setModalOpenApprove} />}
      {modalOpenReject && <ModalReject setOpenModalReject={setModalOpenReject} />}

      </>
    );
}

export default FacultyDashboard;
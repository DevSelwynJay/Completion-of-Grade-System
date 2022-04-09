import React from 'react'
import '../pages/Registration.scss';


function Registration(){
    return(
      <>
       <section className='registration'>
           <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-4 text-container bg-primary p-5'>
                    <h1 className='text-white fw-bold text-center'>Welcome Back!</h1>
                </div>
                <div className='col-sm-8 form-container p-4'>
                    <form>
                    <h1 className='text-center mb-3 fw-bold'>Registration</h1>
                        <div className='row'>
                           <div className='col-sm-6 mb-3'>
                              <input type="text" class="form-control " placeholder="First name"/>
                           </div>
                           <div className='col-sm-6 mb-3'>
                              <input type="text" class="form-control " placeholder="Last name"/> 
                           </div>
                        </div>
                        <div className='row'>
                           <div className='col-sm-6 mb-3'>
                              <input type="text" class="form-control " placeholder="Contact No."/>
                           </div>
                           <div className='col-sm-6 mb-3'>
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Faculty</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                           </div>
                        </div>
                        <div className='row mb-3'>
                           <div className='col-sm-12 mb-3'>
                              <input type="text" class="form-control " placeholder="Email"/>
                           </div>
                           <div className='col-sm-12 mb-3'>
                              <input type="text" class="form-control " placeholder="Password"/> 
                           </div>
                           <div className='col-sm-12 mb-3'>
                              <input type="text" class="form-control " placeholder="Confirm Password"/> 
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
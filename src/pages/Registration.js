import React from 'react'
import '../pages/Registration.scss';


function Registration(){
    return(
      <>
       <section className='registration'>
           <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-4 bg-primary p-5'>
                    <h1 className='text-white fw-bold text-center'>Welcome Back!</h1>
                </div>
                <div className='col-sm-8 form-container'>
                    <form>
                    <h1 className='text-center pb-3 fw-bold'>Registration</h1>
                        <div className='row mb-3'>
                           <div className='col-sm-6'>
                              <input type="text" class="form-control form-control-lg" placeholder="First name"/>
                           </div>
                           <div className='col-sm-6'>
                              <input type="text" class="form-control form-control-lg" placeholder="Last name"/> 
                           </div>
                        </div>
                        <div className='row mb-3'>
                           <div className='col-sm-6'>
                              <input type="text" class="form-control form-control-lg" placeholder="Contact No."/>
                           </div>
                           <div className='col-sm-6'>
                            <select class="form-select form-select-lg" aria-label="Default select example">
                            <option selected>Faculty</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                           </div>
                        </div>
                        <div className='row mb-3'>
                           <div className='col-sm-12 mb-3'>
                              <input type="text" class="form-control form-control-lg" placeholder="Email"/>
                           </div>
                           <div className='col-sm-12 mb-3'>
                              <input type="text" class="form-control form-control-lg" placeholder="Password"/> 
                           </div>
                           <div className='col-sm-12 mb-3'>
                              <input type="text" class="form-control form-control-lg" placeholder="Confirm Password"/> 
                           </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12 d-flex justify-content-center'>
                               <button className='btn btn-primary btn-lg'>Sign up</button>
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
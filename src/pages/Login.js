import Logo from '../images/bulsu-logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

function Login(){
   
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
                     <h1 className='text-white fw-bold'>Welcome Back!</h1>
                     <p className='text-white fs-5'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                     <Link className='btn btn-outline-light' to="/registration">Sign up</Link>
                    </div>
                </div>
                <div className='col-xl-8 form-container'>
                    <form>
                    <h1 className='text-center mb-3 fw-bold'>Login</h1>
                        <div className='row'>
                           <div className='col-sm-12 mb-3'>
                              <div className='control has-icon-left'>
                                <span className='is-left'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <input type="email" className="form-control " placeholder="Email"/>
                              </div>
                           </div>
                           <div className='col-sm-12 mb-3'>
                              <div className='control has-icon-left'>
                                <span className='is-left'>
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                              <input type="password" className="form-control" placeholder="Password"/> 
                              </div>
                           </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12 d-flex justify-content-center'>
                               <button className='btn btn-primary'>Sign in</button>
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

export default Login;
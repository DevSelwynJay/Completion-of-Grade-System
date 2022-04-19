import Logo from '../images/bulsu-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

function Header(){
   
    return(
      <>
        <header className='bg-primary p-md-3'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-sm-4'>
                        <div className='d-flex align-items-center gap-2'>
                        <div>
                            <img className='bd-placeholder-img rounded-circle' width="65" height="65" src={Logo} alt='logo' />
                        </div>
                        <div>
                            <h5 className='text-white text-uppercase fw-bold m-0'>Bulacan State University</h5>
                            <h6 className='text-white text-uppercase m-0'>Completion of Grade System</h6>
                        </div>
                        </div>
                    </div>
                    <div className='col-sm-8'>
                        <div className='row align-items-center'>
                        <div className='col-sm-12'>
                            <div className='d-flex align-items-center justify-content-end gap-3'>
                                <div className='pe-3'>
                                    <span className='text-white fs-5'>
                                    <FontAwesomeIcon icon={faBell}/>
                                    </span>
                                </div>
                                <div>
                                    <p className='m-0 text-white fw-bold lh-1'>Juan Dela Cruz</p>
                                    <p className='m-0 text-right fw-light text-white'><small>Account Setting</small></p>
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
                </div>
            </div>
        </header>
      </>
    );
}

export default Header;
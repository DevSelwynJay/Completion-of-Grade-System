import Logo from '../images/bulsu-logo.png';

function Dashboard(){
   
    return(
      <>
        <header className='bg-primary p-3'>
            <div className='container-fluid'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
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
                    <div>
                        <h2 className='text-white'>Profile</h2>
                    </div>
                </div>
            </div>
        </header>
      </>
    );
}

export default Dashboard;
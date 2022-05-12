import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function ModalApprove({ setOpenModalApprove }) {
    return (
    <>
        <div class="modal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Reject Completion Form</h5>
                <button className="close-btn"
                 onClick={() => {
                    setOpenModalApprove(false);
                }}
                id="cancelBtn"
                >
                  <FontAwesomeIcon icon={faClose}/>
                </button>
            </div>
            <div class="modal-body">
                <p>Are you sure you want to approve the student's request?</p>
            </div>
            <div class="modal-footer">
                <button type="button" className="btn btn-danger"
                onClick={() => {
                    setOpenModalApprove(false);
                }}
                id="cancelBtn"
                >No</button>
                <button type="button" className="btn btn-primary">Yes</button>
            </div>
            </div>
        </div>
        </div>
    </>
    );
  }
  
  export default ModalApprove;
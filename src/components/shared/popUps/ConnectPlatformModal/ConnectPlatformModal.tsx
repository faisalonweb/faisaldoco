import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Button} from "@mui/material";
import { TextField } from "@mui/material";
import "src/components/shared/popUps/PublishModal/PublishModal.scss";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function ConnectPlatformeModal(props: Props) {

    const resetModal = () => {
        props?.handleClose();
      };

  return (
    <Dialog className="platform-modal" open={props?.open} onClose={resetModal}>
      <DialogContent>
        <div className="modal-content">
          <div>
          <div className="publish-heading">
           <p>Connection logo - connection-name</p>
          </div>
          <div className="code-link">
          <p>Connection link: asdasadada/repo/adadada</p>
          </div>
          <div className="btns-section">
          <Button
              variant="contained"
              className="Savebtn"
            >
              <div className="btn-content">
                <span>Save Changes</span>
              </div>
            </Button>
            <Button
              variant="contained"
              className="removebtn"
            >
              <div className="btn-content">
                <span>Remove Connection</span>
              </div>
            </Button>
          </div>

          
          </div>
         
        </div>
      </DialogContent>
      
      
    </Dialog>
  );
}

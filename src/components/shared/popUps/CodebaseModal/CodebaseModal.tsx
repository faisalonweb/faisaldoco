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

export default function CodebaseModal(props: Props) {

    const resetModal = () => {
        props?.handleClose();
      };

  return (
    <Dialog className="connect-modal" open={props?.open} onClose={resetModal}>
      <DialogContent>
        <div className="modal-content">
          <div>
          <div className="publish-heading">
           <p>Project info - view project</p>
          </div>
          <div className="code-link">
          <p>Codebase link: github.com/repo</p>
          </div>
          <div className="hoisting-service">
              <p>Hoisting service :</p>
              <div>
              <TextField
                className="full-field"
                type="text"
                variant="outlined"
              />
              </div>    
          </div>
          <Button
              variant="contained"
              className="Savebtn"
            >
              <div className="btn-content">
                <span>Save Changes</span>
              </div>
            </Button>
          <div className="dotted-area">
             <p>Danger Zone</p>
             <p>These actions are irrevresible</p> 
             <Button
              variant="contained"
              className="delbtn"
            >
              <div className="btn-content">
                <span>Delete Doc</span>
              </div>
            </Button>
             
          </div>
          </div>
         
        </div>
      </DialogContent>
      
      
    </Dialog>
  );
}

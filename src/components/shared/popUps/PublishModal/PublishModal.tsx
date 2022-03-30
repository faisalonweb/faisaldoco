import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Button} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import "src/components/shared/popUps/PublishModal/PublishModal.scss";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function PublishModal(props: Props) {

    const resetModal = () => {
        props?.handleClose();
      };

  return (
    <Dialog className="publish-modal" open={props?.open} onClose={resetModal}>
      <DialogContent>
        <div className="modal-content">
          <div>
          <div className="publish-heading">
           <p>Publish to service name?</p>
          </div>
          <div className="center-modal">
            <div className="avatar-class"> <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /></div>
            <div className="publish-content"> <p>service/doc URL</p></div>
          </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={resetModal}
          className="cancel-btn"
        >
          Cancel
        </Button>
        <Button
          onClick={resetModal}
          className="add-btn"
        >
          Publish
        </Button>
      </DialogActions>
      
    </Dialog>
  );
}

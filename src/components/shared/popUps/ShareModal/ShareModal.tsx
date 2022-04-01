import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import { TextField } from "@mui/material";
import "src/components/shared/popUps/PublishModal/PublishModal.scss";

interface Props {
  open: boolean;
  handleCloseModal: () => void;
}

export default function ShareModal(props: Props) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [description, setDescription] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    const handleEmail = (event:any) => {
        if (event.target.value.length) {
          setEmailError("");
        }
        setEmail(event?.target?.value);
      };
    
      const handleDescription = (event:any) => {
        if (event.target.value.length) {
          setDescriptionError("");
        }
        setDescription(event?.target?.value);
      };
    const resetModal = () => {
        props?.handleCloseModal();
      };

  return (
    <Dialog className="share-modal" open={props?.open} onClose={resetModal}>
      <DialogContent>
        <div className="modal-content">
            <div className="email-section">
              <p className="info-label required">Invite member with email</p>
              <TextField
                className="full-field"
                value={email}
                type="text"
                onChange={handleEmail}
                variant="outlined"
                placeholder="Email"
              />
              <p className="errorText" style={{ marginTop: "5px" }}>
                {emailError}
              </p>
            </div>
            <div className="url-section">
              <p className="info-label required">random link to copy</p>
              <TextField
                className="full-field-desc"
                type="text"
                value={description}
                onChange={handleDescription}
                variant="outlined"
                placeholder="URL"
              />
              <p className="errorText" style={{ marginTop: "5px" }}>
                {descriptionError}
              </p>
            </div>
           </div> 
      </DialogContent>
    </Dialog>
  );
}

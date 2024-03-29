import * as React from 'react';
import Dialog from "@mui/material/Dialog";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DialogContent from "@mui/material/DialogContent";
import { Button} from "@mui/material";
import "src/components/shared/popUps/PublishModal/PublishModal.scss";
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  open: boolean;
  handleClose: () => void;
  projectInfo: string | undefined;
  userInfo: string;
}

export default function CodebaseModal(props: Props) {
  const [age, setAge] = React.useState('');

    const resetModal = () => {
        props?.handleClose();
      };
      const handleChange = (event: SelectChangeEvent<string>) => {
        setAge(event.target.value);
      };

  return (
    <Dialog className="connect-modal" open={props?.open} onClose={resetModal} maxWidth="lg">
      <DialogContent className="dialog-content">
        <div className="modal-content">
          <div>
          <div className="publish-heading">
           <p>Project Info - {props.projectInfo}</p>
          </div>
          <div className="code-link">
          <p>User Info: {props.userInfo}</p>
          </div>
          <div className="hoisting-service">
              <p>Hoisting service :</p>
              <div className="hoisting-dropdown">
              <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Notion</MenuItem>
                  <MenuItem value={20}>Confluence</MenuItem>
                </Select>
              </FormControl>
             </Box>
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

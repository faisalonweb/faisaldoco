import * as React from 'react';
import Dialog from "@mui/material/Dialog";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DialogContent from "@mui/material/DialogContent";
import { Button} from "@mui/material";
import { TextField } from "@mui/material";
import "src/components/shared/popUps/PublishModal/PublishModal.scss";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export default function CodebaseModal(props: Props) {
  const [age, setAge] = React.useState('');

    const resetModal = () => {
        props?.handleClose();
      };
      const handleChange = (event:any) => {
        setAge(event.target.value);
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

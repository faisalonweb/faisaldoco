import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';

const Review = () => {
    
    return (
        <div className="review-page">
           <TextField
                className="full-field"
                type="text"
                variant="outlined"
                placeholder="Document"
                multiline
                rows={35}
                maxRows={40}
                style = {{width: '60%'}}
              />
        </div>
    );
};

export default Review;
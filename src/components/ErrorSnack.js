import React from 'react';
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function SimpleSnackbar({message}) {
  
  return (
    <div>
      <Snackbar anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={true}
        >
      <Alert severity="error">{message}</Alert>
      </Snackbar>
    </div>
  );
}

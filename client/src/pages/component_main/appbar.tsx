import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{bgcolor: '#5449a3'}}>
        <Toolbar variant="dense" sx={{ justifyContent: 'center' }}>
          <Typography variant="h5" color="inherit" component="div" >
            Monitor your server
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
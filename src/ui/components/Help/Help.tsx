import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';

export type HelpProps = {
  content: string;
  title: string;
};

export const Help = ({ content, title }: HelpProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton sx={{ color: 'text.secondary' }} onClick={() => setOpen(true)}>
        <HelpOutlineIcon />
      </IconButton>
      <Dialog onClose={() => setOpen(false)} open={open}>
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

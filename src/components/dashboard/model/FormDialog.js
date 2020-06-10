import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';



const useStyles = makeStyles((theme) => ({
    button: {
        margin: "10px",
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const FormDialog =(props) =>{
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Button
        type="button"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleClickOpen}
    >
        {props.icon} <b>{props.btntext}</b>

     </Button>
      <Dialog 
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            TransitionComponent={Transition}
            >
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.text}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label={props.label}
            type={props.type}
            name={props.name}
            fullWidth
            onChange={props.onChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{handleClose();props.onSave()}} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

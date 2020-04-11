import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import VpnKeyIcon from '@material-ui/icons/VpnKey';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AlertDialogSlide=(props)=>{
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                type="button"
                variant="contained"
                color="primary"
                style={{ margin: "10px" }}
                onClick={handleClickOpen}
            >
                <VpnKeyIcon /> <b>Token</b>
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                scroll={scroll}
            >
                <DialogTitle id="alert-dialog-slide-title">{"Token"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" style={{overflowWrap: "break-word"}}>
                        {props.token}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import theme from "../../../theme"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import { AlertDialogSlide } from './AlertDialogSlide';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/01/18/38/background-1789175_1280.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: "50%",
    },
    paper: {
        margin: theme.spacing(10, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    form: {
        width: '70%', // Fix IE 11 issue.
        // marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    button: {
        margin: "10px",
    }
}));
export const Profile = (
    {
        username,
        email,
        numberOfStoredFeedback,
        token,
    }
) => {

    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <Paper>
                <CssBaseline></CssBaseline>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className={classes.paper}>
                        <form className={classes.form} noValidate>
                            <Typography variant="button">
                                <b>Username</b>
                            </Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                clor="primary"
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={username}
                            />
                            <Typography variant="button">
                                <b>Email</b>
                            </Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="email"
                                type="email"
                                id="email"
                                autoComplete="email"
                                color="primary"
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={email}
                            />
                            <Typography variant="button">
                                <b>Number of feedback entities currently stocked</b>
                            </Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                name="nrFeedback"
                                id="nrFeedback"
                                color="primary"
                                fullWidth
                                type="number"
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={numberOfStoredFeedback}
                            />
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <AlertDialogSlide token={token}/>
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >
                                    <LockOpenOutlinedIcon /> <b>Change password</b>
                                </Button>
                                <Button
                                    type="button"
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >
                                    <AlternateEmailOutlinedIcon /> <b>Change email</b>

                                </Button>

                            </div>
                        </form>
                    </div>
                </div>
            </Paper>
        </MuiThemeProvider>

    );
}

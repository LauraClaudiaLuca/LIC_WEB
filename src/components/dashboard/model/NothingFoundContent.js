import Analysis from '../chart/Analysis';
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import { CardFeedback } from './CardFeedback';
import Chip from "@material-ui/core/Chip";
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Card from "@material-ui/core/Card";
import { CardContent } from '@material-ui/core';
import "./css/chip.css"
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import Box from '@material-ui/core/Box';



const styles = (theme) => ({
    paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
        marginTop: "-30px"
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: '40px 16px',
    },
});

export const NothingFoundContent = ({
    onChange,
    onClick,
    productCode,
    children,

}) => {
    // const { classes, children } = props;
    const classes = withStyles(styles)

    return (
        <Paper className={classes.paper} style={{ maxWidth: "100%" }}>
            <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <SearchIcon className={classes.block} color="inherit" />
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                placeholder="Analyze by product code ..."
                                InputProps={{
                                    disableUnderline: true,
                                    className: classes.searchInput,
                                }}
                                value={productCode}
                                name="productCode"
                                onChange={onChange}
                            />
                        </Grid>
                        {children}
                        <Grid item style={{ marginLeft: "10px" }}>
                            <Button variant="contained" color="default" className={classes.addUser} onClick={onClick}>
                                Search
              </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.contentWrapper} style={{minHeight:"600px"}} >
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height:"100%" }}>
                    <Typography component="div" style={{marginTop:"200px", color:"#DCDCDC"}} >
                        <Box fontSize="h5.fontSize"  fontWeight="fontWeightBold">
                            No statistics found.
                        </Box>
                    </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height:"100%" }}>
                <Typography component="div" style={{margin:"5px"}} >
                        <Box fontSize="h6.fontSize">
                            <SentimentDissatisfiedIcon style={{height:"100px", width:"100px", color:"#DCDCDC"}}/>
                        </Box>
                    </Typography>
                </div>
            </div>
        </Paper>
    );
}


export default NothingFoundContent;
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
import {CardFeedback} from './CardFeedback';
import Chip from "@material-ui/core/Chip";
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Card from "@material-ui/core/Card";
import { CardContent } from '@material-ui/core';
import "./css/chip.css"


const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
    marginTop:"-30px"
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

export const Content = ({
    classes,
    children,
    onChange,
    onClick,
    statistics,
    productCode,

  })=> {
  // const { classes, children } = props;

  return (
    <Paper className={classes.paper} style={{maxWidth:"100%"}}>
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
            <Grid item style={{marginLeft:"10px"}}>
              <Button variant="contained" color="default" className={classes.addUser} onClick={onClick}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper} >
        <div style={{display: "flex", justifyContent: "center",alignItems: "center"}}>
          <Card  variant="outlined" style={{maxWidth: "936",width:"100%"}}>
            <CardContent>
            <div style={{display: "flex", justifyContent: "center",alignItems: "center"}}>

            <Analysis
              data={[{
                sentiment: 'Positive',
                value: statistics.positive
              }, {
                sentiment: 'Neutral',
                value: statistics.neutral
              },
              {
                sentiment: 'Negative',
                value: statistics.negative
              }
            ]}
             />
            </div>
            </CardContent>
          </Card>
        </div>
        <div style={{display: "flex", justifyContent: "center",alignItems: "center",marginTop:"15px"}}>
        <CardFeedback
          title={statistics.mostPositive.title}
          date={new Date(statistics.mostPositive.createdAt).toLocaleDateString()}
          content={statistics.mostPositive.content}
          likes={statistics.mostPositive.likes}
          chip={        
          <Chip
            icon={<SentimentSatisfiedOutlinedIcon className="chip-icon" style={{ color: "white" }} />}
            label={<b className="chip-content">Most positive</b>}
            style={{ backgroundColor: "rgb(112, 201, 47)", color: "white", float:"right" }}/>
          }
        />
        <CardFeedback
          title={statistics.mostNegative.title}
          date={new Date(statistics.mostNegative.createdAt).toLocaleDateString()}
          content={statistics.mostNegative.content}
          likes={statistics.mostNegative.likes}
          chip={        
          <Chip
            icon={<SentimentDissatisfiedOutlinedIcon className="chip-icon" style={{ color: "white" }} />}
            label={<b className="chip-content">Most negative</b>}
            style={{ backgroundColor: "rgb(189, 21, 80)", color: "white", float:"right" }}/>
          }
        />
        <CardFeedback
          title={statistics.mostLiked.title}
          date={new Date(statistics.mostLiked.createdAt).toLocaleDateString()}
          content={statistics.mostLiked.content}
          likes={statistics.mostLiked.likes}
          chip={        
          <Chip
            icon={<FavoriteBorderOutlinedIcon className="chip-icon" style={{ color: "white" }} />}
            label={<b className="chip-content">Most liked</b>}
            style={{ backgroundColor: "rgb(0, 155, 229)", color: "white", float:"right" }}/>
          }
        />
        </div>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
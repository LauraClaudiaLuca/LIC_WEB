import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Tooltip from "@material-ui/core/Tooltip";



const useStyles = makeStyles(theme => ({
  root: {
    // maxWidth: 1500,
    width:"80%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export const CardFeedback = (
    {
    title,
    date,
    content,
    likes,
    chip,
    }
    )=> {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} variant="outlined" style={{alignSelf: "flex-start", margin:"10px"}}>
      <CardHeader
        title={
            <div>
            {title}
            {chip}
            </div>
        }
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {!expanded
            ? content.substring(0,50)+"..."
            : content
          }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="likes" disabled style={{color:"grey"}}>
          <FavoriteIcon /> {likes}
        </IconButton>
        <Tooltip
          title={!expanded ? "Show content" : "Hide content"}
          placement="bottom"
        >
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label={!expanded ? "Show content" : "Hide content"}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

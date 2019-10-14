import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import getAvatar from '../Common/AnimalAvatars';

const useStyles = makeStyles(theme => ({
  card: {
    // boxShadow: '0 0 1px 0 rgba(0,0,0,.28)',
    boxShadow: '0 0 11px #eaf0f6',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  button: {
    marginLeft: 'auto',
  }
}));

export default function Post(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={getAvatar()}>

          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ExpandMoreIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ThumbUpIcon />
        </IconButton>

        <Button color="primary" className={classes.button}>
          2
          <CommentIcon className={classes.rightIcon} />
        </Button>
      </CardActions>
    </Card>
  );
}
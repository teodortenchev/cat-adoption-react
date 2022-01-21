import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import defaultImage from '../../images/unknownkitty.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 450
  },
});

export default function CatCard({ image, name, breed, story, id, isAdmin }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/cats/${id}`}>
          <CardMedia
            component="img"
            alt={name}
            height="250"
            image={image || defaultImage}
            title={name}
          />
        </Link>
        <Link to={`/cats/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name} ({breed})
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`${story.substring(0, 100)} [read more...]`}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" href={`/cats/edit/${id}`} style={{ display: isAdmin ? "inline" : "none" }}>
          Edit
        </Button>
        <Button size="small" color="primary" href={`/cats/${id}`}>
          More Details
        </Button>
      </CardActions>

    </Card >
  );
}
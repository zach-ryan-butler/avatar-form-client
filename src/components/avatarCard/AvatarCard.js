import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  media: {
    height: '250px',
    width: '250px'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  }
})

function AvatarCard({ url, name }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia 
        className={classes.media}
        image={url}
      />
      <CardContent>
        <Typography>
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}

AvatarCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default AvatarCard;

import React from 'react';
import PropTypes from 'prop-types';
import AvatarCard from '../avatarCard/AvatarCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gridItem: {
    display: 'flex'
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
})

function AvatarCardList({ characters }) {
  console.log(characters);
  const classes = useStyles();
  const characterGridItems = characters.map(({ url, name }) => {
    return (
      <Grid item xs={6} sm={4} className={classes.gridItem}>
        <AvatarCard url={url} name={name} />
      </Grid>
    )
  })

  return (
    <Grid container className={classes.gridContainer}>
      {characterGridItems}
    </Grid>
  )
}

AvatarCardList.propTypes = {
  characters: PropTypes.array.isRequired
}

export default AvatarCardList;

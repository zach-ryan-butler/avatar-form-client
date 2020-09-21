import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Grid, TextField, Avatar } from '@material-ui/core';

function AvatarForm({ handleInputChange, values }) {
  return (
    <Grid container>
      <Grid item>
        <TextField 
          variant="outlined"
          label="Search by name"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
      </Grid>
    </Grid>
  )
}

AvatarForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
}

export default AvatarForm;
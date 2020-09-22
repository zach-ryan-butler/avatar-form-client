import React from 'react';
import PropTypes from 'prop-types'
import { Grid, TextField } from '@material-ui/core';

function NameSearch({ handleInputChange, values }) {
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

NameSearch.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
}

export default NameSearch;
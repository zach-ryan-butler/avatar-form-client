import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AffiliationCheckbox({ name, onChange, value, label, checked }) {
  return (
      <FormControlLabel 
        control = {
          <Checkbox 
            name={name}
            checked={checked.checkedFire}
            onChange={onChange}
            color='primary'
            value={value}
          />
        }
        label={label}
      />
  )
}
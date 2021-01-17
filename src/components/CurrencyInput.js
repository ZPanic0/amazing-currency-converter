import React from 'react'
import { FormControl, FormHelperText, TextField } from '@material-ui/core'


export const CurrencyInput = ({ value, onChange }) =>
    <FormControl>
        <TextField
            type='number'
            value={value}
            onChange={({ target: { value } }) => onChange(Number(value))}
        />
        <FormHelperText>Convert</FormHelperText>
    </FormControl>
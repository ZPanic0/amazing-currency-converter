import { FormControl, FormHelperText, MenuItem, Select } from '@material-ui/core'
import React from 'react'


export const CurrencySelector = ({ selectedKey, currencies, onChange, helperText }) =>
    <FormControl>
        <Select value={selectedKey} onChange={({ target: { value } }) => onChange(value)}>
            {Object
                .entries(currencies)
                .map(([key, value]) =>
                    <MenuItem selected={key === selectedKey} key={key} value={key}>
                        ({key}) {value}
                    </MenuItem>)}
        </Select>
        <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';

import { ISelectField } from './interfaces/ISelectField';

export const TaskSelectField: FC<ISelectField> = (
  props,
): ReactElement => {
  const {
    value = '',
    label = 'Select Box',
    name = 'selectBox',
    items = [{ value: '', label: 'Add Items' }],
    onChange = (e) => {
      console.log('');
    },
    disabled = false,
  } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, index) => {
          return (
            <MenuItem value={item.value} key={index}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

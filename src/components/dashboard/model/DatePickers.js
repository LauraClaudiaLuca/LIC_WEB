import React from 'react';
import theme from "../../../theme"
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import { MuiThemeProvider } from '@material-ui/core';

export const DatePickers = ({
  dateFrom,
  dateTo,
  onChangeDate,
}) => {

  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          margin="normal"
          id="date-picker-dialog"
          label="From"
          format="MM/dd/yyyy"
          value={dateFrom}
          onChange={(date) => onChangeDate(date, 1)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          style={{ width: "140px", marginRight: "10px" }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          margin="normal"
          id="date-picker-dialog"
          label="To"
          format="MM/dd/yyyy"
          value={dateTo}
          onChange={(date) => onChangeDate(date, 2)}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          style={{ width: "140px" }}
        />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}
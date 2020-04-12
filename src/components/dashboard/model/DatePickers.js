import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';

export const DatePickers= ({
    dateFrom,
    dateTo,
    onChangeDate,
})=> {
    // const [selectedDate, setSelectedDate] = React.useState();
    // const [selectedDate2, setSelectedDate2] = React.useState();
    // const handleDateChange = (date) => {
    //   setSelectedDate(date);
    // };
    // const handleDateChange2 = (date) => {
    //     setSelectedDate2(date);
    //   };
  
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            id="date-picker-dialog"
            label="From"
            format="MM/dd/yyyy"
            value={dateFrom}
            onChange={(date)=>onChangeDate(date,1)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            style={{width:"130px", marginRight:"10px"}}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            margin="normal"
            id="date-picker-dialog"
            label="To"
            format="MM/dd/yyyy"
            value={dateTo}
            onChange={(date)=>onChangeDate(date,2)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            style={{width:"130px"}}
          />
      </MuiPickersUtilsProvider>
    );
  }
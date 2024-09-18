import React, { Component } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export class Dropdown extends Component {
 
    handleCountryChange = (event) => {
        // Call the changeCountry function passed from App.js
        console.log(event.target.value);
    this.props.changeCountry(event.target.value);
  }

  render() {
      return (
          <>
             
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Country
        </InputLabel>
        <NativeSelect
          defaultValue={"us"} 
            onChange={this.handleCountryChange} // Handle change
            inputProps={{
              name: 'country',
              id: 'uncontrolled-native',
            }}
        >
           <option value={"in"}>India</option>
            <option value={"us"}>USA</option>
            <option value={"cn"}>China</option>
            <option value={"de"}>Germany</option>
            <option value={"fr"}>France</option>
                      </NativeSelect>
                      
      </FormControl>
        </Box>
              
     </>   
    )
  }
}

export default Dropdown;

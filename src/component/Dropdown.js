import React, { Component } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Select, MenuItem } from "@mui/material";

export class Dropdown extends Component {
	handleCountryChange = (event) => {
		// Call the changeCountry function passed from App.js
		console.log(event.target.value);
		this.props.changeCountry(event.target.value);
	};

	render() {
		return (
			<>
				<Box
					sx={{
						minWidth: 100,
						bgcolor: "ghostwhite",
						borderRadius: 3,
					}}
				>
					<FormControl fullWidth>
						<InputLabel
							id="demo-simple-select-label"
							sx={{ color: "white", bgcolor: "transparent" }}
						>
							Country
						</InputLabel>
						<Select
							sx={{
								color: "white",
								bgcolor: "black",
								".MuiOutlinedInput-notchedOutline": {
									borderColor: "white", // Changes the border color
								},
								".MuiOutlinedInput-notchedOutline": {
									borderColor: "white", // Changes the border color
								},
								"&:hover .MuiOutlinedInput-notchedOutline": {
									borderColor: "white", // Hover effect for border
								},
								".MuiSvgIcon-root": {
									color: "white", // Changes the dropdown icon color
								},
							}}
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="Country"
							defaultValue={"us"}
							onChange={this.handleCountryChange} // Handle change
							inputProps={{
								name: "country",
								id: "uncontrolled-native",
							}}
						>
							{/* <MenuItem value="">N/A</MenuItem> */}
							<MenuItem value={"in"}>India</MenuItem>
							<MenuItem value={"us"}>USA</MenuItem>
							<MenuItem value={"cn"}>China</MenuItem>
							<MenuItem value={"de"}>Germany</MenuItem>
							<MenuItem value={"fr"}>France</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</>
		);
	}
}

export default Dropdown;

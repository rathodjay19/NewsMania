import React, { Component } from "react";
import { Tooltip, Zoom } from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export class NewsItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovered: false,
		};
	}

	handleMouseEnter = () => {
		this.setState({ isHovered: true });
	};

	handleMouseLeave = () => {
		this.setState({ isHovered: false });
	};

	render() {
		let { title, description, imageUrl, newsUrl, author, date, source } =
			this.props;
		// box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
		return (
			<div
				style={{
					transition: "all 0.2s ease-in",
					transform: this.state.isHovered ? "scale(1.1)" : "scale(1)",
					boxShadow: this.state.isHovered
						? "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
						: "none",
				}}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<div className="card my-2 h-100" style={{ width: "18rem" }}>
					<span
						className="position-absolute top-0  translate-middle badge round-pill bg-danger"
						style={{
							left: "90%",
							zIndex: "1",
						}}
					>
						{source}
					</span>
					<img className="card-img-top" src={imageUrl} alt={imageUrl} />
					<div className="card-body d-flex flex-column">
						<h5 className="card-title">{title}</h5>

						<p className="card-text">{description}</p>
						<p className="class-text">
							<small className="text=muted">
								By {author ? author : "Unknown"} on{" "}
								{new Date(date).toGMTString()}
							</small>
						</p>
						<Tooltip
							title="Open"
							TransitionComponent={Zoom}
							placement="top"
							arrow
							componentsProps={{
								tooltip: {
									sx: {
										bgcolor: "common.black",
										"& .MuiTooltip-arrow": {
											color: "common.black",
										},
									},
								},
							}}
						>
							<a href={newsUrl} className="btn btn-sm btn-dark mt-auto">
								Click to see more <OpenInNewRoundedIcon />
							</a>
						</Tooltip>

						<div
							className="d-flex justify-content-center mt-2"
							style={{ gap: "10px" }} // Adds some space between the icons
						>
							<Checkbox
								{...label}
								icon={<FavoriteBorder />} // Default state (unselected)
								checkedIcon={
									<Favorite sx={{ color: "red" }} /> // When selected, color changes to red
								}
							/>
							<Checkbox
								{...label}
								icon={<BookmarkBorderIcon />} // Default state (unselected)
								checkedIcon={
									<BookmarkIcon sx={{ color: "black" }} /> // When selected, color changes to black
								}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;

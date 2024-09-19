import React, { useState } from "react";
import "./About.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { MdSettingsInputAntenna } from "react-icons/md";

const About = ({ data }) => {
	const [slide, setSlide] = useState(0);
	// console.log(data);
	const nextSlide = () => {
		// setSlide(slide + 1);
		setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
	};
	const prevSlide = () => {
		// setSlide(slide - 1);
		setSlide(slide === 0 ? data.slides.length - 1 : slide - 1);
	};
	return (
		<div className="carousel">
			<BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
			{data.slides.map((item, idx) => {
				return (
					<img
						src={item.src}
						alt={item.alt}
						key={idx}
						className={slide === idx ? "slide" : "slide slide-hidden"}
					/>
				);
			})}
			<BsArrowRightCircleFill
				className="arrow arrow-right"
				onClick={nextSlide}
			/>

			<span className="indicators">
				{data.slides.map((_, idx) => {
					return (
						<button
							key={idx}
							onClick={null}
							className={
								slide === idx ? "indicator" : "indicator indicator-inactive"
							}
						></button>
					);
				})}
			</span>
		</div>
	);
};

export default About;

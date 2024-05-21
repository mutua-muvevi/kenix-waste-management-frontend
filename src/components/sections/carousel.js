import React from "react";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import {
	ArrowBackIos as ArrowLeft,
	ArrowForwardIos as ArrowRight,
} from "@mui/icons-material";
import { m } from "framer-motion";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@emotion/react";

// Custom arrows for the carousel
function SampleNextArrow(props) {
	const { onClick, color } = props;
	return (
		<IconButton
			onClick={onClick}
			sx={{ position: "absolute", top: "50%", right: "2%", zIndex: 1, marginLeft: "20px", color: color, }}
		>
			<ArrowRight />
		</IconButton>
	);
}

function SamplePrevArrow(props) {
	const { onClick, color } = props;
	return (
		<IconButton
			onClick={onClick}
			sx={{ position: "absolute", top: "50%", left: "2%", zIndex: 1, marginRight: "20px", color: color, }}
		>
			<ArrowLeft />
		</IconButton>
	);
}

const ReusableCarousel = ({ children, visibleItems, speed }) => {
	const theme = useTheme()

	const settings = {
		className: "center",
		centerMode: true,
		dots: true,
		infinite: true,
		speed: speed,
		slidesToShow: visibleItems,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		arrows: true,
		prevArrow: <SamplePrevArrow color={theme.palette.text.primary}/>,
		nextArrow: <SampleNextArrow color={theme.palette.text.primary}/>,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
					dots: true
			  }
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
				}
			}
		]
	};
	return (
		<Slider {...settings}>
			{React.Children.map(children, (child, index) => (
				<m.div
					key={index}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					{child}
				</m.div>
			))}
		</Slider>
	);
};

ReusableCarousel.propTypes = {
	children: PropTypes.node.isRequired,
	visibleItems: PropTypes.number,
};

export default ReusableCarousel;

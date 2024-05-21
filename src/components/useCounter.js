import { useState, useEffect, useRef } from "react";
import { m } from "framer-motion";
import { Typography } from "@mui/material";

const useCounter = (value, duration, shouldStart) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = null;
		let remaining = value;

		if (!shouldStart) return;

		const step = (timestamp) => {
			if (!start) start = timestamp;
			const elapsed = timestamp - start;

			if (elapsed < duration) {
				setCount(Math.floor((elapsed / duration) * value));
				remaining -= (elapsed / duration) * value;
				window.requestAnimationFrame(step);
			} else {
				setCount(value);
			}
		};

		window.requestAnimationFrame(step);

		return () => {
			setCount(0); // reset counter to 0 when component unmounts
		};
	}, [value, duration, shouldStart]);

	return count;
};

export default function ReusableCounter({ number, duration, variant, sx }) {
	const [isInView, setIsInView] = useState(false);
	const countRef = useRef();
	const count = useCounter(number, duration, isInView);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);

		if (countRef.current) {
			observer.observe(countRef.current);
		}

		return () => {
			if (countRef.current) {
				observer.unobserve(countRef.current);
			}
		};
	}, []);

	return (
		<m.div
			ref={countRef}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<Typography variant={variant} style={sx ? sx : null}>
				{count} +
			</Typography>
		</m.div>
	);
}

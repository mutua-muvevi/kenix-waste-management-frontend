// useTypewriter.js
import { useState, useEffect } from "react";

const useTypewriter = (
	words = [],
	speed = 200,
	eraseSpeed = 100,
	waitTime = 2000
) => {
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [typingSpeed, setTypingSpeed] = useState(speed);

	useEffect(() => {
		if (isDeleting) {
			setTypingSpeed(eraseSpeed);
		} else {
			setTypingSpeed(speed);
		}

		if (subIndex === words[index].length + 1 && !isDeleting) {
			setIsDeleting(true);
			setTimeout(() => {}, waitTime);
		} else if (isDeleting && subIndex === 0) {
			setIsDeleting(false);
			setIndex((prevIndex) =>
				prevIndex + 1 < words.length ? prevIndex + 1 : 0
			);
		}

		const timeout = setTimeout(() => {
			setSubIndex((prevSubIndex) => prevSubIndex + (isDeleting ? -1 : 1));
		}, typingSpeed);

		return () => clearTimeout(timeout);
	}, [isDeleting, subIndex]);

	return words[index].substring(0, subIndex);
};

export default useTypewriter;

import { FaUserTie, FaBriefcase } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";

const styledIcon = {
	fontSize: "25px",
};

export const leftRightContainerList = {
	title: "",
	items: [
		{
			icon: <MdAddBusiness style={styledIcon} />,
			title: "Startup",
			text: "Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Id faucibus nisl tincidunt eget nullam non nisi est senectus et netus et malesuada fames.",
		},
		{
			icon: <FaUserTie style={styledIcon} />,
			title: "Entrepreneurs",
			text: "Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Id faucibus nisl tincidunt eget nullam non nisi est senectus et netus et malesuada fames.",
		},
		{
			icon: <FaBriefcase style={styledIcon} />,
			title: "Managers",
			text: "ncidunt eget nullam non nisi est. Senectus et netus et malesuada fames ac. Placerat duis ultricies lacus sed rhoncus est pellentesque elit .",
		},
	],
};

export const scaleUpBusiness = {
	title: "Accelerate Your Growth with Us",
	subtitle:
		"Experience exponential growth as we craft a digital strategy tailored specifically to your business objectives. Let us be your tech partners, the propellers of your success in the digital age.",
	items: [
		{
			icon: "mdi-cogs",
			title: "Streamlined Operations",
			text: "Efficiency is the key to scaling. Our tailored software solutions automate and streamline your business processes, saving time and resources, ultimately driving profitability.",
		},
		{
			icon: "mdi-rocket-launch-outline",
			title: "Rapid Market Penetration",
			text: "Leverage our cutting-edge web and mobile applications to broaden your reach, penetrate markets faster, and achieve a larger customer base with our intuitive and engaging designs.",
		},
		{
			icon: "mdi-database-check",
			title: "Data-Driven Insights",
			text: "Turn data into your competitive advantage. Our AI and data science solutions unlock actionable insights, enabling you to make strategic decisions that foster growth.",
		},
		{
			icon: "mdi-cloud-check",
			title: "Scalable Cloud Solutions",
			text: "Stay ahead with our cloud computing services. We ensure secure, reliable, and scalable cloud solutions that grow with your business, accommodating increased workload without impacting performance.",
		},
	],
};

export const whyChooseUs = {
	title: "Experience the Power of Exceptional Tech Partnership",
	subtitle:
		"Choosing us is opting for transformational growth and innovative prowess. We are more than a tech company; we are your strategic partners, dedicated to propelling your business to new heights. Our passion for technology, coupled with our deep industry knowledge, delivers unparalleled value. Dive in with us to explore how we turn your tech challenges into strategic assets.",
	paragraphs: [
		"As industry trailblazers, we offer expertise spanning across various technology domains. Our diverse portfolio is a testament to our adaptability and ability to tailor-fit solutions for unique business needs. Whether you're a start-up seeking to disrupt markets or an established entity looking to optimize operations, we have the experience and skills to drive your business forward.",
		"We champion innovation. At the core of our services, you'll find cutting-edge technology and a drive to push boundaries. We bring to the table a suite of tech solutions designed to keep you ahead in this fast-paced digital era. Our solutions don’t just solve problems; they redefine your competitive landscape, creating new avenues for growth and success.",
		"Trust, reliability, and integrity are the pillars of our partnership with you. We place utmost importance on data security and ethical practices. As your tech partners, we deliver transparency and dependability, ensuring that our relationship is built on mutual respect and a shared vision for your business growth.",
		"Let's embark on a journey of transformation together. We promise you an alliance that harnesses the power of technology to create a tangible impact on your business. We're not just providing a service; we're offering a partnership that's committed to your success. Choose us, and let's shape the future of your business together.",
	],
	image: "https://res.cloudinary.com/dbj0t0zym/image/upload/v1689491550/strategic_awm8ub.jpg"
};


export const allBusinessTypes = {
	title: "Empowering Businesses of All Scales and Sectors",
	subtitle: "No matter the size or industry, our technology solutions are tailored to fit your unique business needs. We're driven by the mission to empower all businesses, whether you're an SME, a disruptive startup, or an established enterprise.",
	items: [
		{
			icon: "mdi-office-building",
			title: "Small and Medium-sized Enterprises (SMEs)",
			text: "We understand the unique challenges SMEs face. Our innovative, budget-friendly tech solutions are designed to drive efficiency, improve operations, and position your SME for scalable growth. Experience tailored solutions that turn your tech challenges into growth opportunities."
		},
		{
			icon: "mdi-rocket-launch",
			title: "Startups and Entrepreneurial Ventures",
			text: "For startups, agility and innovation are key. Our nimble, cutting-edge tech solutions equip you to disrupt markets and lead the innovation race. From ideation to execution, we're your tech partner that fuels your journey to become a market leader."
		},
		{
			icon: "mdi-factory",
			title: "Established Enterprises and Corporations",
			text: "For established businesses, we offer tech solutions that optimize operations, improve customer experience, and drive sustainable growth. Leverage our tech expertise to stay competitive, adapt to market changes, and lead in your industry."
		},
	],
	image: "https://res.cloudinary.com/dbj0t0zym/image/upload/v1689493104/business_types_atuctw.jpg"
}

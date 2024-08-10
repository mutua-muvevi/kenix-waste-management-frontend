import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";
import Banner from "./sections/banner";
import LeftRight from "src/components/sections/leftright";
import HomeTestimonial from "./sections/testimonial";
import Subscribe from "src/components/sections/subscribe";
import ContactForm from "src/components/sections/contactform";
import LeftRightContainered from "src/components/sections/leftrightcontainered";
import ServicesCards from "../services/sections/cards"

import {
	scaleUpBusiness,
	whyChooseUs,
	allBusinessTypes,
} from "./info";
import HomeDomain from "./sections/domain";


const scaleUpImage = "https://res.cloudinary.com/dt0uaru3j/image/upload/v1723033709/KENIX%20WASTE%20SOLUTIONS%20LTD/istockphoto-502778736-612x612_kaokj0.jpg";

const textgridBackground = "https://res.cloudinary.com/dt0uaru3j/image/upload/v1723057071/KENIX%20WASTE%20SOLUTIONS%20LTD/istockphoto-1711082030-612x612_bbhvll.jpg"


const StyledWrapper = styled(Box)(({ theme }) => ({}));


const Home = () => {
	return (
		<Page title="Kenix Waste Solutions | Leading Waste Management Solutions">
			<StyledWrapper>
				<Banner />
				<LeftRightContainered
					title={scaleUpBusiness.title}
					subtitle={scaleUpBusiness.subtitle}
					chipText="Scale up"
					list={scaleUpBusiness}
					imgPosition="right"
					image={scaleUpImage}
					imageHeight="600"
					chipWidth="200px"
				/>
				<LeftRight
					title={whyChooseUs.title}
					subtitle={whyChooseUs.subtitle}
					chipText="Best of the Best"
					imgPosition="left"
					image={whyChooseUs.image}
					ImageminHeight="50vh"
					paragraphs={whyChooseUs.paragraphs}
					textGridBackground={textgridBackground}
				/>
				{/* <HomeServices /> */}
				<ServicesCards/>
				<LeftRightContainered
					title={allBusinessTypes.title}
					subtitle={allBusinessTypes.subtitle}
					chipText="All Business All Sorted"
					list={allBusinessTypes}
					imgPosition="right"
					image={allBusinessTypes.image}
					imageHeight="600"
					chipWidth="250px"
					backgroundColor
				/>
				<HomeDomain />
				<HomeTestimonial />
				<Subscribe />
				{/* <ReusableNewsCards
					title={newsTitle}
					subtitle={newsSubtitle}
					chipText="News and Updates"
					alignItems="center"
					list={sortedBlogList}
				/> */}
				<ContactForm />
			</StyledWrapper>
		</Page>
	);
};

export default Home;

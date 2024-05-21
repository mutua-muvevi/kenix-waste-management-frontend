import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";
import Banner from "./sections/banner";
import LeftRight from "src/components/sections/leftright";
import HomeTestimonial from "./sections/testimonial";
import HomeServices from "./sections/service";
import Subscribe from "src/components/sections/subscribe";
import ContactForm from "src/components/sections/contactform";
import LeftRightContainered from "src/components/sections/leftrightcontainered";

import {
	leftRightContainerList,
	scaleUpBusiness,
	whyChooseUs,
	allBusinessTypes,
} from "./info";
import ReusableNewsCards from "src/components/sections/newscards";
import HomeDomain from "./sections/domain";

import BlogList from "src/content/blogs";

const image =
	"https://res.cloudinary.com/dbj0t0zym/image/upload/v1687988001/images/tablet_ifczul.jpg";
const subtitle = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor lobortis gravida. Duis efficitur velit nibh, vel vulputate neque posuere pharetra.`;

const scaleUpImage =
	"https://res.cloudinary.com/dbj0t0zym/image/upload/v1689489839/growth_w0phnw.jpg";

const newsTitle = "Insights Unleashed: Unlocking Knowledge and Inspiration";
const newsSubtitle =
	"Be it through an enlightening email conversation, a constructive phone call, or an immersive visit to our Nairobi location, we make sure our expertise is at your disposal. Each interaction is designed to inspire, engage, and empower you, bringing us closer to our shared vision of technological transformation. Trust 'Integral Support', your essential partner in scripting a successful digital narrative.";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const sortedBlogList = BlogList.slice(0, 4);

const Home = () => {
	return (
		<Page title="Kenix Waste Management | Leading Waste Management Solutions">
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
				/>
				<HomeServices />
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
				<ReusableNewsCards
					title={newsTitle}
					subtitle={newsSubtitle}
					chipText="News and Updates"
					alignItems="center"
					list={sortedBlogList}
				/>
				<ContactForm />
			</StyledWrapper>
		</Page>
	);
};

export default Home;

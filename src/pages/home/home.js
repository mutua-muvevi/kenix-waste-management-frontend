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
	"https://res.cloudinary.com/dt0uaru3j/image/upload/v1723033709/KENIX%20WASTE%20SOLUTIONS%20LTD/istockphoto-502778736-612x612_kaokj0.jpg";

const textgridBackground = "https://res.cloudinary.com/dt0uaru3j/image/upload/v1723057071/KENIX%20WASTE%20SOLUTIONS%20LTD/istockphoto-1711082030-612x612_bbhvll.jpg"

const newsTitle = "Waste Wisdom: Exploring Sustainable Solutions and Environmental Insights";
const newsSubtitle = "Explore the latest news and updates from Kennix Waste Management. From innovative waste management solutions to environmental initiatives and industry trends, stay connected with us as we work towards a cleaner, greener future for all.";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const sortedBlogList = BlogList.slice(0, 4);

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

import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";
import ReusableBanner from "src/components/sections/banner";

import ReusableNewsCards from "src/components/sections/newscards";
import NewsList from "src/content/news";

const image = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1689116307/blogs_uoga2t.jpg";
const subtitle =  "Welcome to 'Kenix Waste Solutions Insights', your resource for understanding the intricate choreography of technology in today's ever-evolving digital landscape. Here we chronicle our ongoing innovations, exploring the interface of technology and industry, be it healthcare, education, or beyond. Our timely updates shed light on the latest tech trends, our pioneering research, and the revolutionary solutions we deliver. Through these insights, we invite you into our commitment to progress and excellence. Engage with 'Kenix Waste Solutions Insights' - illuminate your path to digital transformation."

const newsTitle = "Kenix Waste Solutions Insights: Your Beacon in the Digital Landscape"
const newsSubtitle="Welcome to Seamless Support, your trusted partner in the complex choreography of the digital world. Our dedicated team stands ready to assist you, responsive and resolute, whether it's an email query or a phone call discussion. Your success is our mission, and we strive to ensure your journey with us is smooth and rewarding. With channels available for your every need, we've transformed customer service into a dynamic dialogue, a shared journey towards achieving your digital aspirations."

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const News = () => {
	return (
		<Page title="News Articles || Kenix Waste Solutions | Leading Waste Management Solutions">
			<StyledWrapper>
				<ReusableBanner
					title="News Articles"
					subtitle={subtitle}
					image={image}
					height="60vh"
				/>
				<ReusableNewsCards
					title={newsTitle}
					subtitle={newsSubtitle}
					chipText="News and Updates"
					alignItems="center"
					list={NewsList}
				/>
			</StyledWrapper>
		</Page>
	)
}

export default News
import { Box } from "@mui/material";
import { styled } from "@mui/system";

import ReusableBanner from "src/components/sections/banner";

import Page from "src/components/ui/Page";
import DomainCards from "./sections/cards";

const image = "https://res.cloudinary.com/dt0uaru3j/image/upload/v1723141436/KENIX%20WASTE%20SOLUTIONS%20LTD/two-brown-african-kenix-employees-sorting-waste-in-vJsU7e_uS8ikLZsdNZa4xg-0Q08VU_PTLqpguT3XP45CA_pzrym6.jpg";
const subtitle = "In the vastness of the digital realm, we offer you an arsenal of opportunities. We breathe life into ideas, translating them into vibrant applications that redefine boundaries and transcend expectations. Our versatile prowess ensures a chameleon-like adaptation across industries, be it healthcare, education, or beyond, delivering tailored solutions with precision. With us, you embark on a journey of ceaseless exploration and boundless growth, conquering new frontiers at every turn.";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Domain = () => {
	return (
		<Page title="Our Domain || Kenix Waste Solutions | Leading Waste Management Solutions">
			<StyledWrapper>
				<ReusableBanner
					title="Our Domain"
					subtitle={subtitle}
					image={image}
					height="100vh"
					alignItems="center"
					fullHeight
				/>
				<DomainCards/>
			</StyledWrapper>
		</Page>
	)
}

export default Domain
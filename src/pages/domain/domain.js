import { Box } from "@mui/material";
import { styled } from "@mui/system";

import ReusableBanner from "src/components/sections/banner";

import Page from "src/components/ui/Page";
import DomainCards from "./sections/cards";

const image = "https://res.cloudinary.com/dt0uaru3j/image/upload/v1723141436/KENIX%20WASTE%20SOLUTIONS%20LTD/two-brown-african-kenix-employees-sorting-waste-in-vJsU7e_uS8ikLZsdNZa4xg-0Q08VU_PTLqpguT3XP45CA_pzrym6.jpg";
const subtitle = "In the complex world of waste management, we provide a comprehensive suite of sustainable solutions. We transform challenges into opportunities, implementing innovative waste solutions and recycling strategies that exceed expectations. Our expertise spans various sectors, from residential to commercial and industrial, ensuring that each solution is precisely tailored to your needs. With Kenix, you embark on a journey toward a cleaner, greener future, continually pushing the boundaries of environmental responsibility and achieving new milestones at every step.";

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
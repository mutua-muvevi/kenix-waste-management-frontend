import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/ui/Page";
import ReusableBanner from "src/components/sections/banner";

import SingleBlogsBody from "./sections/body";

import { connect } from "react-redux";

const StyledWrapper = styled(Box)(({ theme }) => ({

}));

const SingleBlogs = ({blog}) => {
	return (
		<Page title={`${blog.title} || Kenix Waste Solutions Blogs`}>
			<StyledWrapper>
				<ReusableBanner
					title={blog.title}
					subtitle={blog.subtitle}
					image={blog.thumbnail}
					height="60vh"
				/>
				<SingleBlogsBody/>
			</StyledWrapper>
		</Page>
	)
}

const mapStateToProps = ({blog}) => ({
	blog: blog.blog
})

export default connect(mapStateToProps)(SingleBlogs)
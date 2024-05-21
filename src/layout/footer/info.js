import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const logoImage = "../../assets/logo/logo.png"

const styledIcons = {

}

export const footerItems = {
	logoSection : {
		logo: {
			src: "logoImage",
			alt:"Kenix Waste Management logo"
		},
		title: "Kenix Waste Management Ltd",
		text: "Crafting the Digital Rhythm of Africa"
	},
	pages: {
		title: "Company",
		items: [
			{
				label: "Home",
				link: "/landing/home"
			},
			{
				label: "About us",
				link: "/landing/about"
			},
			{
				label: "Services",
				link: "/landing/services"
			},
			{
				label: "News",
				link: "/landing/news"
			},
			{
				label: "Contact",
				link: "/landing/contact"
			},
		]
	},
	support: {
		title: "Support",
		items: [
			{
				label: "Job Openings",
				link: "/landing/careers"
			},
			{
				label: "Privacy Policy",
				link: "/landing/privacy"
			},
			{
				label: "Terms of Service",
				link: "/landing/terms"
			},
			{
				label: "Cookie Policy",
				link: "/landing/cookie"
			},
			{
				label: "Refunds Policy",
				link: "/landing/refunds"
			},
		]
	},
	getInTouch: {
		title: "Get in touch",
		items: [
			{
				label: "info@Kenix Waste Management.com",
				icon: <BsFillEnvelopeFill style={styledIcons}/>
			},
			{
				label: "Kenix Waste Management@gmail.com",
				icon: <BsFillEnvelopeFill style={styledIcons}/>
			},
			{
				label: "+254 700 000 000",
				icon: <BsFillTelephoneFill style={styledIcons}/>
			},
			{
				label: "+254 700 000 001",
				icon: <BsFillTelephoneFill style={styledIcons}/>
			},
			{
				label: "Nairobi Kenya",
				icon: <MdLocationOn style={styledIcons}/>
			},
		]
	},
}
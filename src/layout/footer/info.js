import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const logoImage = "../../assets/logo/logo.png"

const styledIcons = {

}

export const footerItems = {
	logoSection : {
		logo: {
			src: "https://res.cloudinary.com/dt0uaru3j/image/upload/v1722438649/KENIX%20WASTE%20SOLUTIONS%20LTD/LOGO_Web_vj0af4.png",
			alt:"Kenix Waste Solutions logo"
		},
		title: "Kenix Waste Solutions Ltd",
		text: "Sustainable Clean Green World."
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
				label: "info@kenixwastesolutions.co.ke",
				icon: <BsFillEnvelopeFill style={styledIcons}/>
			},
			{
				label: "Kenix Waste Solutions@gmail.com",
				icon: <BsFillEnvelopeFill style={styledIcons}/>
			},
			{
				label: "+254 111 220 195",
				icon: <BsFillTelephoneFill style={styledIcons}/>
			},
			{
				label: "+254 114 260 070",
				icon: <BsFillTelephoneFill style={styledIcons}/>
			},
			{
				label: "Embakasi, Nairobi Kenya",
				icon: <MdLocationOn style={styledIcons}/>
			},
		]
	},
}
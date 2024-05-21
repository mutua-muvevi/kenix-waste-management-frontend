import Iconify from "src/components/iconify/iconify"

export const navConfig = [
	{
		title: "Home",
		icon: <Iconify icon="clarity:home-solid" />,
		path: "/landing/home"
	},
	{
		title: "About",
		icon: <Iconify icon="mdi:about"/>,
		path: "/landing/about",
		children: [
			{
				subheader: "",
				items: [
					{
						title: "About Company",
						path: "/landing/about"
					},
					{
						title: "FAQ",
						path: "/landing/faq"
					},
					{
						title: "Testimonials",
						path: "/landing/testimonials"
					},
				]
			},
		]
	},
	{
		title: "Services",
		icon: <Iconify icon="bi:laptop-fill"/>,
		path: "/landing/services",
		children: [
			{
				subheader : "",
				items: [
					{
						title: "Our Services",
						path: "/landing/services"
					},
					{
						title: "Our Domain",
						path: "/landing/domain"
					},
				]
			},
		]
	},
	// {
	// 	title: "Products",
	// 	icon: <Iconify icon="gg:website"/>,
	// 	path: "/landing/products",
	// 	children: [
	// 		{
	// 			subheader: "",
	// 			items: [
	// 				{
	// 					title: "Our Products",
	// 					path: "/landing/products"
	// 				},
	// 				{
	// 					title: "Work in Progress",
	// 					path: "/landing/wip"
	// 				},
	// 			]
	// 		}
	// 	]
	// },
	{
		title: "Resources",
		icon: <Iconify icon="fluent:news-16-filled"/>,
		path: "/landing/news",
		children: [
			{
				subheader: "",
				items: [
					{
						title: "Our News Articles",
						path: "/landing/news"
					},
					{
						title: "Our Blog Articles",
						path: "/landing/blogs"
					},
				]
			},
		]
	},
	{
		title: "Contact",
		icon: <Iconify icon="material-symbols:contact-support"/>,
		path: "/landing/contact"
	},
]
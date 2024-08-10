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
						title: "Company",
						path: "/landing/about",
						icon: <Iconify icon="mdi:company"/>,
					},
					{
						title: "FAQ",
						path: "/landing/faq",
						icon: <Iconify icon="mdi:frequently-asked-questions"/>,
					},
					{
						title: "Testimonials",
						path: "/landing/testimonials",
						icon: <Iconify icon="ph:user-check-fill"/>,
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
						title: "Services",
						path: "/landing/services",
						icon: <Iconify icon="fluent:bin-recycle-24-filled"/>,
					},
					{
						title: "Domain",
						path: "/landing/domain",
						icon: <Iconify icon="fontisto:recycle"/>,
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
	// {
	// 	title: "Resources",
	// 	icon: <Iconify icon="fluent:news-16-filled"/>,
	// 	path: "/landing/news",
	// 	children: [
	// 		{
	// 			subheader: "",
	// 			items: [
	// 				{
	// 					title: "Our News Articles",
	// 					path: "/landing/news"
	// 				},
	// 				{
	// 					title: "Our Blog Articles",
	// 					path: "/landing/blogs"
	// 				},
	// 			]
	// 		},
	// 	]
	// },
	{
		title: "Contact",
		icon: <Iconify icon="material-symbols:contact-support"/>,
		path: "/landing/contact"
	},
]
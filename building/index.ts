import Cppkies from "cppkies"
Cppkies.onLoad.push(() => {
	Cppkies.buildingLink = "TBA"
	Cppkies.iconLink = "TBA"
	new Cppkies.Building(
		"Think tank",
		"think tank|think tanks|thought about|[X] extra neural pathway|[X] extra neural pathways",
		"Generates cookies by thinking really, really hard about them.",
		[0, 0],
		{
			bg: "TBA",
			pic: "TBA",
			yV: 64,
			xV: 16
		},
		Cppkies.DEFAULT_CPS,
		Cppkies.DEFAULT_ONBUY,
		{ name: "Brain", desc: "Brain", icon: [1, 0] },
		["Brainstorm", "Brain fart"]
	)
})

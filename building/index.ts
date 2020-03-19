import Cppkies from "cppkies"
import { prefix } from "../shared"
Cppkies.onLoad.push(() => {
	Cppkies.buildingLink = `${prefix}/static/buildingBigIcon.png`
	Cppkies.iconLink = `${prefix}/static/buildingIcons.png`
	new Cppkies.Building(
		"Think tank",
		"think tank|think tanks|thought about|[X] extra neural pathway|[X] extra neural pathways",
		"Generates cookies by thinking really, really hard about them.",
		[0, 0],
		{
			bg: `${prefix}/static/buildingBg.png`,
			pic: `${prefix}/static/buildingBrain.png`,
			yV: 64,
			xV: 16
		},
		Cppkies.DEFAULT_CPS,
		Cppkies.DEFAULT_ONBUY,
		{ name: "Brain", desc: "Brain", icon: [1, 0] },
		["Brainstorm", "Brain fart"]
	)
	//TODO: Add upgrades, achievements
})

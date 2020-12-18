import Cppkies from "cppkies"
import { prefix } from "../shared"
Cppkies.onLoad.push(async () => {
	await Cppkies.icons.relinkColumn(
		"https://raw.githubusercontent.com/Cppkies-Team/examples/master/static/buildingIcons.png",
		[
			["1", "2", "3", "4", "5", "6", "7", "8"],
			["9", "10", "11", "12", "13", "fortune", "synergy2", "synergy1"],
			[
				"3d",
				"krumblor",
				"milestone1",
				"milestone2",
				"milestone3",
				"level1",
				"level2",
			],
		]
	)
	Cppkies.buildingLink = `${prefix}/buildingBigIcon.png`
	Cppkies.iconLink = `${prefix}/buildingIcons.png`
	new Cppkies.Building(
		"Think tank",
		"think tank|think tanks|thought about|[X] extra neural pathway|[X] extra neural pathways",
		"Generates cookies by thinking really, really hard about them.",
		[0, 0],
		[0, 0],
		{
			bg: `${prefix}/buildingBg.png`,
			pic: `${prefix}/buildingBrain.png`,
			yV: 64,
			xV: 16,
		},
		Cppkies.DEFAULT_CPS,
		Cppkies.DEFAULT_ONBUY,
		{ name: "Brain", desc: "Bruh", icon: [0, 0] },
		["Brainstorm", "Brain fart"]
	)
	new Cppkies.GrandmaSynergy(
		"Elder brains",
		"A skinless grandma to envision more cookies.",
		"Think tank",
		`${prefix}/buildingGrandma`
	)
	const upgrades = [
		{
			name: "Wrinklier brains",
			desc:
				"As everyone knows, the wrinklier something it, the better it is at cookie production",
		},
		{
			name: "Memory wipe",
			desc:
				"A highly efficient method of removing memories of past lives, leaving more room in there for cookies!",
		},
		{
			name: "Grain matter",
			desc:
				"This simple pun becomes a lot more horrifying when you consider the implications of planting seeds in the little brain folds.",
		},
		{
			name: "Confidence",
			desc:
				"Your scientists have managed to completely replace a person’s nervous system with a confident one instead!",
		},
		{
			name: "Psychedelic brine",
			desc:
				"Introducing psychedelic substances to the tanks often results in terrifying yet delicious outcomes.",
		},
		{
			name: "School funding",
			desc:
				"Pumping money into the education system seems to result in more efficient brains by the time you get around to borrowing them. Who knew!",
		},
		{
			name: "Occhipital lobe",
			desc:
				"A whole new lobe made out of leftover grey matter, flour, and chocolate chips.",
		},
		{
			name: "Brains that won't die",
			desc:
				"This handy-dandy new advancement lets you handwave the certain pesky inconveniences of physiological upkeep.",
		},
		{ name: "Philoophical discourse", desc: "I bake, therefore I am." },
		{
			name: "Subconsciousness",
			desc:
				"Turns out they’ve been fully conscious all this time! ...whoops...",
		},
		{
			name: "The grand simulation",
			desc:
				"A giant simulated multiverse inside of which your think tanks believe themselves to live, work, and bake.",
		},
	]
	for (const i in upgrades)
		new Cppkies.TieredUpgrade(
			upgrades[i].name,
			upgrades[i].desc,
			"Think tank",
			parseInt(i) + 1
		)
	new Cppkies.SynergyUpgrade(
		"Boltzmann generators",
		"With a few simple modifications, Chancemakers can go from creating humble cookies, to mighty brains!",
		"Think tank",
		"Chancemaker",
		"synergy1"
	)
	new Cppkies.SynergyUpgrade(
		"Neural network",
		"A marvellous form of machine learning, in which an actual human brain is slapped on a keyboard until something interesting happens.",
		"Think tank",
		"Javascript console",
		"synergy2"
	)
	const achievements = [
		{
			name: "Mind over matter",
		},
		{
			name: "Right brain? Wrong brain.",
		},
		{
			name: "Ethics are a scam",
		},
		{
			name: "Brainiac!",
			desc:
				"She’s a brainiac, brainiac on the floor! And she’s thinking like she’s never thunk before.",
		},
		{ name: "Hyperfocus" },
		{ name: "Keeping In Mind" },
		{ name: "Sugar Lobes" },
		{ name: "I am Very Smart", desc: "I have a 100% IQ, thank you very much" },
		{ name: "The Deepest Recesses" },
		{ name: "Outside In" },
		{ name: "Braindeath" },
	]
	for (const i in achievements)
		new Cppkies.TieredAchievement(
			achievements[i].name,
			achievements[i].desc,
			"Think tank",
			parseInt(i) + 1
		)
	new Cppkies.ProductionAchievement("Passing Thought", "Think tank", 1)
	new Cppkies.ProductionAchievement("Transhumanism", "Think tank", 2)
	new Cppkies.ProductionAchievement(
		"A World of Pure Imagination",
		"Think tank",
		3
	)
	new Cppkies.Level10Achievement("It’s Big Brain Time", "Think tank")
})

import Cppkies from "cppkies"
import { prefix } from "../shared"

Cppkies.onLoad.push(() => {
	Cppkies.iconLink = `${prefix}/tierIcons.png`

	const moddedTier = new Cppkies.Tier("Saffronyx", [0, 0], "#ef4b4b").keyName

	new Cppkies.CursorUpgrade("Decillion fingers", "TODO", moddedTier, 50)

	for (const building of Game.ObjectsById) {
		if (building.name === "Idleverse") continue

		new Cppkies.TieredAchievement(
			`Saffronyx ${building.single} achievement`,
			null,
			building,
			moddedTier
		)
		if (building.name === "Cursor") continue
		new Cppkies.TieredUpgrade(
			`Saffronyx ${building.single} upgrade`,
			"TODO",
			building,
			moddedTier
		)
	}

	// Non-building upgrades

	new Cppkies.KittenUpgrade("Saffronyx kitten upgrade", "TODO", moddedTier)

	new Cppkies.MouseUpgrade("Saffronyx mouse upgrade", "TODO", moddedTier)

	new Cppkies.MouseAchievement(
		"Saffronyx mouse achievement",
		moddedTier,
		"TODO"
	)
})

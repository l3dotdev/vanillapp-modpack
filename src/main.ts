import fs from "node:fs";
import path from "node:path";
import { modDataConfig } from "./moddata.config";

function isServerMod(serverSide: string) {
	return ["required", "optional"].includes(serverSide);
}

function main() {
	const modpackDir = process.cwd();

	const instanceJsonPath = path.join(modpackDir, "instance.json");
	const instanceJson = JSON.parse(fs.readFileSync(instanceJsonPath, "utf8"));

	const mods = instanceJson.launcher.mods;

	const serverMods = [];
	const clientOnlyMods = [];

	for (const mod of mods) {
		if (mod.type !== "mods") {
			continue;
		}

		let isServerSide = null;

		if ("modrinthProject" in mod && "server_side" in mod.modrinthProject) {
			const serverSide = mod.modrinthProject.server_side;
			isServerSide = isServerMod(serverSide);
		} else {
			const overrideData =
				modDataConfig.overrides.find(
					(data) => data.match.curseForgeProjectId === mod.curseForgeProjectId
				) ?? modDataConfig.overrides.find((data) => data.match.name === mod.name);
			if (overrideData) {
				isServerSide = isServerMod(overrideData.serverSide);
			}
		}

		if (isServerSide) {
			serverMods.push(mod);
		} else {
			clientOnlyMods.push(mod);
		}

		if (isServerSide === null) {
			throw new Error("No metadata for mod: " + mod.name);
		}
	}

	clientOnlyMods.sort((a, b) => a.file.localeCompare(b.file));
	for (const mod of clientOnlyMods) {
		console.log(mod.file);
	}
}

main();

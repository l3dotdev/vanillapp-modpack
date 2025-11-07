type Config = {
	overrides: {
		match: {
			name: string;
			curseForgeProjectId: number;
		};
		serverSide: "required" | "optional" | "unsupported";
	}[];
	configFileMap: Record<
		string,
		{
			common?: string | string[];
			client?: string | string[];
			server?: string | string[];
		}
	>;
};

export const modDataConfig: Config = {
	overrides: [
		{
			match: {
				name: "Sophisticated Storage",
				curseForgeProjectId: 619320
			},
			serverSide: "required"
		},
		{
			match: {
				name: "Configured",
				curseForgeProjectId: 457570
			},
			serverSide: "unsupported"
		},
		{
			match: {
				name: "Pretty In Pink",
				curseForgeProjectId: 1313661
			},
			serverSide: "required"
		}
	],
	configFileMap: {
		Accessories: {
			common: "accessories.json5"
		},
		"Accessories Compatibility Layer": {
			common: "accessories_compat.json5"
		},
		Amendments: {
			common: "amendments-common.toml",
			client: "amendments-client.toml"
		},
		AppleSkin: {
			client: "appleskin-client.toml"
		},
		"Applied Energistics 2": {
			common: "ae2-common.toml",
			client: "ae2-client.toml"
		},
		"Architectury API": {},
		AttributeFix: {
			common: "attributefix/*"
		},
		Blueprint: {
			common: "blueprint-common.toml",
			client: "blueprint-client.toml"
		},
		"Brewin' And Chewin'": {
			common: "brewinandchewin-common.toml",
			client: "brewinandchewin-client.toml"
		},
		"Carry On": {
			common: "carryon-common.toml",
			client: "carryon-client.toml"
		},
		Chipped: {},
		"Chipped Express": {},
		"Chisel Reborn": {},
		"Cloth Config API": {},
		Comforts: {
			common: "comforts-common.toml",
			server: "comforts-server.toml"
		},
		Create: {
			common: "create-common.toml",
			client: "create-client.toml",
			server: "create-server.toml"
		},
		"Create Crafts & Additions": {
			common: "createaddition-common.toml"
		},
		"Create Deco": {},
		"Create Encased": {
			common: "createcasing-common.toml"
		}
	}
};

import StyleDictionary from "style-dictionary-utils";
import { makeSdTailwindConfig } from "sd-tailwindcss-transformer";

const config = {
  source: ["src/tokens/**/*.json"],
	makeSdTailwindConfig: { 
		type: 'all' 
	},
  platforms: {
    css: {
      buildPath: "dist/build/css/",
      // transformGroup: ["css"],
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "dimension/pixelToRem",
        "color/rgba",
      ],
      files: [
        {
          format: "css/variables",
          destination: "variables.css",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};

const sd = StyleDictionary.extend(config);
sd.buildAllPlatforms();
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import {dts} from 'rollup-plugin-dts';
import url from '@rollup/plugin-url';


export default {
  input: 'src/index.ts',
  output: [
		{
    file: 'dist/index.js',
    format: 'esm'
  },
	    {
      file: 'dist/index.d.ts',
      format: 'es',
    },
],
  plugins: [
    typescript(),
    copy({
      targets: [
        { src: 'src/assets/*', dest: 'dist' }
      ]
    }),
		 url({
      include: ['**/*.svg', '**/*.png'], // Specify the file types to handle
      limit: Infinity, // Encode all files as data URIs (remove for URLs)
    }),
		dts(),
  ]
};
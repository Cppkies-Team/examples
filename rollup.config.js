import babel from "rollup-plugin-babel"
import analyze from "rollup-plugin-analyzer"
import minify from "rollup-plugin-babel-minify"
import typescript from "rollup-plugin-typescript2"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
//import banner from "rollup-plugin-banner"
const folders = ["ThinkTank"]
const configs = []
folders.forEach(val => {
	configs.push({
		input: `./${val}/index.ts`,
		output: {
			file: `./dist/${val}.js`,
			format: "umd"
		},
		plugins: [
			typescript({
				tsconfig: "./tsconfig.json"
			}),
			resolve(),
			babel({
				exclude: "node_modules/**"
			}),
			analyze({
				summaryOnly: true
			}),
			minify({
				comments: false
			}),
			commonjs()
		]
	})
})
export default configs

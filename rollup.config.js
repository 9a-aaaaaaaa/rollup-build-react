import { readFileSync } from 'node:fs';
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import eslint from "@rollup/plugin-eslint";
import postcss from "rollup-plugin-postcss";
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
const packages = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));
export const file = (type) => `dist/index.${type}.js`;


const overrides = {
  compilerOptions: {
    noUnusedParameters: true,
    noUnusedLocals: true,
    strictNullChecks: true,
    moduleResolution: "node",
    declaration: true,//抽离声明代码 *.d.js
    allowSyntheticDefaultImports: true,
  },
  useTsconfigDeclarationDir: true,
};
export default {
  input: "src/index.ts",
  output: [
    {
      name: packages.name,
      file: file("umd"),
      format: "umd",
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
    {
      file: file("esm"),
      format: "es",
      sourcemap: "inline",
      globals: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    json(),
     // 验证导入的文件
    eslint({
        throwOnError: true, // lint 结果有错误将会抛出异常
        throwOnWarning: true,
        fix: true,
        include: ['src/**/*.ts'],
        exclude: ['node_modules/**', 'lib/**', '*.js'],
    }),
     // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
    commonjs(),
    postcss({
      minimize: true
    }), // 处理css、less 文件
    typescript({
      tsconfigOverride: overrides,
    }),
    nodeResolve({
      extensions: [".js", ".jsx", ".ts", ".tsx", ".less"], //允许我们加载第三方模块
    }),
    
    // terser(),
  ],
};

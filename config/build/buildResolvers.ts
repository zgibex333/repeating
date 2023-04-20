import type webpack from "webpack";
import { type BuildOptions } from "./types/config";

export function buildResolvers(
  buildOptions: BuildOptions
): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [buildOptions.paths.src, "node_modules"],
    alias: {},
    mainFiles: ["index"],
  };
}

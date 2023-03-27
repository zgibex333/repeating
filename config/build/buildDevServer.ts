import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export default function buildDevServer(
  buildOptions: BuildOptions
): DevServerConfiguration {
  return {
    open: true,
    port: buildOptions.port,
    historyApiFallback: true,
  };
}

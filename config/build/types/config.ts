export type BuildMode = "production" | "development";
export type Port = number | string;

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
};

export type BuildEnv = {
  mode: BuildMode;
  port: Port;
};

export type BuildOptions = {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: Port;
};

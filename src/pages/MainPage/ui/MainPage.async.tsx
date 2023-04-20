import { lazy } from "react";

const MarkdownPreview = lazy(async () => await import("./MainPage"));

export default MarkdownPreview;

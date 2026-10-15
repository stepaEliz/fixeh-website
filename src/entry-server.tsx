import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
export { getPageSEO, getPageSchema, SITE_URL } from "./data/seo";
export { WOOD_SLAT_PATH } from "./data/woodSlat";

export function render(pathname: string) {
  return renderToString(<MemoryRouter initialEntries={[pathname]}><App /></MemoryRouter>);
}

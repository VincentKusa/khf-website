import { header } from './header.js';
import { footer } from './footer.js';

export function layout(content, activePath) {
  return `${header(activePath)}<main>${content}</main>${footer()}`;
}
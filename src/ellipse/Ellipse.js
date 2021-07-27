import { SVG_NAMESPACE } from '@recogito/annotorious/src/util/SVG';

/** Shorthand to apply the given (x, y, rx, ry) to the SVG shape **/
const setXYR = (shape, x, y, rx, ry) => {  
  shape.setAttribute('cx', x);
  shape.setAttribute('cy', y);
  shape.setAttribute('rx', rx);
  shape.setAttribute('ry', ry);
}

/** 
 * Draws an SVG ellipse, either from an annotation, or an
 * (cx, cy, rx, ry)-tuple.
 */
export const drawEllipse = (cx, cy, rx, ry) => {
  const g = document.createElementNS(SVG_NAMESPACE, 'g');
  const outerEllipse  = document.createElementNS(SVG_NAMESPACE, 'ellipse');

  outerEllipse.setAttribute('class', 'a9s-outer');
  setXYR(outerEllipse, cx, cy, rx, ry);

  g.appendChild(outerEllipse);

  return g;
}

export const setEllipseSize = (g, cx, cy, rx, ry) => {
  const outerEllipse = g.querySelectorAll('.a9s-outer')[0];

  setXYR(outerEllipse, cx, cy, rx, ry);
}

export const getEllipseSize = g => {
  const outerEllipse = g.querySelectorAll('.a9s-outer')[0];

  const cx = parseFloat(outerEllipse.getAttribute('cx'));
  const cy = parseFloat(outerEllipse.getAttribute('cy'));
  const rx = parseFloat(outerEllipse.getAttribute('rx'));
  const ry = parseFloat(outerEllipse.getAttribute('ry'));
  
  return { cx, cy, rx, ry };
}
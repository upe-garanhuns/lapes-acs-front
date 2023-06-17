export const isDefaultPages = () => {
  if (
    window.location.pathname === '/' ||
    window.location.pathname === '/registrar' ||
    window.location.pathname === '/sobre'
  ) {
    return true;
  }
};

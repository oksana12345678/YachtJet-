export const classListHelper = ({ el, cls, act }) => {
  if (!el || !cls || !act) return;
  el.classList[act](cls);
};

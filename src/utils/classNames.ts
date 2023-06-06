const classNames = (classes: { class: string; hasClass: boolean }[]) => {
  const result = classes.map((item) => (item.hasClass ? item.class : ''));

  const names = result.join(' ').trim();
  return names;
};

export { classNames };

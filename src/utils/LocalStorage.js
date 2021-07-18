export const getItem = (name) => {
  const result = localStorage.getItem(name);
  return JSON.parse(result);
};

export const setItem = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

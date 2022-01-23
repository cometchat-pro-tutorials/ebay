export const save = ({ key, payload }) => {
  localStorage.setItem(key, payload);
};

export const get = key => localStorage.getItem(key);
export const loadState = (key, defaultValue) => {
  try {
    const serializedState = sessionStorage.getItem(key);

    if (serializedState === null) {
      return defaultValue;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return defaultValue;
  }
};

export const saveState = (key, obj) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {}
};
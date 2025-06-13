export const TASKSKEYNAME = 'tasks';
export const THEMEKEYNAME = 'themeDark';

export function setLocalStorageItem(KEYNAME, value) {
  localStorage.setItem(KEYNAME, JSON.stringify(value));
}

export function getLocalStorageItem(KEYNAME) {
  return JSON.parse(localStorage.getItem(KEYNAME));
}
export function removeLocalStorageItem(KEYNAME) {
  localStorage.removeItem(KEYNAME);
}

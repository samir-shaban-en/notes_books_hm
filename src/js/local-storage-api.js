export const KEYNAME = 'key';
export function setLocalStorageItem(tasks) {
  localStorage.setItem(KEYNAME, JSON.stringify(tasks));
}

export function getLocalStorageItem() {
  return JSON.parse(localStorage.getItem(KEYNAME));
}

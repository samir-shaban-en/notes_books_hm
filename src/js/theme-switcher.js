import {
  setLocalStorageItem,
  removeLocalStorageItem,
  getLocalStorageItem,
  THEMEKEYNAME,
} from './local-storage-api';

export function onThemeBtnClick() {
  document.body.classList.toggle('theme-dark');

  if (document.body.classList.contains('theme-dark')) {
    setLocalStorageItem(THEMEKEYNAME, 'theme-dark');
  } else {
    removeLocalStorageItem(THEMEKEYNAME);
  }
}

if (getLocalStorageItem(THEMEKEYNAME)) {
  document.body.classList.add(getLocalStorageItem(THEMEKEYNAME));
} else {
  document.body.classList.remove(getLocalStorageItem(THEMEKEYNAME));
}

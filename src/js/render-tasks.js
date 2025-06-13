import {
  getLocalStorageItem,
  setLocalStorageItem,
  TASKSKEYNAME,
} from './local-storage-api';

import renderMarkup from './markup-tasks';

let task = [];

export function formSubmitHandler(e) {
  e.preventDefault();

  const title = e.currentTarget.taskName.value;
  const description = e.currentTarget.taskDescription.value;
  const id = Math.floor(Math.random() * 100);

  if (title === '' || description === '') {
    return;
  }

  task.push({ title, description, id });

  setLocalStorageItem(TASKSKEYNAME, task);

  renderMarkup();

  e.currentTarget.reset();
}

export function onBtnDeleteClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const currentNote = e.target.closest('.task-list-item');

  currentNote.remove();

  const filtered = getLocalStorageItem(TASKSKEYNAME).filter(
    item => item.id !== +currentNote.dataset.id
  );

  setLocalStorageItem(TASKSKEYNAME, filtered);
  task = filtered;
}

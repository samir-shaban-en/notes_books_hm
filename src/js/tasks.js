import ref from './refs';
import { renderMarkup } from './render-tasks';
import {
  setLocalStorageItem,
  getLocalStorageItem,
  KEYNAME,
} from './local-storage-api';

ref.form.addEventListener('submit', formSubmitHandler);

let task = [];

function formSubmitHandler(e) {
  e.preventDefault();

  const title = e.currentTarget.taskName.value;
  const description = e.currentTarget.taskDescription.value;
  const id = Math.floor(Math.random() * 100);

  if (title === '' || description === '') {
    return;
  }

  task.push({ title, description, id });

  setLocalStorageItem(task);

  renderMarkup();

  e.currentTarget.reset();
}

ref.taskList.addEventListener('click', onBtnDeleteClick);

function onBtnDeleteClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const currentNote = e.target.closest('.task-list-item');
  console.log(currentNote.dataset.id);

  currentNote.remove();

  const filtered = getLocalStorageItem(KEYNAME).filter(
    item => item.id !== +currentNote.dataset.id
  );
  setLocalStorageItem(filtered);
  task = filtered;
}

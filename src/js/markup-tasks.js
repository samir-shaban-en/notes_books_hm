import { getLocalStorageItem, TASKSKEYNAME } from './local-storage-api';
import refs from './refs';

function createMarkup() {
  const tasksArray = getLocalStorageItem(TASKSKEYNAME);
  if (!tasksArray) {
    return;
  }
  return tasksArray
    .map(
      ({ title, description, id }) => `<li data-id = '${id}'
      class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${title}</h3>
      <p>${description}</p>
      
  </li>`
    )
    .join('');
}

export default function renderMarkup() {
  if (!createMarkup()) {
    return;
  }
  refs.taskList.innerHTML = '';
  refs.taskList.insertAdjacentHTML('beforeend', createMarkup());
}

renderMarkup();

import { getLocalStorageItem } from './local-storage-api';

export function createMrkup() {
  const tasksArray = getLocalStorageItem();
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

import ref from './refs';
import { createMrkup } from './markup-tasks';

export function renderMarkup() {
  if (!createMrkup()) {
    return;
  }
  ref.taskList.innerHTML = '';
  ref.taskList.insertAdjacentHTML('beforeend', createMrkup());
}

renderMarkup();

import refs from './js/refs';
import { formSubmitHandler, onBtnDeleteClick } from './js/render-tasks';
import { onThemeBtnClick } from './js/theme-switcher';

refs.form.addEventListener('submit', formSubmitHandler);
refs.taskList.addEventListener('click', onBtnDeleteClick);
refs.themeBtn.addEventListener('click', onThemeBtnClick);

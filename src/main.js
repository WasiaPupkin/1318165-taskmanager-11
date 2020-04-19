import {createBoardTemplate} from './components/board';
import {createFilterTemplate} from './components/filter';
import {createLoadMoreButtonTemplate} from './components/load-more-button';
import {createTaskEditTemplate} from './components/task-edit';
import {createTaskTemplate} from './components/task';
import {createSiteMenuTemplate} from './components/site-menu';
import {createSortingTemplate} from './components/sorting';
import {generateFilters} from './mock/filter';
import {generateTasks} from './mock/task';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const tasks = generateTasks(TASK_COUNT);
const filters = generateFilters(tasks);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(filters), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(boardElement, createSortingTemplate(), `afterbegin`);
render(taskListElement, createTaskEditTemplate(tasks[0]), `beforeend`);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

render(taskListElement, createTaskTemplate(tasks.slice(1, showingTasksCount)), `beforeend`);
render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);

const loadMoreButton = boardElement.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;
  render(taskListElement, createTaskTemplate(tasks.slice(prevTasksCount, showingTasksCount)), `beforeend`);

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});

const generateFilters = (tasks) => {
  const FILTER_NAMES = [
    `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
  ];

  let overdueTasksCount = 0;
  let todayTasksCount = 0;
  let favoritesTasksCount = 0;
  let repeatingTasksCount = 0;
  let archiveTasksCount = 0; let notArchivedTaskCount = 0;


  tasks.forEach((currentTask) => {

    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);

    const dueDateDate = currentTask.dueDate;
    if (dueDateDate) {
      dueDateDate.setHours(0, 0, 0, 0);
    }

    const isExpired = currentTask.dueDate instanceof Date && (currentTask.dueDate.getTime() < Date.now());
    const isTodayTask = currentTask.dueDate instanceof Date && (todayDate.getTime() === dueDateDate.getTime());
    const isRepeatingTask = Object.values(currentTask.repeatingDays).some(Boolean);

    if (isRepeatingTask) {
      ++repeatingTasksCount;
    }

    if (isTodayTask) {
      ++todayTasksCount;
    }

    if (isExpired) {
      ++overdueTasksCount;
    }

    if (currentTask.isFavorite) {
      ++favoritesTasksCount;
    }

    if (currentTask.isArchive) {
      ++archiveTasksCount;
    } else {
      ++notArchivedTaskCount;
    }

  });

  const getFilterCount = (filterName) => {
    switch (filterName) {
      case `all`: return notArchivedTaskCount;
      case `overdue`: return overdueTasksCount;
      case `today`: return todayTasksCount;
      case `favorites`: return favoritesTasksCount;
      case `repeating`: return repeatingTasksCount;
      case `archive`: return archiveTasksCount;
    }
    return null;
  };


  return FILTER_NAMES.map((it) => {
    return {
      title: it,
      count: getFilterCount(it),
    };
  });
};

export {generateFilters};

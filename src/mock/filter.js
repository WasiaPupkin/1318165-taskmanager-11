const generateFilters = (tasks) => {
  const FILTER_NAMES = [
    `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
  ];

  const getFilterCount = (filterName) => {
    switch (filterName) {
      case `all`: return tasks.filter((task)=>{
        return !task.isArchive;
      }).length;
      case `overdue`: return tasks.filter((task)=>{
        return task.dueDate instanceof Date && (task.dueDate.getTime() < Date.now());
      }).length;
      case `today`: return tasks.filter((task)=>{
        const todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);

        const dueDateDate = task.dueDate;
        if (dueDateDate) {
          dueDateDate.setHours(0, 0, 0, 0);
        }

        return task.dueDate instanceof Date && (todayDate.getTime() === dueDateDate.getTime());
      }).length;
      case `favorites`: return tasks.filter((task)=>{
        return task.isFavorite;
      }).length;
      case `repeating`: return tasks.filter((task)=>{
        return Object.values(task.repeatingDays).some(Boolean);
      }).length;
      case `archive`: return tasks.filter((task)=>{
        return task.isArchive;
      }).length;
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

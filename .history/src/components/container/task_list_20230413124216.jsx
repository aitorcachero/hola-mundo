import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

const TaskListComponent = () => {
  const defaultTask = new Task(
    'Example',
    'Default description',
    false,
    LEVELS.NORMAL
  );

  return (
    <div>
      <div>Your Task:</div>
      {/* TODO: Aplicar un For/Map para renderizar una lista */}
    </div>
  );
};

TaskList.propTypes = {};

export default TaskListComponent;

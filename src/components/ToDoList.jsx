import { useState } from 'react';
import Task from './Task';
import Summary from './Summary';

const initialTasks = [
  {
    _id: '1a',
    name: 'Task1',
    description: 'Do something important',
    isDone: false,
  },
  {
    _id: '2b',
    name: 'Task2',
    description: 'Do something important',
    isDone: false,
  },
  {
    _id: '3c',
    name: 'Task3',
    description: 'Do something important',
    isDone: false,
  },
];

const ToDoList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskCompleted, setTaskCompleted] = useState(0);

  const toggleTask = (id) => {
    let tasksCopy = [...tasks];

    tasksCopy.forEach((task) => {
      if (task._id === id) {
        task.isDone = !task.isDone;
        task.isDone
          ? setTaskCompleted((prevCount) => prevCount + 1)
          : setTaskCompleted((prevCount) => prevCount - 1);
      }
    });

    setTasks(tasksCopy);
  };

  return (
    <div>
      <Summary taskCompleted={taskCompleted} />

      <div className="todo-container">
        {tasks.map((task) => (
          <Task key={task._id} task={task} toggleTask={toggleTask} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;

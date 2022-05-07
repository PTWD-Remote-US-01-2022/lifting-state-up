import React from 'react';

const Summary = ({taskCompleted}) => {
  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className="tasks-completed">{taskCompleted}</p>
    </div>
  );
};

export default Summary;

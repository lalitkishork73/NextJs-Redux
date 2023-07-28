import React from 'react';
import Todos from '../compenetns/Todo';
import Lists from '../compenetns/List';


const Todo = () => {
  return (
    <>
      <div className="h-full">
        <Todos />
        <Lists />
      </div>
    </>
  );
};

export default Todo;

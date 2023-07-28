'use client';

import {
  useGetTodoQuery,
  useDeleteTodoQuery
} from '@/redux/services/api';
import { useState } from 'react';

const List = () => {
  // const { isLoading, isFetching, data, error } =
  //   useGetUsersQuery(null);

  const response = useGetTodoQuery();

  return (
    <div className="text-black text-center">
      <ul>
        {/* {data?.map((user) => (
          <div
            key={user.id}
            className="border-1 border-[#ccc] text-center"
          >
            <h3>{user.name}</h3>
          </div>
        ))} */}
      </ul>
    </div>
  );
};

export default List;

'use client';
import React from 'react';



const List = () => {
  // const { isLoading, isFetching, data, error } =
  //   useGetUsersQuery(null);

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

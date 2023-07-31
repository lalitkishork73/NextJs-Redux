'use client';

import {
  useGetTodoQuery,
  useDeleteTodoMutation
} from '@/redux/services/api';
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
  useEffect
} from 'react';

export interface TodoTyp {
  _id: string;
  todo:
    | string
    | number
    | boolean
    | ReactElement<
        any,
        string | JSXElementConstructor<any> // const { isLoading, isFetching, data, error } =
        //   useGetUsersQuery(null);
      >
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
}

const List = () => {
  // const { isLoading, isFetching, data, error } =
  //   useGetUsersQuery(null);

  
  const { data } = useGetTodoQuery();

  const [removeTodo, result] = useDeleteTodoMutation();
  const remove = (id: string) => {
    removeTodo(id);
  };

  useEffect(() => {}, [data]);

  console.log(data);
  return (
    <div className="text-black text-center">
      <ul>
        {data?.data.map((user: TodoTyp) => (
          <li
            key={user._id}
            className="border-1 border-[#ccc] text-center"
          >
            <div
              className="hover:text-red-500"
              onClick={() => {
                remove(user._id);
              }}
            >
              {user.todo}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

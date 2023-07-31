export interface FormValues {
  email: string;
  password: string;
}

export interface TodoType {
  todo: string;
}

export interface TodoPostRes {
  status: boolean; // Corrected to boolean
  data: {
    todo: string;
    todoBy: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export interface Todos {
  _id: string;
  todo: string;
  todoBy: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TodoGetRes {
  status: boolean;
  data: Todos[];
}

export interface TodoRemRes {
  status: boolean; // Corrected to boolean
  data: {
    _id: string;
    todo: string;
    todoBy: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export interface Tokens {
  token: string;
}

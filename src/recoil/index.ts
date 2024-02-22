import {atom} from 'recoil';

export interface TodoType {
  id: number;
  contents: string;
  isCompleted: boolean;
  date: string;
}
export interface StatusType {
  index: number;
  status: boolean;
}

export const todoListState = atom<TodoType[]>({
  key: 'todoListState',
  default: [],
});

export const newTaskState = atom({
  key: 'newTaskState',
  default: '',
});

import {atom, selector} from 'recoil';

export interface TodoType {
  id: number;
  contents: string;
  isCompleted: boolean;
}
export interface StatusType {
  index: number;
  status: boolean;
}

export const todoListState = atom<TodoType[]>({
  key: 'todoListState',
  default: [{id: Date.now(), contents: 'sample', isCompleted: false}],
});

export const newTaskState = atom({
  key: 'newTaskState',
  default: '',
});

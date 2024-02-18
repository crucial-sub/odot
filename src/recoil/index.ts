import {atom} from 'recoil';

export interface TodoType {
  contents: string;
}

export const todoListState = atom<TodoType[]>({
  key: 'todoListState',
  default: [{contents: 'sample'}],
});

export const newTaskState = atom({
  key: 'newTaskState',
  default: '',
});

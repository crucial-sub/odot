import {atom, selector} from 'recoil';

export interface TodoType {
  contents: string;
}

export const todoListState = atom<TodoType[]>({
  key: 'todoListState',
  default: [{contents: 'sample'}],
});

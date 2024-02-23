import {atom, selector} from 'recoil';
import {SAMPLETODOS} from '../components/data/sampleTodos';

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

export const todosSelector = selector<TodoType[][]>({
  key: 'TodosSelector',
  get: ({get}) => {
    const defaultTodos = SAMPLETODOS;
    const todayTodos = get(todoListState);
    const result = todayTodos.length
      ? [[...todayTodos], ...defaultTodos]
      : [...defaultTodos];
    return result;
  },
});

export const newTaskState = atom({
  key: 'newTaskState',
  default: '',
});

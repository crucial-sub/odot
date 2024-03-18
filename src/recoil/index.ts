import {atom, selector} from 'recoil';

export interface TodoType {
  id: number;
  contents: string;
  isCompleted: boolean;
  date: string;
}

export interface MonthTodosType {
  [date: string]: TodoType[];
}

export interface AllTodosType {
  [yearMonth: string]: MonthTodosType;
}

export const todoListState = atom<TodoType[]>({
  key: 'todoListState',
  default: [],
});

export const todosSelector = selector<TodoType[][]>({
  key: 'TodosSelector',
  get: ({get}) => {
    const defaultTodos: any = [];
    const todayTodos = get(todoListState);
    const result = todayTodos.length
      ? [[...todayTodos], ...defaultTodos]
      : [...defaultTodos];
    return result;
  },
});

export const allTodosState = atom<AllTodosType>({
  key: 'allTodosState',
  default: {},
});

export const allTodosSelector = selector<AllTodosType>({
  key: 'allTodosSelector',
  get: async ({get}) => {
    const defaultAllTodos = get(allTodosState);
    const todayTodos = get(todoListState);
    if (todayTodos.length) {
      const todayYearMonth = todayTodos[0].date.slice(0, 7);
      const todayDate = todayTodos[0].date.slice(8, 10);
      return {
        ...defaultAllTodos,
        ...{
          [todayYearMonth]: {
            ...defaultAllTodos[todayYearMonth],
            [todayDate]: [...todayTodos],
          },
        },
      };
    } else return {...defaultAllTodos};
  },
});

export const newTaskState = atom({
  key: 'newTaskState',
  default: '',
});

import {ReactElement} from 'react';
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
  key: 'todo-list-state',
  default: [],
});

export const todosSelector = selector<TodoType[][]>({
  key: 'todos-selector',
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
  key: 'all-todos-state',
  default: {},
});

export const allTodosSelector = selector<AllTodosType>({
  key: 'all-todos-selector',
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
  key: 'new-task-state',
  default: '',
});

export const toastVisibleState = atom({
  key: 'toast-visible-state',
  default: false,
});

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessageType {
  type: ToastType;
  message: string;
}

export const toastState = atom<ToastMessageType>({
  key: 'toast-state',
  default: {
    type: '' as ToastType,
    message: '',
  },
});

//BottomSheet State
export interface BottomSheetType {
  isGlobalVisible: boolean;
  content: ReactElement | null;
}

export const bottomSheetState = atom<BottomSheetType>({
  key: 'bottom-sheet-state',
  default: {isGlobalVisible: false, content: null},
});

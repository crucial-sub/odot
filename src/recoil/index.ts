import {ReactElement} from 'react';
import {atom} from 'recoil';

// Todo State
export interface TodoType {
  id: number;
  contents: string;
  isCompleted: boolean;
  date: string;
}

export interface MonthTodoListType {
  [date: string]: TodoType[];
}

export interface AllTodosType {
  [monthKey: string]: MonthTodoListType;
}

export const todoListState = atom<TodoType[]>({
  key: 'todo-list-state',
  default: [],
});

export const monthTodoListState = atom<MonthTodoListType>({
  key: 'month-todo-list-state',
  default: {},
});

export const newTaskState = atom({
  key: 'new-task-state',
  default: '',
});

export const selectedDate = atom({
  key: 'selected-date',
  default: '',
});

// ToastMessage State
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

// BottomSheet State
export interface BottomSheetType {
  isGlobalVisible: boolean;
  content: ReactElement | null;
}

export const bottomSheetState = atom<BottomSheetType>({
  key: 'bottom-sheet-state',
  default: {isGlobalVisible: false, content: null},
});

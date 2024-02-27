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

const asyncStorageSample: AllTodosType = {
  '2024/02': {
    '24': [
      {
        id: 0.8435345,
        contents: '',
        isCompleted: false,
        date: '2024/02/24',
      },
      {
        id: 0.346435,
        contents: '',
        isCompleted: true,
        date: '2024/02/24',
      },
    ],
    '25': [
      {
        id: 0.46456546,
        contents: '',
        isCompleted: true,
        date: '2024/02/25',
      },
    ],
  },
};

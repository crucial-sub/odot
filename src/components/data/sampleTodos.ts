import {TodoType} from '../../recoil';
import {getDate} from '../../utils/getDate';

export const SAMPLETODOS = Array.from({length: 50}, (_, index) => {
  const randomLength = Math.floor(Math.random() * 4 + 1);

  const baseDate = new Date();
  const newDate = new Date(baseDate.setDate(baseDate.getDate() + index));
  const date = getDate(newDate);

  const sampleTodoList = [];
  for (let i = 0; i < randomLength; i++) {
    const randomNum = Math.random();
    const sampleTodo: TodoType = {
      id: randomNum,
      contents: '',
      isCompleted: randomNum > 0.5 ? false : true,
      date: date,
    };
    sampleTodoList.push(sampleTodo);
  }

  return sampleTodoList;
}).reverse();

// SAMPLETODOS 예시
const sampleTodos = [
  [
    {
      id: 0.41525235,
      contents: '',
      isCompleted: true,
      date: '2024/02/23',
    },
    {
      id: 0.7235435436,
      contents: '',
      isCompleted: false,
      date: '2024/02/23',
    },
  ],
  [
    {
      id: 0.3234234,
      contents: '',
      isCompleted: true,
      date: '2024/02/24',
    },
    {
      id: 0.8435345,
      contents: '',
      isCompleted: false,
      date: '2024/02/24',
    },
  ],
];

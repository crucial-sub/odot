import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import {getStorageData} from '../../lib/storage-helper';
import {MonthTodoListType, monthTodoListState} from '../../recoil';
import {getTransformedDate} from '../../utils/getTransformedDate';

const useInitMonthTodoList = () => {
  const setMonthTodoList = useSetRecoilState(monthTodoListState);

  useEffect(() => {
    const loadCurrentMonthTodos = async () => {
      try {
        const currentDate = getTransformedDate(new Date());
        const currentMonthKey: string = currentDate.slice(0, 7);
        const storedMonthTodoList: MonthTodoListType = await getStorageData(
          'todos-' + currentMonthKey,
        );
        if (storedMonthTodoList !== null) {
          setMonthTodoList(storedMonthTodoList);
        }
      } catch (error) {
        console.error('Failed to load the todo list from AsyncStorage:', error);
      }
    };

    loadCurrentMonthTodos();
  }, [setMonthTodoList]);
};

export default useInitMonthTodoList;

import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';
import {getStorageData} from '../../lib/storage-helper';
import {MonthTodoListType, monthTodoListState} from '../../recoil';
import {getCurrentDateItems} from '../../utils';

const useInitMonthTodoList = () => {
  const setMonthTodoList = useSetRecoilState(monthTodoListState);

  useEffect(() => {
    const loadCurrentMonthTodoList = async () => {
      try {
        const {currentMonthKey} = getCurrentDateItems();
        const storedMonthTodoList: MonthTodoListType = await getStorageData(
          'todos-' + currentMonthKey,
        );
        if (storedMonthTodoList !== null) {
          setMonthTodoList(storedMonthTodoList);
        }
      } catch (error) {
        console.error('Failed to load the todo list from AsyncStorage', error);
      }
    };

    loadCurrentMonthTodoList();
  }, [setMonthTodoList]);
};

export default useInitMonthTodoList;

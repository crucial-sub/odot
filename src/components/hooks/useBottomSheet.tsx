import {ReactElement} from 'react';
import {useRecoilState} from 'recoil';
import {bottomSheetState} from '../../recoil';

type ShowBottomSheetPropsType = {
  content: ReactElement | null;
};

const useBottomSheet = () => {
  const [sheetState, setSheetState] = useRecoilState(bottomSheetState);

  const showBottomSheet = ({content}: ShowBottomSheetPropsType) => {
    setSheetState({
      isGlobalVisible: true,
      content,
    });
  };

  const hideBottomSheet = () => {
    setSheetState(prev => ({...prev, isGlobalVisible: false}));
  };

  return {
    showBottomSheet,
    hideBottomSheet,
    ...sheetState,
  };
};

export default useBottomSheet;

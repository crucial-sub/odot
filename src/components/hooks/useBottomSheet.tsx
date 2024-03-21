import {ReactElement} from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';
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
    setSheetState({
      isGlobalVisible: false,
      content: null,
    });
  };

  return {
    showBottomSheet,
    hideBottomSheet,
    ...sheetState,
  };
};

export default useBottomSheet;

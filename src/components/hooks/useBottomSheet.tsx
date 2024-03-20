import {ReactElement} from 'react';
import {useSetRecoilState} from 'recoil';
import {bottomSheetState} from '../../recoil';

type ShowBottomSheetPropsType = {
  content: ReactElement | null;
};

const useBottomSheet = () => {
  const setSheetState = useSetRecoilState(bottomSheetState);

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
  };
};

export default useBottomSheet;

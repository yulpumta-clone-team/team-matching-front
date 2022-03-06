import { useCallback, useEffect } from 'react';

const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    console.log(1);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px';
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, []);
  const handleLock = (isLock) => {
    if (isLock) {
      lockScroll();
    } else {
      unlockScroll();
    }
  };
  return [handleLock];
};

export default useScrollLock;

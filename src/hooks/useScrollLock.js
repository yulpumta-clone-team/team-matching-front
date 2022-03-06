import { useCallback, useEffect } from 'react';

const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px';
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, []);
  const handleLock = (isLock) => (isLock ? lockScroll : unlockScroll);
  return [handleLock];
};

export default useScrollLock;

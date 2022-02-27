/* eslint-disable no-bitwise */
import { useEffect, useState } from 'react';

function useInfiniteScroll() {
  const [page, setPage] = useState(1);
  function handleScroll() {
    const left = document.documentElement.scrollTop + window.innerHeight;
    if (
      (left <= document.documentElement.scrollHeight + 10) &
      (left >= document.documentElement.scrollHeight - 10)
    ) {
      setPage((p) => p + 1);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // return window.removeEventListener('scroll', handleScroll);
  }, []);
  return page;
}

export default useInfiniteScroll;

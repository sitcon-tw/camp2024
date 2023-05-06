import { Ref, useLayoutEffect, useRef, useState } from 'react';

type Result = {
  scrollWidth: number;
  scrollHeight: number;
};

const initialState: Result = {
  scrollWidth: 0,
  scrollHeight: 0,
};

const useScrollSize = <T extends HTMLElement>(): [Ref<T>, Result] => {
  const elementRef = useRef<T>(null);
  const [size, setSize] = useState<Result>(initialState);

  useLayoutEffect(() => {
    if (!elementRef.current) {
      return;
    }

    const scrollWidth = elementRef.current.scrollWidth;
    const scrollHeight = elementRef.current.scrollHeight;

    if (scrollWidth !== size.scrollWidth || scrollHeight !== size.scrollHeight) {
      setSize({ scrollWidth, scrollHeight });
    }
  });

  return [elementRef, size];
};

export default useScrollSize;
import { Ref, useLayoutEffect, useRef, useState } from 'react';

type Result = {
  scrollWidth: number;
  width: number;
  scrollHeight: number;
  height: number;
};

const initialState: Result = {
  scrollWidth: 0,
  scrollHeight: 0,
  width: 0,
  height: 0,
};

const useScrollSize = <T extends HTMLDivElement>(): [Ref<T>, Result] => {
  if (!process.browser) {
    return [null, initialState];
  }
  const elementRef = useRef<T>(null);
  const [size, setSize] = useState<Result>(initialState);

  useLayoutEffect(() => {
    if (!elementRef.current) {
      return;
    }

    const scrollWidth = elementRef.current.scrollWidth;
    const scrollHeight = elementRef.current.scrollHeight;
    const width = elementRef.current.clientWidth;
    const height = elementRef.current.clientHeight;

    if (scrollWidth !== size.scrollWidth || scrollHeight !== size.scrollHeight) {
      setSize({ scrollWidth, scrollHeight, height, width });
    }
  });

  return [elementRef, size];
};

export default useScrollSize;
import { MutableRefObject, useEffect, useState } from 'react';

export const useContainerScrolledDown = (
  ref: MutableRefObject<HTMLElement | null>,
) => {
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const element = ref?.current;

    if (!element) {
      return;
    }

    setScrolledDown(
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight,
      ) < 1,
    );
  }, [ref?.current?.scrollHeight, ref?.current?.clientHeight]);

  return [scrolledDown, setScrolledDown];
};

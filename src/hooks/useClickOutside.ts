import { useEffect, type RefObject } from "react";

function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  callback: (event: MouseEvent | TouchEvent) => void,
  exceptionRef?: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        ref?.current &&
        !ref.current.contains(event.target as Node) &&
        !(
          exceptionRef?.current &&
          exceptionRef.current.contains(event.target as Node)
        )
      ) {
        callback(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, callback, exceptionRef]);
}

export default useClickOutside;

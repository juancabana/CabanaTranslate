import { useEffect, useState } from "react";

export function useDebounce(value, delay = 1000) {
  const [devounceValue, setDevounceValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDevounceValue(value);
    }, delay);

    return () => {clearTimeout(timer)}
  }, [value, delay]);

  return devounceValue;
}

import { useState, useEffect } from 'react';
import { IUser } from '../modalContent/types';

const useLocalStorage = (key: string, defaultValue: IUser[] | IUser) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export { useLocalStorage };

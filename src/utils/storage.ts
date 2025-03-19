export const useLocalStorage = <T>(key: string, defaultValue: T) => {
    const storedValue = localStorage.getItem(key);
    const parsedValue = storedValue ? JSON.parse(storedValue) : defaultValue;
  
    const setItem = (value: T) => {
      localStorage.setItem(key, JSON.stringify(value));
    };
  
    return {
      getItem: () => parsedValue,
      setItem,
    };
  };
  
/**
 * Function that clears the Local Storage
 */
const clearLocalStorage = () => {
  const localStorageItems: string[] = [''];

  localStorageItems.forEach((item) => {
    localStorage.removeItem(item);
  });
};

// Export service
export const storageService = {
  clearLocalStorage,
};

export const saveToLocalStorage = (key, value) => {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error('Ошибка при сохранении в localStorage:', error);
    }
};

export const getFromLocalStorage = (key) => {
    try {
        const serializedValue = localStorage.getItem(key);
        return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
        console.error('Ошибка при чтении из localStorage:', error);
        return null;
    }
};

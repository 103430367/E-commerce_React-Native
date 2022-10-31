import AsyncStorage from "@react-native-async-storage/async-storage";
export const FIRST_OPEN = 'FIRST_OPEN';

//Create data storage
const saveDataToStorage = (name,data) => {
    AsyncStorage.setItem(
        name,
        JSON.stringify({
            data
        }),
    );
};

//Check if First Open
export const firstOpen = () => {
    saveDataToStorage('isFirstTime', 'First Time Open the App');
    AsyncStorage.removeItem('isFirstTime');
    return {
        type: 'FIRST_OPEN',
    };
};
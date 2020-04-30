import { useFonts } from '@use-expo/font';

export default function loadRobotoFont() {
    const fonts = {
        'Roboto-Regular': require('../assets/font/Roboto-Regular.ttf'),
        'Roboto-Italic': require('../assets/font/Roboto-Italic.ttf'),
        'Roboto-Light': require('../assets/font/Roboto-Light.ttf'),
        'Roboto-Medium': require('../assets/font/Roboto-Medium.ttf'),
        'Roboto-Thin': require('../assets/font/Roboto-Thin.ttf'),
    };
    const [isFontsLoaded] = useFonts(fonts);
    return isFontsLoaded;
}

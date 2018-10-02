/*
 * platform/application wide metrics for proper styling
*/
import { Dimensions, Platform } from 'react-native';
import Normalize from 'app/lib/normalize'
const { width, height } = Dimensions.get('window');

const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    navBarHeight: Platform.OS === 'ios' ? Normalize(54) : Normalize(66)
};

export default metrics;

import { StyleSheet } from 'react-native';
import ApplicationStyles from 'app/config/styles';
import metrics from 'app/config/metrics';
import color from 'app/config/colors';

const styles = StyleSheet.create({
    ...ApplicationStyles,
    itemView: {
        alignItems:'center',
        justifyContent:'center',
        height: metrics.screenHeight*0.34,
        width: metrics.screenWidth/3
    },
    image: {
        height: metrics.screenHeight*0.27,
        width: metrics.screenWidth*0.29,
        resizeMode:'contain'
    },
    text: {
        ...ApplicationStyles.fontlight,
        flex: 1,
        textAlign: 'left',
        width: metrics.screenWidth*0.29,
        color: color.COLOR_WHITE,
    }

});

export default styles;

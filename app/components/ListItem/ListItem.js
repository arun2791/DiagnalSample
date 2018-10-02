import React, {Componenet} from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import styles from './styles';
const {height, width} = Dimensions.get('window');
const ListItem = (props) => {
    const {image, name} = props;
    const imagePath = getImagePath(image);
    
    return(
        <View style={styles.itemView}> 
            <Image style={styles.image} source={imagePath}/>
            <Text numberOfLines={2} style={styles.text}>{name}</Text>
        </View>
    )
}
const getImagePath = (image) => {
    switch(image) {
        case 'poster1.jpg' : 
            return require('../../assets/poster1.jpg');
        case 'poster2.jpg' : 
            return require('../../assets/poster2.jpg');
        case 'poster3.jpg' : 
            return require('../../assets/poster3.jpg');
        case 'poster4.jpg' : 
            return require('../../assets/poster4.jpg');
        case 'poster5.jpg' : 
            return require('../../assets/poster5.jpg');
        case 'poster6.jpg' : 
            return require('../../assets/poster6.jpg');
        case 'poster7.jpg' : 
            return require('../../assets/poster7.jpg');
        case 'poster8.jpg' : 
            return require('../../assets/poster8.jpg');
        case 'poster9.jpg' : 
            return require('../../assets/poster9.jpg');
        default: 
            return require('../../assets/missing_image.png');
    }
}
export default ListItem;
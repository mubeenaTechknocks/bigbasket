import { Dimensions } from "react-native";

export const Properties = {
    color: {
        green: '#689f39',
        grey: '#4a4a4a'
    },
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    fonts:{
        default :'Poppins-Regular'
    }
}
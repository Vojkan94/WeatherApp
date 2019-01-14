import cloud from '../../assets/icons/cloud.svg';
import cloudy from '../../assets/icons/cloudy.svg';
import clearNight from '../../assets/icons/clear-night.svg';
import rain from '../../assets/icons/rain.svg';
import snow from '../../assets/icons/snow.svg';
import storn from '../../assets/icons/storn.svg';
import sun from '../../assets/icons/sun.svg';


const getImage = (icon) => {
    switch(icon){
        case "clear-night":
            icon = clearNight
            break;
        case "rain":
            icon = rain;
            break;
        case "cloudy":
        case "partly-cloudy-night":
        case "partly-cloudy-day":
            icon = cloudy;  
            break;
        case "snow":
            icon = snow;  
            break;
        case "clear-day":
            icon = sun;  
            break;
        default:
            icon = cloudy;  
            break;
    }
    return icon;
    
}
export {
    getImage
}
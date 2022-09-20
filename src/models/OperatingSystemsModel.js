/**
 * Project Cards Info model
 * 
 * @author Radiant C. Juan <radiantcjuan@gmail.com>
 * 
 * @copyright RCJ Works
 */
 import OperatingSystemsModelJson from '../dataset/operating_systems.json';

 const importAll = (r) => {
     let images = {};
     for (var index in r.keys()) {
         images[r.keys()[index].replace('./', '')] = r(r.keys()[index]);
     }
     return images;
 }
 
 const osImages = importAll(require.context('../assets/img/rcjworks/os', false, /\.(png|jpe?g|svg)$/));
 
 const OperatingSystemsModel = {
     /**
      * Get all the coding skills label and images
      * 
      * @returns {array}
      */
     get_all_os: () => {
         const data = OperatingSystemsModelJson.map((val, index) => {
             const src = val.hovered_src
             val.hovered_src = osImages[src].default;
             return val
         });
         return data;
     }
 }
 
 export default OperatingSystemsModel
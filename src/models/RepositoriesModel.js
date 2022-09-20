/**
 * Project Cards Info model
 * 
 * @author Radiant C. Juan <radiantcjuan@gmail.com>
 * 
 * @copyright RCJ Works
 */
 import RepositoriesModelJson from '../dataset/repositories.json';

 const importAll = (r) => {
     let images = {};
     for (var index in r.keys()) {
         images[r.keys()[index].replace('./', '')] = r(r.keys()[index]);
     }
     return images;
 }
 
 const repoImages = importAll(require.context('../assets/img/rcjworks/repositories', false, /\.(png|jpe?g|svg)$/));
 
 const RepositoriesModel = {
     /**
      * Get all the coding skills label and images
      * 
      * @returns {array}
      */
     get_all_repo: () => {
         const data = RepositoriesModelJson.map((val, index) => {
             const src = val.hovered_src
             val.hovered_src = repoImages[src].default;
             return val
         });
         return data;
     }
 }
 
 export default RepositoriesModel
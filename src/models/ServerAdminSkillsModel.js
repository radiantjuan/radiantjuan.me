/**
 * Project Cards Info model
 * 
 * @author Radiant C. Juan <radiantcjuan@gmail.com>
 * 
 * @copyright RCJ Works
 */
 import serverAdminskillsJson from '../dataset/server_admin_skills.json';

 const importAll = (r) => {
     let images = {};
     for (var index in r.keys()) {
         images[r.keys()[index].replace('./', '')] = r(r.keys()[index]);
     }
     return images;
 }
 
 const serverAdminImages = importAll(require.context('../assets/img/rcjworks/serveradmin', false, /\.(png|jpe?g|svg)$/));
 
 const ServerAdminSkills = {
     /**
      * Get all the coding skills label and images
      * 
      * @returns {array}
      */
     get_all_server_admin_skills: () => {
         const data = serverAdminskillsJson.map((val, index) => {
             const src = val.hovered_src
             val.hovered_src = serverAdminImages[src].default;
             return val
         });
         return data;
     }
 }
 
 export default ServerAdminSkills
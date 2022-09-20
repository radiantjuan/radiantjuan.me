/**
 * Project Cards Info model
 * 
 * @author Radiant C. Juan <radiantcjuan@gmail.com>
 * 
 * @copyright RCJ Works
 */
import projects from '../dataset/projects.json';


const importAll = (r) => {
    let images = {};
    for (var index in r.keys()) {
        images[r.keys()[index].replace('./', '')] = r(r.keys()[index]);
    }
    return images;
}

const projectImages = importAll(require.context('../assets/img/rcjworks/projects/projectimgs', false, /\.(png|jpe?g|svg|webp)$/));

const ProjectCardsInfoModel = {
    /**
     * Get all the project cards info data
     * 
     * @returns {array}
     */
    get_all_project_cards_info: () => {
        const data = projects.map((val, index) => {
            const src = val.src
            val.src = projectImages[src].default;
            return val
        });
        return data;
    }
}

export default ProjectCardsInfoModel
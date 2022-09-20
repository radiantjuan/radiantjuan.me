/**
 * Project Cards Info model
 * 
 * @author Radiant C. Juan <radiantcjuan@gmail.com>
 * 
 * @copyright RCJ Works
 */
import codingSkillsJson from '../dataset/coding_skills.json';

const importAll = (r) => {
    let images = {};
    for (var index in r.keys()) {
        images[r.keys()[index].replace('./', '')] = r(r.keys()[index]);
    }
    return images;
}

const whatCanIcodeImagesHovered = importAll(require.context('../assets/img/rcjworks/whatcanicode', false, /\.(png|jpe?g|svg)$/));

const CodingSkillsModel = {
    /**
     * Get all the coding skills label and images
     * 
     * @returns {array}
     */
    get_all_coding_skills: () => {
        const data = codingSkillsJson.map((val, index) => {
            const src = val.hovered_src
            val.hovered_src = whatCanIcodeImagesHovered[src].default;
            return val
        });
        return data;
    }
}

export default CodingSkillsModel
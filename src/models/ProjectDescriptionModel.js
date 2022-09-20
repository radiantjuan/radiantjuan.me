/**
 * Project Cards Info model
 * 
 * @author Radiant C. Juan <radiantcjuan@gmail.com>
 * 
 * @copyright RCJ Works
 */
import project_description from '../dataset/project_description.json';

const importAll = (r) => {
    let images = {};
    for (var index in r.keys()) {
        images[r.keys()[index].replace('./', '')] = r(r.keys()[index]);
    }
    return images;
}

const projectImages = {
    chaboba: importAll(require.context('../assets/img/rcjworks/projects/projectmodalimages/chaboba', false, /\.(png|jpe?g|svg|webp)$/)),
    aprs: importAll(require.context('../assets/img/rcjworks/projects/projectmodalimages/aprs', false, /\.(png|jpe?g|svg|webp)$/)),
    binbrook: importAll(require.context('../assets/img/rcjworks/projects/projectmodalimages/binbrook', false, /\.(png|jpe?g|svg|webp)$/)),
    lightforce: importAll(require.context('../assets/img/rcjworks/projects/projectmodalimages/lightforce', false, /\.(png|jpe?g|svg|webp)$/)),
    manilawater: importAll(require.context('../assets/img/rcjworks/projects/projectmodalimages/manilawater', false, /\.(png|jpe?g|svg|webp)$/)),
    lagunawater: importAll(require.context('../assets/img/rcjworks/projects/projectmodalimages/lagunawater', false, /\.(png|jpe?g|svg|webp)$/)),
    natureplay: importAll(require.context('../assets/img/rcjworks/projects/projectmodalimages/natureplay', false, /\.(png|jpe?g|svg|webp)$/)),
    ordermateonline: importAll(require.context('../assets/img/rcjworks/projects/projectmodalimages/ordermateonline', false, /\.(png|jpe?g|svg|webp)$/)),
    sparta: importAll(require.context('../assets/img/rcjworks/projects/projectmodalimages/sparta', false, /\.(png|jpe?g|svg|webp)$/)),
    summitdoors: importAll(require.context('../assets/img/rcjworks/projects/projectmodalimages/summitdoors', false, /\.(png|jpe?g|svg|webp)$/)),
}

const LoopAllImages = (directory) => {
    let images = [];
    for (let projectImagesaprsIndex in projectImages[directory]) {
        images.push({
            "src": projectImages[directory][projectImagesaprsIndex].default,
            "caption": "",
            "altText": ""
        });
    }
    return images;
}

const ProjectDescriptionModel = {
    /**
     * get project detail by id
     * 
     * @param {Int} id
     * 
     * @returns {array}
     */
    get_project_detail: (id) => {
        const data = project_description.filter((val, index) => {
            return val.ref_id === parseInt(id);
        });

        const dataMap = data.map((val, index) => {
            val.slider_images = LoopAllImages(val.images_directory);
            return val;
        });

        return dataMap;
    }
}

export default ProjectDescriptionModel
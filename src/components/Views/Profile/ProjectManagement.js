import React from 'react';
const importAll = (r) => {
    let images = {};
    for (var index in r.keys()) {
        images[r.keys()[index].replace('./', '')] = r(r.keys()[index]);
    }
    return images;
}

const projectManagement = importAll(require.context('../../../assets/img/rcjworks/projectmanagement', false, /\.(png|jpe?g|svg)$/));

const projectManagementArr = [
    {
        hovered_src: projectManagement['agile.png'].default,
        caption: "Agile"
    },
    {
        hovered_src: projectManagement['atlassian.png'].default,
        caption: "Atlassian Products"
    },
    {
        hovered_src: projectManagement['cicd.png'].default,
        caption: "CI/CD"
    },
    {
        hovered_src: projectManagement['tdd.png'].default,
        caption: "TDD"
    },
];

const ProjectManagement = () => {
    const jsx = projectManagementArr.map((val, index) => {
        return (
            <div key={index} className="col-4 col-lg-4 text-sm text-center text-white p-0 my-2">
                <div>
                    <img src={val.hovered_src} alt={val.caption} style={{ width: "64px", height: "64px" }} />
                </div>
                <small>{val.caption}</small>
            </div>
        );
    });

    return (
        <React.Fragment>
            {jsx}
        </React.Fragment>
    )
}

export default ProjectManagement;
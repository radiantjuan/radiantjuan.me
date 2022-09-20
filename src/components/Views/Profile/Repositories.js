import React from 'react';
import RepositoriesModel from 'models/RepositoriesModel';

const repositoriesArr = RepositoriesModel.get_all_repo();
const Repositories = () => {
    const jsx = repositoriesArr.map((val, index) => {
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

export default Repositories;
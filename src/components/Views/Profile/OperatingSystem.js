import React from 'react';
import OperatingSystemsModel from 'models/OperatingSystemsModel';

const operatingSystemArr = OperatingSystemsModel.get_all_os();
const OperatingSystem = () => {
    const jsx = operatingSystemArr.map((val, index) => {
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

export default OperatingSystem;
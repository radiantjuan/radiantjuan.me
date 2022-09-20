/**
 * Coding skills component
 * 
 * @author Radiant C. Juan <radiantcjuan@gmail.com>
 * 
 * @copyright RCJ Works
 */

import React from 'react';
import CodingSkillsModel from 'models/CodingSkillsModel';

const whatCanICodeArr = CodingSkillsModel.get_all_coding_skills();

/**
 * What can I code module for component
 * 
 * @returns {JSX}
 */
const WhatCanICode = () => {
    const jsx = whatCanICodeArr.map((val, index) => {
        return (
            <div key={index} className="col-4 col-lg-3 text-sm text-center text-white p-0 my-2">
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

export default WhatCanICode;
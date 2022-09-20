/**
 * Project Cards Info model
 * 
 * @author Radiant C. Juan <radiantcjuan@gmail.com>
 * 
 * @copyright RCJ Works
 */
import React from 'react';
import ServerAdminSkills from 'models/ServerAdminSkillsModel';

const serverAdminArr = ServerAdminSkills.get_all_server_admin_skills();

/**
 * Server Admin index component 
 * 
 * @returns {jsx}
 */
const ServerAdmin = () => {
    const jsx = serverAdminArr.map((val, index) => {
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

export default ServerAdmin;
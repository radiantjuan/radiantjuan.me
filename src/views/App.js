import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import PageHeaderBanner from '../components/PageHeader/PageHeader';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from './Profile';
import MyProjects from './MyProjects';
import MyServices from './MyServices';
import HeaderOnScroll from '../components/Header/HeaderOnScroll';
import { MobileMenuStatus } from 'utils/contexts';

const App = () => {
    const [menuIsOpen, setIsOpen] = useState(false);

    const toggleClassNameNavBar = () => {
        setIsOpen(menuIsOpen ? false : true);
    }

    useEffect(() => {
        document.body.classList.toggle("index-page");
    }, []);
    return (
        <React.Fragment>
            <BrowserRouter>
                <MobileMenuStatus.Provider value={menuIsOpen}>
                    <HeaderOnScroll toggleClassNameNavBar={toggleClassNameNavBar}/>
                    <Header toggleClassNameNavBar={toggleClassNameNavBar} />
                </MobileMenuStatus.Provider>
                <Switch>
                    <Route path="/myservices" render={(props) => <MyServices {...props} />} />
                    <Route path="/myprojects/:id" render={(props) => <MyProjects {...props} />} />
                    <Route path="/myprojects" render={(props) => <MyProjects {...props} />} />
                    <Route path="/whoami" render={(props) => <Profile {...props} />} />
                    <Route path="/" render={(props) => <PageHeaderBanner {...props} />} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}
export default App;
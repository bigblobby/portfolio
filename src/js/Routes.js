import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Header from "./components/Header";

class Routes extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <div id="content" className="site-content">
                    <Header />
                    <div className="site-body">
                        <Switch>
                            <Route exact path={"/"} component={AboutPage} />
                            <Route path={"/projects"} component={ProjectsPage} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;

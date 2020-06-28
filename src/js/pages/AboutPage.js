import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="about-page">
                <div className="about-page--inner">
                    <img className="avatar" src="https://via.placeholder.com/200" alt=""/>
                    <h1 className="name">Tom Dempster</h1>
                    <h2 className="job">Fullstack Javascript Developer</h2>
                    <p className="contact"><a href="mailto:tom_dempster@hotmail.co.uk">tom_dempster@hotmail.co.uk</a></p>
                    <p className="about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores, assumenda cum distinctio et expedita harum illum incidunt, laborum maxime molestiae nisi possimus repudiandae sequi tempore vel velit. Assumenda atque culpa cumque dicta doloremque dolores, et, excepturi illum in iusto magnam, maxime odit officiis quaerat quam quia quibusdam ut vero!</p>
                    <div className="languages">
                        <h4>Languages</h4>
                        <div>
                            <span className="badge badge-pill">HTML</span>
                            <span className="badge badge-pill">Twig</span>
                            <span className="badge badge-pill">CSS</span>
                            <span className="badge badge-pill">SCSS</span>
                            <span className="badge badge-pill">Javascript</span>
                            <span className="badge badge-pill">SQL</span>
                        </div>
                    </div>
                    <div className="tools">
                        <h4>Tools</h4>
                        <div>
                            <span className="badge badge-pill">Node</span>
                            <span className="badge badge-pill">React</span>
                            <span className="badge badge-pill">Redux</span>
                            <span className="badge badge-pill">Git</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;

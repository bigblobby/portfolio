import React from 'react';
import Card from "../components/Card";

class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        fetch('/project-data.json')
            .then(result => result.json())
            .then(data => {
                this.setState({ projects: data});
            });
    }

    render() {
        return (
            <div className="projects-page">
                <div className="container container-fluid">
                    <div className="cards">
                        {
                            this.state.projects.length > 0 && this.state.projects.map(project => {
                                return (
                                    <Card
                                        key={project.id}
                                        id={project.id}
                                        title={project.title}
                                        summary={project.summary}
                                        image={project.image}
                                        link={project.link}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsPage;

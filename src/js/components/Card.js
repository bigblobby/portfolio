import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        }
    }

    expandCard = (e) => {
        this.setState({ expanded: true });
    }

    render() {
        return (
            <div className="card">
                <div className={"card--inner " + (this.state.expanded ? 'expanded' : '')}>
                    <img src={this.props.image.path} alt={this.props.image.alt}/>
                    <div className="details">
                        <h2 className="title">{this.props.title}</h2>
                        <p className="summary">{this.props.summary}</p>
                        <div className="button-container">
                            <a href={this.props.link} target="_blank" rel="noopener noreferrer">Visit</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;

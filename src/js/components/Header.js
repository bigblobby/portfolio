import { NavLink } from "react-router-dom";
import React from "react";

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.navLine = React.createRef();
        this.navContainer = React.createRef();
    }

    componentDidMount() {
        setTimeout( () => this.navLine.current.style.transition = 'all 0.2s ease', 100);

        const links = [...this.navContainer.current.children];
        links.forEach(link => {
            if(link.firstElementChild.classList.contains('active')){
                this.navLine.current.style.left = link.firstElementChild.offsetLeft + 'px';
                this.navLine.current.style.width = link.firstElementChild.scrollWidth + 'px';
            }
        })
    }


    changePage = (e) => {
        this.navLine.current.style.left = e.target.offsetLeft + 'px';
        this.navLine.current.style.width = e.target.scrollWidth + 'px';
    }

    render(){
        return (
            <header className="site-header">
                <nav>
                    <div className="active-line" ref={this.navLine}></div>
                    <ul ref={this.navContainer}>
                        <li><NavLink exact onClick={this.changePage} to={"/"}>About</NavLink></li>
                        <li><NavLink exact onClick={this.changePage} to={"/projects"}>Projects</NavLink></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;

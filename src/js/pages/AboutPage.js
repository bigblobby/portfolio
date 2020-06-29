import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="about-page">
                <div className="about-page--inner">
                    <img className="avatar" src="/images/me.jpeg" alt=""/>
                    <h1 className="name">Tom Dempster</h1>
                    <h2 className="job">Fullstack Javascript Developer</h2>
                    <p className="contact"><a href="mailto:tom_dempster@hotmail.co.uk">tom_dempster@hotmail.co.uk</a></p>
                    <p className="about">A skilled web developer specialising in Javascript for both frontend and backend systems. Can deliver highly interactive and intuitive React applications and scalable well-structured backend services. You can <a href="mailto:tom_dempster@hotmail.co.uk">contact me</a> or find me here:</p>
                    <div className="social-icons">
                        <a href="https://github.com/bigblobby" target="_blank" rel="noopener noreferrer">
                            <img alt="" src="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHRpdGxlPjwvdGl0bGU+CjxnIGlkPSJpY29tb29uLWlnbm9yZSI+CjwvZz4KPHBhdGggZD0iTTI1Ni4wMDQgNi4zMjFjLTE0MS4zNjkgMC0yNTYuMDA0IDExNC42MDktMjU2LjAwNCAyNTUuOTk5IDAgMTEzLjEwNyA3My4zNTIgMjA5LjA2NiAxNzUuMDY4IDI0Mi45MTggMTIuNzkzIDIuMzY5IDE3LjQ5Ni01LjU1NSAxNy40OTYtMTIuMzE2IDAtNi4xMDItMC4yNC0yNi4yNzEtMC4zNDgtNDcuNjYyLTcxLjIyNCAxNS40ODgtODYuMjUyLTMwLjIwNS04Ni4yNTItMzAuMjA1LTExLjY0MS0yOS41ODgtMjguNDI0LTM3LjQ1OC0yOC40MjQtMzcuNDU4LTIzLjIyNi0xNS44ODkgMS43NTUtMTUuNTYyIDEuNzU1LTE1LjU2MiAyNS43IDEuODA1IDM5LjIzOCAyNi4zODMgMzkuMjM4IDI2LjM4MyAyMi44MzYgMzkuMTM1IDU5Ljg4OCAyNy44MiA3NC41MDIgMjEuMjc5IDIuMjk0LTE2LjU0MyA4LjkyNi0yNy44NCAxNi4yNTMtMzQuMjMyLTU2Ljg2NS02LjQ3MS0xMTYuNjM4LTI4LjQyNS0xMTYuNjM4LTEyNi41MTYgMC0yNy45NDkgMTAuMDAyLTUwLjc4NyAyNi4zOC02OC43MTQtMi42NTgtNi40NS0xMS40MjctMzIuNDg2IDIuNDc2LTY3Ljc1IDAgMCAyMS41MDMtNi44NzYgNzAuNDIgMjYuMjQ1IDIwLjQxOC01LjY3NCA0Mi4zMTgtOC41MTggNjQuMDc3LTguNjE3IDIxLjc1MSAwLjA5OSA0My42NjggMi45NDMgNjQuMTI4IDguNjE3IDQ4Ljg2Ny0zMy4xMjIgNzAuMzI4LTI2LjI0NSA3MC4zMjgtMjYuMjQ1IDEzLjkzNiAzNS4yNjQgNS4xNzUgNjEuMyAyLjUxOCA2Ny43NSAxNi40MSAxNy45MjggMjYuMzQ3IDQwLjc2NiAyNi4zNDcgNjguNzE0IDAgOTguMzI3LTU5Ljg4OSAxMTkuOTc1LTExNi44OTUgMTI2LjMxMiA5LjE4MiA3Ljk0NSAxNy4zNjIgMjMuNTIzIDE3LjM2MiA0Ny40MDYgMCAzNC4yNTQtMC4yOTggNjEuODIyLTAuMjk4IDcwLjI1NCAwIDYuODE0IDQuNjExIDE0Ljc5NyAxNy41ODYgMTIuMjgzIDEwMS42NjEtMzMuODg4IDE3NC45MjEtMTI5LjgxMyAxNzQuOTIxLTI0Mi44ODQgMC0xNDEuMzktMTE0LjYxNy0yNTUuOTk5LTI1NS45OTYtMjU1Ljk5OXoiPjwvcGF0aD4KPC9zdmc+Cg==" />
                        </a>
                        <a href="https://www.linkedin.com/in/thomas-dempster-00843bb7" target="_blank" rel="noopener noreferrer">
                            <img alt="" src="data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHRpdGxlPjwvdGl0bGU+CjxnIGlkPSJpY29tb29uLWlnbm9yZSI+CjwvZz4KPHBhdGggZD0iTTQ2NCAwaC00MTZjLTI2LjQgMC00OCAyMS42LTQ4IDQ4djQxNmMwIDI2LjQgMjEuNiA0OCA0OCA0OGg0MTZjMjYuNCAwIDQ4LTIxLjYgNDgtNDh2LTQxNmMwLTI2LjQtMjEuNi00OC00OC00OHpNMTkyIDQxNmgtNjR2LTIyNGg2NHYyMjR6TTE2MCAxNjBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJ6TTQxNiA0MTZoLTY0di0xMjhjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJ2MTI4aC02NHYtMjI0aDY0djM5LjdjMTMuMi0xOC4xIDMzLjQtMzkuNyA1Ni0zOS43IDM5LjggMCA3MiAzNS44IDcyIDgwdjE0NHoiPjwvcGF0aD4KPC9zdmc+Cg==" />
                        </a>
                    </div>
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
                            <span className="badge badge-pill">Docker</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;

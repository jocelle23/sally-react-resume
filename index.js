'use strict';

function App() {
    return (
        <div className="container">
            <header>
                <img src="images/sally-img.jpg" alt="Image of Sally" className="sally-image" />
                <h1 className={"title", "center"}>Sally Student</h1><hr></hr>
            </header>

            <main>
                <section id={"Education"}>
                    <h2 className="center">Education</h2>
                    <ul>
                        <li className="no-bullets"><b>Minnesota University 2009-2013</b></li>
                        <li className="indent">Major: Project Management</li>
                        <li className="indent">Minor: Information Technology</li>
                    </ul>
                </section>

                <section id={"works"}>
                    <h2 className="center">Work Experience</h2>
                    <ul>
                        <li className="no-bullets"><b>Jetbrains</b> - Project Manager</li>
                        <li className="indent">October 2018 - Present</li>
                        <li className="indent"><i>Maintained and budgeted projects worth $11 million in capital </i></li>
                        <li className="no-bullets"><b>Github</b> - Engineer</li>
                        <li className="indent">June 2012 - August 2018</li>
                        <li className="indent"><i>Participated in the creation of twelve different projects, all aimed towards
                    helping females and young children aspire to be developers!</i></li>
                    </ul>
                </section>

                <section id={"Contact-section"} className="center">
                    <h2>My contact information: </h2>
                    <address id={"Contact-info"}>
                        <p>My name is Sally</p>
                        <p>My email is: <a href="mailto://sally@IntenetExplorer.old">sally@IntenetExplorer.old</a></p>
                        <p>My phone number is: <a href="tel:+34100572415">+34 100 57 24 15</a></p>
                    </address>

                </section>
            </main>

        </div>

    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#application-root')
);


/*

*/
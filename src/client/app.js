import React from 'react'

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            pagesClasses: [
                "page show",
                "page hide",
                "page hide",
                "page hide",
                "page hide"
            ],
            index: 0,
            refresh: true
        }
    }

    handleProjectClick(value) {
        switch (value) {
            case "chat":
                window.open("https://github.com/ciborg245/web_chat", '_blank');
                break
            case "memory":
                window.open("https://github.com/ciborg245/web_memory", '_blank');
                break
            case "maze":
                window.open("https://github.com/ciborg245/web_maze", '_blank');
                break
            case "calc":
                window.open("https://github.com/ciborg245/web_calculator", '_blank');
                break
            case "uber":
                window.open("https://github.com/DrCesar/UberG", '_blank');
                break
            case "dbms":
                window.open("https://github.com/arr15334/dbms_webapp", '_blank');
                break
            case "compiler":
                window.open("https://github.com/ciborg245/Compiler---Semantic-Analysis", '_blank');
                break
            case "git":
                window.open("https://github.com/ciborg245", '_blank');
                break
        }
	}

    handleClick(index) {
        if (this.state.index == index || !this.state.refresh) return;
        this.setState({refresh: false})
        let tempClasses = this.state.pagesClasses;
        tempClasses[this.state.index] = "page fadeOut";
        this.setState({pagesClasses: tempClasses});
        setTimeout(() => {
            let tempClasses = this.state.pagesClasses;
            tempClasses[this.state.index] = "page hide";
            tempClasses[index] = "page fadeIn";
            this.setState({pagesClasses: tempClasses})
            setTimeout(() => {
                let tempClasses = this.state.pagesClasses;
                tempClasses[index] = "page show";
                this.setState({pagesClasses: tempClasses, index: index, refresh: true})
            }, 590)
        }, 590)
    }

    render() {
        return (
            <div className="container">
                <div className = "menu">
                    <div className = "pageContainer">
                        <div className = {this.state.pagesClasses[0]}>
                            <div className = "intro">
                                <div className = "name-div">
                                    <h1 className = "name"> Alejandro Chaclán </h1>
                                </div>
                                <div className = "title-div">
                                    <h3 className = "title" id = "git"
                                        onClick={this.handleProjectClick.bind(this, "git")}> Github </h3>
                                </div>
                                <div className = "project-div">
                                    <h3 className = "title"> Projects </h3>
                                </div>
                                <div className = "projects-div">
                                    <div className = "proj-el"
                                        onClick={this.handleProjectClick.bind(this, "chat")}> NodeJS - Chat </div>
                                    <div className = "proj-el"
                                        onClick={this.handleProjectClick.bind(this, "memory")}> React - Memory </div>
                                    <div className = "proj-el"
                                        onClick={this.handleProjectClick.bind(this, "maze")}> React - Maze </div>
                                    <div className = "proj-el"
                                        onClick={this.handleProjectClick.bind(this, "calc")}> React - Calculator </div>
                                    <div className = "proj-el"
                                        onClick={this.handleProjectClick.bind(this, "uber")}> React - Uber </div>
                                    <div className = "proj-el"
                                        onClick={this.handleProjectClick.bind(this, "dbms")}> Vue.js - Web DBMS with API</div>
                                    <div className = "proj-el"
                                        onClick={this.handleProjectClick.bind(this, "compiler")}> Electron - Compiler </div>
                                </div>
                            </div>
                        </div>
                        <div className = {this.state.pagesClasses[1]}>
                            <iframe src = "http://34.210.35.174/15018/chat/" className = "preview">
                            </iframe>
                        </div>
                        <div className = {this.state.pagesClasses[2]}>
                            <iframe src = "http://34.210.35.174/15018/maze/" className = "preview">
                            </iframe>
                        </div>
                        <div className = {this.state.pagesClasses[3]}>
                            <iframe src = "http://34.210.35.174/15018/calc/" className = "preview">
                            </iframe>
                        </div>
                        <div className = {this.state.pagesClasses[4]}>
                            <iframe src = "http://34.210.35.174/15018/historia/" className = "preview">
                            </iframe>
                        </div>
                    </div>
                    <div className="index">
                        <button className = "buttonDot" onClick = {this.handleClick.bind(this, 0)}></button>
                        <button className = "buttonDot" onClick = {this.handleClick.bind(this, 1)}></button>
                        <button className = "buttonDot" onClick = {this.handleClick.bind(this, 2)}></button>
                        <button className = "buttonDot" onClick = {this.handleClick.bind(this, 3)}></button>
                        <button className = "buttonDot" onClick = {this.handleClick.bind(this, 4)}></button>
                    </div>
                </div>
            </div>
        )
    }
}

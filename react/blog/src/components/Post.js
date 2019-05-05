class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    handleClick() {
        this.setState({count: 1});
    }

    render () {

        return (
            <div className="App">
                <header className="App-header" onClick={this.handleClick}>
                    <div className="count"></div>
                    <img src={'/img/' + this.props.img} className="App-logo" alt="logo"  />
                    <h1>{this.props.title}</h1>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default Post
import React from "react";
import ReactDOM from "react-dom";

class input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: ""};
    }

    handleInput = (event) => {
        const val = event.target.value;
        this.setState({
            number:val
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
                <input
                    type="number"
                    placehoder="0000 0000 0000 0000"
                    value={this.state.number}
                    onChange={this.handleInput}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <input />,
    document.getElementById('root')
);
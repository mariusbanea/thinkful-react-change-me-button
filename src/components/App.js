import React from 'react';
import ChangeMeButton from './ChangeMeButton';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLiked: false, name: "Mickey Mouse" };
    }

    _toggleLikeState = () => {
        this.setState({
            isLiked: !this.state.isLiked
        });
    }

    render() {
        const { name, isLiked } = this.state;
        console.log(name);
        return (
            <div className="parent">
                <span>{ isLiked ? "yay!": "nay!" }</span>
                <ChangeMeButton name={name} onToggleClick={() => this._toggleLikeState()} />
            </div>
        );
    }
}

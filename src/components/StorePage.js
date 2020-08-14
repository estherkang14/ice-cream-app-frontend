import React from 'react'

class StorePage extends React.Component {

    state = {}

    componentDidMount() {
        fetch('http://localhost:3000/stores/' + this.props.store.id)
        .then(response => response.json)
        .then(store = this.setState({store}))
    }

    render() {
        return (
            <div>
                <h1>{this.state.store.name}</h1>
            </div>
        )
    }
}

export default StorePage
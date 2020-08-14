import React from 'react'
import { withRouter } from 'react-router-dom'


class StorePage extends React.Component {
    state = {
        store: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id
        fetch('http://localhost:3000/stores/' + id)
        .then(response => response.json())
        .then(store => this.setState({store}))
    }

    render() {
        return (
            <div>
                <h1>{this.state.store.name}</h1>
            </div>
        )
    }
}

export default withRouter(StorePage)
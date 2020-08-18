import React from 'react'

class MyProfile extends React.Component {

    state = {
        user: {}
    }

    componentDidMount() {
        fetch('http://localhost:3000/users/' + localStorage.userId)
        .then(response => response.json())
        .then(user => this.setState({user}))
    }


    renderFavoriteStores = () => {
        if (this.state.user['favorite_stores'] && this.state.user['favorite_stores'].length > 0) {
            return this.state.user['favorite_stores'].map(
                store => { 
                    return (
                        <li key={store.store.id}> <a href={`/store/${store.store.id}`}>{store.store.name}</a> - {store.store.location}</li>
                )}
            )
        } else {
            return "You haven't favorited any Ice Cream Stores yet! :("
        }
    }

    renderReviews = () => { 
        if (this.state.user.reviews && this.state.user.reviews.length > 0) {
            return this.state.user.reviews.map(
                review => {
                    return (
                        <div key={review.id} style={{paddingBottom: '20px'}}>
                            <p>
                                <a href={`/store/${review.store.id}`}>{review.store.name}</a> - {review.store.location} ({review.rating}/5)
                                <br />
                                {review.text}
                                <br />
                                {(review.photo) ? review.photo : null}
                            </p>
                        </div>
                    )
                }
            )
        } else {
            return "You haven't reviewed any Ice Cream Stores yet! :("
        }
    }



    render() {
        return (
            <div className="ui left aligned container">
                <h1>{this.state.user.username}</h1>
    
                <h3>Favorite Stores</h3>
                {this.renderFavoriteStores()}
                <h3>My Reviews</h3>
                {this.renderReviews()}
            </div>
        )
    }
   
}

export default MyProfile
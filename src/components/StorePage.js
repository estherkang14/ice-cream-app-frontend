import React from 'react'
import { withRouter } from 'react-router-dom'
import ReviewForm from './ReviewForm'

let REVIEWSURL = 'http://localhost:3000/reviews'
let FAVORITESTOREURL = 'http://localhost:3000/favorite_stores'

class StorePage extends React.Component {
    state = {
        store: {},
        reviewData: { 
            text: "",
            rating: "", 
            photo: ""
        },
        isUserFavoriteStore: false
    }

   

    componentDidMount() {
        const id = this.props.match.params.id
        fetch('http://localhost:3000/stores/' + id)
        .then(response => response.json())
        .then(store => this.setState({store}))

        if (localStorage.token) {
            const user_id = localStorage.getItem('userId')

            fetch(`http://localhost:3000/check-favorite-store?user_id=${user_id}&store_id=${id}`)
            .then(response => response.json())
            .then(result => this.setState({isUserFavoriteStore: result.result}))
        }
    }

    renderIceCreams = () => {
        if (this.state.store['ice_creams']) {
            return this.state.store['ice_creams'].map(
                ic => { return (
                    <li key={ic.id}>{ic.flavor} ({ic.calories} calories)</li>
                )}
            )
        }
    }

    renderReviews = () => {
        if (this.state.store.reviews && this.state.store.reviews.length > 0) {
            return this.state.store.reviews.map(
                review => { return (
                    <div key={review.id} style={{paddingBottom: '20px'}}>
                        <p>
                            {review.user.username} - {review.user.location} ({review.rating}/5)
                            <br /> 
                            <strong>{review.text}</strong>
                            <br />
                            {(review.photo) ? <img className="ui small image" alt="review" src={review.photo} />
                            : null} 
                            <br />
                            
                        </p>
                    </div> 
                )}
            )
        } else {
            return <p>There are no reviews for this store! Be the first to review!</p>
        }
    }

    reviewText = (e) => {
        let reviewData = {...this.state.reviewData, text: e.target.value}
        this.setState({
          reviewData
        })
      }
    
      reviewRating = (e) => {
        let reviewData = {...this.state.reviewData, rating: e.target.value}
        this.setState({
          reviewData
        })
      }
    
      reviewPhoto = (e) => {
        let reviewData = {...this.state.reviewData, photo: window.URL.createObjectURL(e.target.files[0])}
        // debugger
        if (e.target.files[0]) this.setState({ reviewData })
      }

    postReview = (e) => {
        e.preventDefault()
       
          let reviewData = {...this.state.reviewData, user_id: localStorage.userId, store_id: this.state.store.id}
          let options = {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
              accept: "application/json"
            },
            body: JSON.stringify({ reviewData })
          }
    
          fetch(REVIEWSURL, options)
          .then(response => response.json())
          .then(review => {
              let reviews = [...this.state.store.reviews, review]
              this.setState({store: {...this.state.store, reviews: reviews}})
          })
          .then(alert("Review has been posted!"))

          e.target.reset()
    }

    addToFavoriteStore = () => {
        let userId = localStorage.userId
        let storeId = this.state.store.id

        let options = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                store_id: storeId
            })
        }

        fetch(FAVORITESTOREURL, options)
        .then(response => response.json())
        .then(result => this.setState({isUserFavoriteStore: true}))
    }

    removeFromFavoriteStore = () => {
        let userId = localStorage.userId
        let storeId = this.state.store.id

        fetch(`http://localhost:3000/delete-favorite-store?user_id=${userId}&store_id=${storeId}`)
        .then(response => response.json())
        .then(this.setState({isUserFavoriteStore: false}))
    }

    renderFavoriteOrUnfavoriteButton = () => {
        if (this.state.isUserFavoriteStore) {
            return <button className="ui button" tabIndex="0" onClick={this.removeFromFavoriteStore}>Remove from favorite stores</button>
        } else {
            return <button className="ui button" tabIndex="0" onClick={this.addToFavoriteStore}>Add to favorite store!</button>
        }
    }

    render() {
        return (
            <div className="ui left aligned container">
                <h1>{this.state.store.name}</h1>
                <h3>{this.state.store.location}</h3>
                {
                    (localStorage.token) 
                    ? this.renderFavoriteOrUnfavoriteButton()
                    : null
                }
                <div>
                    <h4>Ice Cream Flavors: </h4>
                    <ul>
                        {this.renderIceCreams()}
                    </ul>
                </div>
                <div>
                    <h4>Reviews</h4>
                    {this.renderReviews()}
                    
                    { localStorage.token ? 
                        <ReviewForm 
                        reviewText={this.reviewText} reviewRating={this.reviewRating}
                        reviewPhoto={this.reviewPhoto} 
                        postReview={this.postReview} store={this.state.store}/>
                    : null }
                </div>
            </div>
        )
    }
}

export default withRouter(StorePage)
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
        }
    }

   

    componentDidMount() {
        const id = this.props.match.params.id
        fetch('http://localhost:3000/stores/' + id)
        .then(response => response.json())
        .then(store => this.setState({store}))
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
                            {review.text}
                        </p>
                    </div> 
                )}
            )
        } else {
            return <p>There are no reviews for this store!</p>
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
        
        let reviewData = {...this.state.reviewData, photo: e.target.value}
        // FIX THIS !
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
        .then(console.log)
    }

    render() {
        return (
            <div className="ui left aligned container">
                <h1>{this.state.store.name}</h1>
                <h3>{this.state.store.location}</h3>
                {
                    (localStorage.token) 
                    ? <button className="ui button" tabindex="0" onClick={this.addToFavoriteStore}>Add to favorite store!</button>
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
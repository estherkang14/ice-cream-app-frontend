import React from 'react';

const ReviewForm = () => {
    return (
        <div>  
            <h3>Write a Review!</h3>
            <br></br>
            <div className="ui form">
                <div className="field">
                    <label>Content:</label>
                    <textarea name="text" placeholder="Start writing your review here!" value=""></textarea>
                </div>

                <div className="field">
                    <label>Rating (1-5):</label>
                    <select className="ui search dropdown">
                        <option value="">Select Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ReviewForm
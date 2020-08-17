import React from 'react';

const ReviewForm = (props) => {
    return (
        <div>  
            <h3>Write a Review!</h3>
            <br></br>
            <form className="ui form" onSubmit={(e) => {props.submitNewReview(e)}}>
                <div className="field">
                    <label>Content:</label>
                    <textarea name="text" placeholder="Start writing your review here!"
                    onChange={(e) => props.reviewText(e)}></textarea>
                </div>

                <div className="field">
                    <label>Rating (1-5):</label>
                    <select className="ui search dropdown" onChange={(e) => props.reviewRating(e)}>
                        <option value="">Select Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="ui fluid segment">
                    <label> Add a Photo: </label> <br></br>
                    <input type="file" className="inputfile ui button" id="embedpollfileinput"
                    onChange={(e) => props.reviewPhoto(e)} />
                    <label for="embedpollfileinput" className="ui button">
                        <i className="ui upload icon"/>
                        Upload Image
                    </label>
                   
                </div>
                <button type="submit" className="ui button">Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm
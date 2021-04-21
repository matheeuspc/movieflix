import './styles.scss';
import { ReactComponent as StarIcon } from '../../../../core/assets/images/star.svg';
import { Review } from 'core/types/Movie';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getAccessTokenDecoded } from 'core/utils/auth';

type Props = {
    review: Review;
}

const MovieReview = ({review} : Props) => {

    return (
        <div className="movie-review-container">
            <div className="user-review-info">
                <StarIcon className="star-icon-review"/>
                <p className="user-name">{review.user.name}</p>
            </div>
            <div className="review-content"> 
                <p className="review-text">{review.text}</p>
            </div>
        </div>
    );
};

export default MovieReview;
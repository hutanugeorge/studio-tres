import React, {FC} from 'react'

import '../stylesheets/components/_review-card.sass'

const ReviewCard: FC = (): JSX.Element =>
   <div className="review-card">
      <div className="review-card__person--image-wrap">
         <div className="review-card__person--image"/>
      </div>
      <div className="review-card__person">
         <div className="review-card__person--name">
            John Smith
         </div>
         <div className="review-card__person--review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate distinctio fuga hic incidunt ipsa neque nihil
               quisquam, quos sunt voluptas.
         </div>
      </div>
   </div>
export default ReviewCard
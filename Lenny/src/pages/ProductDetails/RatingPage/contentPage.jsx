// ! Rating Page Component
import "./style.scss"
import { ReactComponent as RatingIcon } from "../../../assets/image/icon/star-solid-icon.svg";
import Circle from "../../../components/Circle/circle";


const ContentPage = () => {
  return (
   
    <div className="products-rating">
    <div>
        <div className='content-title'>
            Product Reviews
        </div>
        <div className="rating-wrapper">
            <div className="currentRating">
                {/* <div className="circle-content"> */}
                <Circle />
                {/* </div> */}
                <div className="rating-group">
                    <div className="all-rating">
                        <RatingIcon />
                        <RatingIcon />
                        <RatingIcon />
                        <RatingIcon />
                        <RatingIcon />
                    </div>
                    <span className="text">
                        from 1,25k reviews
                    </span>
                </div>
            </div>
            <div className="progress-content">
                <div className="progress-bar-rating">
                    <div className="rating-common-text">
                        5.0 <RatingIcon />
                    </div>
                    <progress value="80" max="100"></progress>
                    <div className="feedback">
                        2823
                    </div>
                </div>
                <div className="progress-bar-rating">
                    <div className="rating-common-text">
                        4.0 <RatingIcon />
                    </div>
                    <progress value="50" max="100"></progress>
                    <div className="feedback">
                        38
                    </div>
                </div>
                <div className="progress-bar-rating">
                    <div className="rating-common-text">
                        3.0 <RatingIcon />
                    </div>
                    <progress value="10" max="100"></progress>
                    <div className="feedback">
                        4
                    </div>
                </div>
                <div className="progress-bar-rating">
                    <div className="rating-common-text">
                        2.0 <RatingIcon />
                    </div>
                    <progress value="0" max="100"></progress>
                    <div className="feedback">
                        0
                    </div>
                </div>
                <div className="progress-bar-rating">
                    <div className="rating-common-text">
                        1.0  <RatingIcon />
                    </div>
                    <progress value="0" max="100"></progress>
                    <div className="feedback">
                        0
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default ContentPage
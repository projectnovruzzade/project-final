import React from 'react'
import { ReactComponent as RatingIcon } from "../../../../assets/image/icon/star-solid-icon.svg";
import { ReactComponent as LikeIcon } from "../../../../assets/image/icon/like-icon.svg";
import { ReactComponent as DisLikeIcon } from "../../../../assets/image/icon/dislike-icon.svg";


const Comment = ({data}) => {

    // console.log(data);
    return (
        <div className="comment-box">
            <div className="comment-data">
                <div className="rating-group">
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                    <RatingIcon />
                </div>
                <div className="comment-title">
                    {data?.commentTitle}
                </div>
                <div className="comment-date">
                    {data?.commentDate}
                </div>
                <div className="comment-user">
                    <div className="user-profile">
                        <div className="profile-image">
                            <img src={data?.commentImage} alt="" />
                        </div>
                        <div className="user-name">
                           {data?.commentAuthor}
                        </div>
                    </div>
                    <div className="duration-comment">
                        <div className="btn like-btn">
                            <LikeIcon /> 82
                        </div>
                        <div className="btn dislike-btn">
                            <DisLikeIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment
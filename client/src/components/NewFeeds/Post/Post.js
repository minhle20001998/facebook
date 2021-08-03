/* eslint-disable */
import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import PublicIcon from '@material-ui/icons/Public';
import './Post.css'
import { caculateTimePost } from '../../../utils/date';
import { checkIfLiked } from '../../../utils/array';
import { likePost } from '../../../utils/api/postAPI';
export default function Post({ feed }) {

    const [newFeed, setFeed] = useState(feed)

    useEffect(() => {
        let timeout;
        function feedTimeUpdate() {
            setFeed({ ...newFeed, date: caculateTimePost(feed.createdAt) })
            timeout = setTimeout(feedTimeUpdate, 60000);
        }
        feedTimeUpdate();
        return () => {
            clearTimeout(timeout);
        }
    }, [])

    const styles = {
        topPost: {
            padding: "12px 16px 0px 16px",
            marginBottom: "12px"
        },
        postInfo: {
            padding: "10px 0px",
            margin: "0px 16px",
            height: "45px",
            borderBottom: "1px solid#ffffff1a"
        },
        likeImage: {
            height: "18px",
            width: "18px",
            marginRight: "8px"
        },
        likeCount: {
            fontSize: "14px",
            color: "#b0b3b8"
        },
        postFunctions: {
            margin: "8px 16px",
        }

    }

    const likeImage = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e";

    async function handleLike() {
        const post = await likePost({ UserUid: 1, PostId: newFeed.id })
        setFeed({ ...post, date: caculateTimePost(post.createdAt) });
    }

    return (
        <div className="post">
            <div className="d-flex flex-row align-items-center" style={styles.topPost}>
                <Avatar className="me-2" />
                <div style={{ height: "42px" }}>
                    <p className="m-0" style={{ fontSize: '14px', fontWeight: '600' }}>{newFeed.User.firstname}</p>
                    <div>
                        <span className="m-0 time-text">{(newFeed.date && newFeed.date) || 'time invalid'}</span>
                        <span className="m-0 time-text"> · </span>
                        <PublicIcon className="public-icon" />
                    </div>
                </div>
            </div>
            <div className="postText">
                {newFeed.content}
            </div>
            {newFeed.photo && <div className="post-photos"></div>}
            <div className="post-bottom">
                <div className="post-info d-flex justify-content-between" style={styles.postInfo}>
                    <div>
                        <img src={likeImage} alt="like icon" style={styles.likeImage} />
                        <span style={styles.likeCount}>{newFeed.Post_Likes.length || 0}</span>
                    </div>
                    <div>
                        <span style={styles.likeCount}>0 Comment</span>
                    </div>
                </div>
                <div className="post-funcs d-flex justify-content-between" style={styles.postFunctions}>
                    <div className="post-func" onClick={handleLike}>
                        <ThumbUpAltOutlinedIcon className={`post-icon like-icon ${checkIfLiked(newFeed.Post_Likes) ? 'liked' : ''}`} />
                        <p className={`m-0 ${checkIfLiked(newFeed.Post_Likes) ? 'liked' : ''}`}>Like</p>
                    </div>
                    <div className="post-func">
                        <ChatBubbleOutlineOutlinedIcon className="post-icon comment-icon" />
                        Comment
                    </div>
                    <div className="post-func">
                        <ReplyOutlinedIcon className="post-icon share-icon" />
                        Share
                    </div>
                </div>
            </div>
        </div>
    )
}

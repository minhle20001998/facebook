/* eslint-disable */
import React, { useState, useEffect, useCallback } from 'react'
import './Homepage.css'
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import NewFeeds from '../NewFeeds/NewFeeds';
import { postStatus, getStatus } from '../../utils/api/postAPI';
import PostDialog from './PostDialog/PostDialog';
export default function Homepage() {
    const [content, setContent] = useState("");
    const [feeds, setFeeds] = useState();
    const [isOpenDialog, setOpen] = useState(false);

    const styles = {
        addButtonBorder: {
            width: "42px",
            height: "42px",
            backgroundColor: "#242526"
        },
        addButtonBody: {
            width: "34px",
            height: "34px",
            backgroundColor: "#2e89ff"
        },
        hrStyle: {
            width: "100%",
            borderBottom: "2px solid #66686b",
            margin: "10px 0px 8px 0px"
        }
    }

    function toggleOpen() {
        setOpen(!isOpenDialog);
    }

    useEffect(() => {
        async function fetchStatus() {
            const feeds = await getStatus();
            setFeeds(feeds)
        }
        fetchStatus();
        return () => {
        }
    }, [])

    const handleSubmitStatus = useCallback(
        async (e) => {
            e.preventDefault();
            const data = await postStatus({ uid: 1, content })
            if (data.status === "OK") {
                toggleOpen();
                setContent("");
            }
            async function fetchStatus() {
                const feeds = await getStatus();
                setFeeds(feeds)
            }
            fetchStatus();
        },
        [content]
    );

    function setContentChildren(value) { setContent(value) }


    return (
        <main className="home-content">
            {isOpenDialog && <PostDialog
                open={isOpenDialog}
                handlePost={handleSubmitStatus}
                toggleOpen={toggleOpen}
                setContent={setContentChildren}
                content={content}
            />}
            <div className="stories">
                <div className="personal-story">
                    <div className="story-avatar"></div>
                    <div className="story-base">
                        <div className="d-flex flex-row align-items-center justify-content-center rounded-circle add-story" style={styles.addButtonBorder}>
                            <div className="d-flex flex-row align-items-center justify-content-center rounded-circle" style={styles.addButtonBody}>
                                <AddIcon className="add-story-btn" />
                            </div>
                        </div>
                        <p className="m-0">Create Story</p>
                    </div>
                </div>
            </div>
            <div className="status-form" onClick={toggleOpen}>
                <div className="d-flex flex-row ">
                    <Avatar className="side-avatar me-2" src="/static/images/avatar/1.jpg" />
                    <input className="w-100 status-input" placeholder="What's on your mind ?" type="text"
                        onInput={(e) => { setContent(e.target.value) }}
                        value={content}
                    />
                </div>
                <hr style={styles.hrStyle} />
                <div className="d-flex flex-row func-options">
                    <div className="func" >
                        <i className="live-video"></i>
                        <span>Live Video</span>
                    </div>
                    <div className="func">
                        <i className="photo-video"></i>
                        <span>Photo/Video</span>
                    </div>
                    <div className="func">
                        <i className="feeling-activity"></i>
                        <span>Feeling/Activity</span>
                    </div>
                </div>
            </div>
            {feeds && <NewFeeds feeds={feeds} />}
        </main>
    )
}

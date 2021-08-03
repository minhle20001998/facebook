import React from 'react'
import Post from './Post/Post'
export default function NewFeeds({ feeds }) {

    return (
        <div className="new-feeds">
            {feeds && feeds.map(feed => {
                return <Post key={feed.id} feed={feed} />
            })}
        </div>
    )
}

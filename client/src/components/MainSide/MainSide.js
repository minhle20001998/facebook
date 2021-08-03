import React from 'react';
import './MainSide.css';
import Avatar from '@material-ui/core/Avatar';
function MainSide(props) {

    const sideList = [
        {
            src: "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png",
            name: `Friends`
        },
        {
            src: "https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/YF1bztyGuX-.png",
            name: `Messenger`
        },
        {
            src: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png",
            name: `Groups`
        },
        {
            src: "https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png",
            name: `Event`
        },
        {
            src: "https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png",
            name: `Saved`
        },
    ]

    return <aside className="main-side position-fixed">
        <div>
            <div className="p-0">
                <div className="side-list d-flex flex-row align-items-center p-2">
                    <Avatar className="side-avatar me-2" src="/static/images/avatar/1.jpg" />
                    <span className="primary-text-color">Minh Le</span>
                </div>
                {sideList.map(l => {
                    return <div key={l.name} className="side-list d-flex flex-row align-items-center p-2">
                        <img className="sidebar-icons me-2" src={`${l.src}`} alt="messenger" />
                        <span className="primary-text-color">{`${l.name}`}</span>
                    </div>
                })}
            </div>
        </div>
    </aside>
}

export default MainSide;
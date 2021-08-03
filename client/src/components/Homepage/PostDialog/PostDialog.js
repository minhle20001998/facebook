import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { Avatar } from '@material-ui/core';
import './PostDialog.css'
export default function PostDialog(props) {
    return (
        <Dialog open={props.open} className="post-form">
            <DialogTitle id="form-dialog-title">
                <p className="post-form-title m-0">Create Post</p>
                <div className="cancel-btn" onClick={props.toggleOpen}>
                    <CloseIcon />
                </div>
            </DialogTitle>
            <DialogContent>
                <div className="d-flex align-items-center" style={{ padding: "16px 0px" }}>
                    <Avatar className="me-2" src="/static/images/avatar/1.jpg" />
                    <div>
                        <p className="m-0" style={{ color: "#e4e6eb", fontSize: "15px", fontWeight: "600" }}>Minh Lê</p>
                    </div>
                </div>
                <div>
                    <textarea className="status-textarea" onInput={(e) => { props.setContent(e.target.value) }} defaultValue={props.content} ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                    <i className="face-icon"></i>
                </div>
                <div className="d-flex justify-content-between align-items-center"
                    style={{ padding: '8px', border: '2px solid #3e4042', borderRadius: "8px", marginTop: "16px" }}
                >
                    <span style={{ color: "#e4e6eb", padding: "0 8px", fontSize: "15px" }}>Add to Your Post</span>
                    <div className="inner-post-func">
                        <div>
                            <i className="func-icons photos-videos"></i>
                        </div>
                        <div>
                            <i className="func-icons tag-friends"></i>
                        </div>
                        <div>
                            <i className="func-icons feeling"></i>
                        </div>
                        <div>
                            <i className="func-icons checkin"></i>
                        </div>
                        <div>
                            <i className="func-icons qa"></i>
                        </div>
                        <div>
                            <i className="func-icons more"></i>
                        </div>
                    </div>
                </div>
                <DialogActions className="p-0">
                    <button className={`post-btn w-100 ${(props.content).length > 0 ? "" : "disabled"}`} onClick={props.handlePost} disabled={props.content.length === 0}>Post</button>
                    {/* <button className="action-btn" id="close-btn" onClick={props.toggleOpen} >Close</button> */}
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

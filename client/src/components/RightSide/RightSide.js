import React from 'react'
import './RightSide.css'
export default function RightSide() {

    const img = 'https://scontent.fhan5-5.fna.fbcdn.net/v/t45.1600-4/cp0/q90/spS444/p296x100/166297574_6231676369892_6551472152284331841_n.png.jpg?_nc_cat=1&ccb=1-3&_nc_sid=67cdda&_nc_ohc=3smJJ2nqsnUAX8wyb06&_nc_ht=scontent.fhan5-5.fna&tp=31&oh=6316891a69af7908f6f2a787fb013f99&oe=60EBBB73';
    const avatar = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBg0QEBIPEA4QEBEQFRgQDRcQExAaFhUWFiATFRUYHSggGB4lGxgWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ0NDy0ZFRkrLSs3Ky0tLisrKzctNy0rNystLS0rKysrKy0rLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgYBB//EADQQAQACAAMFBQcCBwEAAAAAAAABAgMEEQUSITFhQVFxgbETIlKRocHRFDQyQnKCkuHxJP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A/TAGkAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAHVKTiW0iJmegOX2I1nSOM9F2mzL25zWv1lo5fLVy9eEce2Z5yauMzC2de8cdKx15/KE9dld9p8qtITVZ07Kj4p/wAUd9l2jlaJ8Y0aoaMHFyl8LnWdO+OMIHpVTNZGuNEzHu2747fGDUxijvFwpwbzW0aT69YcKgAAAAAAAAAAAAAAAAAA3Mjl/YYMfFPGfwx8vTfzFI77Q9ClWACKAAAAAAgzmXjMYWn80cpYUxuzMTzjg9IyNq4W5jxaOVo+sLEqiAqAAAAAAAAAAAAAAAALOz41zlPP0luMPZv7yvn6S3EqwARQAAAAABS2rTeyuvwzE/b7rqttGf8Ax316esAwwGmQAAAAAAAAAAAAAAAFrZ37ynn6S22FkJ0zlPH7S3UqwARQAAAAABibStM5u0azpGmnHlwhtsHPTrnL+P2WCABWQAAAAAAAAAAAAAAAE+SiZzNJiJmItHZybyHJ03MtSI7on5pkrQAgAAAAAAMDNxP6m+sTGtp5xz4t9U2nTeylp7Y0mPmsGKArIAAAAAAAAAAAAAAADc2fffylOnD5LLN2PicL1/uj0/DSZaAAAAAAAAFLa193LafFMR8uK6ydr4m9jVr8MeqwUAFZAAAAAAAAABQAAAAAEmXxpwMWLR/1t5XH/UYMW005xprrowGnsfE4Xr/d9vwlGkAigAAAAAIM3mP02Frprx056MPExJxMSbTzmdWhti/GlfGft+Wa1EAAAAAAAAAAABAAAAAABNlMb2GPW3ZynwlCA9LE6wKWysSb5eYn+WdIXWWgAAAAFbaN5plLadI+YMrOYvtszaezlHhCAGkABAAAAAAAAAAAAAAAAAAGxsmNMtPW0+kLqts+m5k6ddZ+c6rLLQAAAArbRjXJ38p+sLKPMU38C8d9Zj6A88A0yAAAAAAAAAAAAAAAAAAOqV37xEc5nQpSb20iJmejVyGS9jO9b+L0FXaxu1iO6NH0GVAAAAAAefzWH7LMWjrrHhKJt57KfqK6xwtHLr0lj4mHOFbS0TEtRHAAgAAAAAAAAAAAAPsRvTpHGei9l9mzfjf3Y7o5/wChVGtd+2kRMz0X8vsybcbzpHdHP5tHBwK4NdKxEes+aRNMR4WDXBrpWIhICKAAAAAAAAOcTDjErpaImOroBmZjZnbSfKftLPxMOcO2lomJ6vRuMTDjFrpaImOq6jzo0cxszTjSdek/aVC9JpbSYmJ6qOQBAAAAAH2OMg+LeVyNsbjPu1+s+ELeSyG5EWvxt2R2R+ZX01cRYGXrgR7sce+eMz5pQRQAAAAAAAAAAAAAAABHjYNcaulo19Y80gDIzOzpw+Nfej6x+VF6VTzmRjHiZrwv9J8VlTGMOrVmlpieEw5VAABpbKy2vvz4V/LOrG9aIjnM6PRYVPZ4cVjlEaFWOgGVAAAAAAAAAAAAAAAAAAAAAAUdqZffw9+P4q8+sMh6WY1h57Hw/ZY1q90rEqMBUTZX9zh/1R6t8EqwARQAAAAAAAAAAAAAAAAAAAAABibS/eW8vSAWJVUBUf/Z';

    const hrStyle = {
        width: "100%",
        border: "1px solid #66686b"
    }

    return (
        <aside className="right-side">
            <div className="sponsore">
                <p style={{ color: '#b0b3b8' }}>Sponsored</p>
                <div className="ads d-flex mb-3">
                    <img className="ads-img me-3" src={img} alt="ads" />
                    <span className="primary-text-color w-100">
                        <p className="mb-1"><b>Game Hot  miễn phí VIPCODE mỗi ngày</b></p>
                        <span style={{ fontSize: '12px', color: '#b0b3b8' }}>chanlong.gaba.vn</span>
                    </span>
                </div>
                <div className="ads d-flex mb-3">
                    <img className="ads-img me-3" src={img} alt="ads" />
                    <span className="primary-text-color w-100">
                        <p className="mb-1"><b>Game Hot  miễn phí VIPCODE mỗi ngày</b></p>
                        <span style={{ fontSize: '12px', color: '#b0b3b8' }}>chanlong.gaba.vn</span>
                    </span>
                </div>
            </div>
            <hr style={hrStyle} />
            <div className="contact">
                <p style={{ color: '#b0b3b8' }}>Contacts</p>
                <div className="people d-flex align-items-center mb-3">
                    <div className="chat-avatar me-2">
                        <img src={avatar} alt="" />
                        <div className="active-icon-border">
                            <div className="active-icon"></div>
                        </div>
                    </div>
                    <p className="primary-text-color m-0">User 1234</p>
                </div>
                <div className="people d-flex align-items-center mb-3">
                    <div className="chat-avatar me-2">
                        <img src={avatar} alt="" />
                        <div className="active-icon-border">
                            <div className="active-icon"></div>
                        </div>
                    </div>
                    <p className="primary-text-color m-0">User 1234</p>
                </div>
            </div>
        </aside>
    )
}


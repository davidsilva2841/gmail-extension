import React from 'react';





export default function EmailRow (props) {
    
    
    return (
        <div className="email-row">
            <span>
                From: {props.email.sender} | To: {props.email.sentTo}
            </span>
        </div>
    );
}

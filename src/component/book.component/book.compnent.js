import React from 'react';

import "./book.component.css";

export function BookComponent(props) {
    return (<div className="perspective">
        <div className="book-wrap">
            <div className="page book-content">end</div>
            <div className="page book-content book-content1">-------</div>
            <div className="page book-content book-content2">----</div>
            <div className="page book-content book-content3">---</div>
            <div className="page book-cover">{props.name}</div>
        </div>
    </div>)
}

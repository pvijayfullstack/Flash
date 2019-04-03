import React from "react";
import {version} from "../constants.js";

export function InfoBox(props) {
    return (
        <div className="modal-background">
            <div className="info-box">
                <div className="info-box-header">
                    <h2>Flash v{version}</h2>
                    by George Howarth
                    <i className="material-icons button-close" onClick={() => props.handleClose()}>close</i>
                </div>
                <div className="info-box-body">
                    <p>Create, manage and practise with your flashcards!</p>
                    <p>Tips:</p>
                    <ul>
                        <li>Hover over the + button to add a new category</li>
                        <li>Click the pen icon to edit a card</li>
                        <li>Bookmark a category for quick access</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
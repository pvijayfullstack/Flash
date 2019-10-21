import React from "react";
import { version, dataProtectionEmail, sourceCodeLink } from "../../constants";

export function InfoBox(props) {
    return (
        <div className="modal-background" onClick={props.handleClose}>
            <div className="modal info-box" onClick={(event) => event.stopPropagation()}>
                <div className="modal-header">
                    <h2>Flash v{version}{version.split(".")[0] < 1 && "-alpha"}</h2>
                    by George Howarth
                    <i className="material-icons button-close" onClick={props.handleClose}>close</i>
                </div>
                <div className="modal-body">
                    <p>Create, manage and practise with your own flashcards!</p>
                    <h3>Tips</h3>
                    <ul>
                        <li>Hover over the + button to add a new category</li>
                        <li>Click the pen icon to edit a card or category</li>
                        <li>Bookmark a category for quick access</li>
                        <li>Drag a flashcard or category to move it</li>
                        <li>The breadcrumb can also be clicked or dropped into</li>
                        <li>Click the graph icon on a category to take a quiz</li>
                        <li>Create your own account to make private flashcards</li>
                    </ul>
                    <p className="external-link">
                        <i className="material-icons">open_in_new</i>
                        <a href={sourceCodeLink}>
                            View source
                        </a> on GitHub
                    </p>
                    <p className="external-link">
                        <i className="material-icons">email</i>
                        Send a&nbsp;
                        <a href={dataProtectionEmail}>
                            data protection
                        </a> email
                    </p>
                </div>
            </div>
        </div>
    );
}
import React from "react";

export class FlashcardModal extends React.Component {
    render() {
        // Font size can be manipulated by ems in CSS media queries as well as here
        const textSize = Math.min(1, 1 - 0.003 * (this.props.text.length - 5));

        return (
            <div className="modal-background" onClick={() => this.props.handleExit()}>
                <div className={"card flashcard flashcard-modal"} style={this.props.styles} onClick={(event) => {
                    event.stopPropagation(); // Prevent parent from recieving click
                    this.props.handleFlip();
                }}>
                    <div className="flashcard-button" onClick={(event) => {
                        event.stopPropagation();
                        this.props.handleExit();
                    }}>
                        <i className="material-icons">close</i>
                    </div>
                    <span style={{fontSize: textSize + "em"}}>{this.props.text}</span>
                </div>
            </div>
        );
    }
}
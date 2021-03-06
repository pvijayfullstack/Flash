import React from "react";
import AutosizeInput from "react-input-autosize";

export class FlashcardEdit extends React.Component {

    render() {
        // Font size can be manipulated by ems in CSS media queries as well as here
        const textSize = Math.min(1, 1 - 0.004 * this.props.text.length);

        return (
            <div className="card flashcard card-edit" style={this.props.styles} onClick={(event) => event.stopPropagation()}>
                <div className="flashcard-button" onClick={event => {
                    event.stopPropagation();
                    this.props.handleSaveTextEdit();
                }}>
                    <i className="material-icons" >done</i>
                </div>
                <div className="flashcard-button" onClick={event => {
                    event.stopPropagation();
                    this.props.handleToggleReversible();
                }}>
                    <i className="material-icons" >{this.props.isReversible ? "sync" : "sync_disabled"}</i>
                </div>
                <div className="flashcard-button" onClick={event => {
                    event.stopPropagation();
                    this.props.handleDelete();
                }}>
                    <i className="material-icons" >delete</i>
                </div>
                <AutosizeInput
                    className="auto-size-input-wrapper"
                    type="text"
                    autoFocus
                    value={this.props.text}
                    minWidth="80"
                    style={{
                        fontSize: textSize + "em",
                        borderBottom: `2px solid ${this.props.styles.color.replace("1)", "0.6)")}` // Transparent version of text colour
                    }}
                    onChange={e => this.props.handleTextEdit(e.target.value)}
                    onClick={e => e.stopPropagation()}
                    onKeyDown={e => {
                        if (e.keyCode === 13) { // Enter
                            this.props.handleSaveTextEdit();
                        }
                    }}
                />
            </div>
        );
    }
}
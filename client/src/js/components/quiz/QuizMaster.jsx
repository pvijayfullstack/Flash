import React from "react";
import AutosizeInput from "react-input-autosize";

import { QuizTimer } from "./QuizTimer.jsx";
import { QuizFlashcard } from "./QuizFlashcard.jsx";
import * as util from "../../util";

export class QuizMaster extends React.Component {
    constructor(props) {
        super(props);

        let currentIndex = Math.floor(Math.random() * this.props.flashcards.length);

        var questionSide, answerSide;
        if (this.props.flashcards.length > 0) {
            if (this.props.flashcards[currentIndex].is_reversible && Math.random() > 0.5) {
                [questionSide, answerSide] = ["back", "front"];
            } else {
                [questionSide, answerSide] = ["front", "back"];
            }
        }

        this.state = {
            score: 0,
            currentIndex,
            questionSide,
            answerSide,
            enteredAnswer: "",
            timerState: "ready" // Either 'ready', 'running' or 'finished'
        };
    }

    render() {
        let flashcardComponent;

        if (this.props.flashcards.length <= 0) {
            // flashcardComponent = (
            //     <QuizFlashcard text="(No flashcards available)" colour={14423100} /> // Crimson colour
            // );
            flashcardComponent = (
                <div className="quiz-empty">
                    No flashcards available
                </div>
            );
        } else if (this.state.timerState === "ready") {
            flashcardComponent = (
                <button
                    className="quiz-start-btn"
                    onClick={() => this.setState({ timerState: "running" })}
                >
                    Click to start
                </button>
            );
        } else {
            var currentFlashcard = this.props.flashcards[this.state.currentIndex];
            flashcardComponent = (
                <QuizFlashcard
                    text={currentFlashcard[this.state.questionSide]}
                    colour={currentFlashcard.colour} />
            );
        }


        return (
            <div className="quiz-master">
                <div className="quiz-stats">
                    <div className="quiz-stat">
                        Score
                        <div>
                            {this.state.score}
                        </div>
                    </div>
                    <div className="quiz-stat">
                        Time left
                        <QuizTimer
                            length={60000}
                            onFinish={() => this.setState({ timerState: "finished" })}
                            running={this.state.timerState === "running"}
                        />
                    </div>
                </div>
                {flashcardComponent}
                {
                    (this.state.timerState === "running" && this.state.answerSide) &&
                    <div className="quiz-answer-entry">
                        <AutosizeInput
                            type="text"
                            value={this.state.enteredAnswer}
                            onChange={e => {
                                this.setState({ enteredAnswer: e.target.value });

                                if (e.target.value.toUpperCase() === currentFlashcard[this.state.answerSide].toUpperCase()) {
                                    this.nextFlashcard(1);
                                }
                            }}
                            placeholder="Enter your answer"
                            placeholderIsMinWidth
                            autoComplete="off"
                            spellCheck="false"
                            autoCorrect="off"
                            autoCapitalize="off"
                            autoFocus
                        />
                        {this.state.timerState === "running" &&
                            <button onClick={() => this.nextFlashcard(0)}>
                                Skip
                            </button>
                        }
                    </div>
                }
            </div>
        );
    }

    nextFlashcard(pointsFromLast) {
        this.setState(oldState => {
            let currentIndex;
            do {
                currentIndex = Math.floor(Math.random() * this.props.flashcards.length);
            } while (
                this.props.flashcards.length > 1
                && currentIndex === oldState.currentIndex
            );

            var questionSide, answerSide;
            if (this.props.flashcards.length > 0) {
                if (this.props.flashcards[currentIndex].is_reversible && Math.random() > 0.5) {
                    [questionSide, answerSide] = ["back", "front"];
                } else {
                    [questionSide, answerSide] = ["front", "back"];
                }
            }

            return {
                score: oldState.score + pointsFromLast,
                currentIndex,
                questionSide,
                answerSide,
                enteredAnswer: ""
            };
        });
    }
}
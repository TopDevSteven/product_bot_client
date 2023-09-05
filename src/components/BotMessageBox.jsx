import React from "react";
import "./BotMessageBox.css";
import { SyncLoader } from "react-spinners";

const BotMesssageBox = ({message}) => {
    return (
        <div className="bot-message">
            {
                message === "LOADING" 
                ? <p><SyncLoader color="#d2d2d2" size={12}/></p> 
                : message.split("\n").map((item, idx) => 
                    <p key={idx}>
                        { 
                            item.replace(/(http:\/\/[^\s]+)/g, (match) => 
                                <a href={match} target="_blank" rel="noopener noreferrer">{match}</a>
                            )
                        }
                    </p>)
            }
        </div>
    )
}

export default BotMesssageBox;
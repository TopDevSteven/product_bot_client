import React from "react";
import "./BotMessageBox.css";
import { SyncLoader } from "react-spinners";

const BotMessageBox = ({ message }) => {
    const renderMessage = (text) => {
        const urlRegex = /(http:\/\/|https:\/\/)\S+/g;
        const parts = text.split(urlRegex);

        return parts.map((part, idx) => {
            if (urlRegex.test(part)) {
                const url = part.trim();
                return (
                    <a key={idx} href={url} target="_blank" rel="noopener noreferrer">
                        {url}
                    </a>
                );
            } else {
                return <span key={idx}>{part}</span>;
            }
        });
    };

    return (
        <div className="bot-message">
            {message === "LOADING" ? (
                <p>
                    <SyncLoader color="#d2d2d2" size={12} />
                </p>
            ) : (
                <div>{renderMessage(message)}</div>
            )}
        </div>
    );
};

export default BotMessageBox;
import { useState, useEffect } from "react";
import { http } from "../../Libs/http";
import MessagePreview from "../../components/MessagePreview";

import styles from "./Messages.module.scss"

const Messages = () => {
    const [ messagesList, setMessagesList ] = useState([]);

    useEffect(() => {
        http("/messages").then((messagesList) => setMessagesList(messagesList));
    }, []);

    return (
        <div className={styles.Messages}>
            {messagesList.map((message) => (
                <MessagePreview data={message} key={message.id}/>
            ))}
        </div>
    );
}

export default Messages;

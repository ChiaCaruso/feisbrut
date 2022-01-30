import { useState, useEffect } from "react";
import { httpPost } from "../../Libs/http";
import Banner from '../Banner';

import styles from "./CreatePost.module.scss";

const CreatePost = () => {

    const [authorInput, setAuthorInput] = useState("");
    const [imgInput, setImgInput] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const [formPostObj, setFormPostObj] = useState({})

    // const handleAuthorInput = (event) => setAuthorInput(event.target.value);
    // const handleimgInput = (event) => setImgInput(event.target.value);
    // const handlemessageInput = (event) => setMessageInput(event.target.value);


    const [changeBanner, setChangeBanner] = useState(false);


    const handleSendBtn = (event) => {
        event.preventDefault();
        httpPost("/posts", formPostObj);

        setChangeBanner(true);
        setTimeout(() => {
            setChangeBanner(false);
        }, 3000);
    };



    useEffect(() => {

        setFormPostObj({
            author: authorInput,
            text: messageInput,
            date: new Date().toISOString(),
            photo: imgInput,
        });

    }, [authorInput, imgInput, messageInput]);

    return (
        <div className={styles.createpost}>
            <form>
                <div className={styles.__author}>
                    <input
                        value={authorInput}
                        onChange={(e) => setAuthorInput(e.target.value)}
                        type="text"
                        name="author"
                        id="author"
                        placeholder="Author"
                        required
                    />
                    <input
                        value={imgInput}
                        onChange={(e) => setImgInput(e.target.value)}
                        type="text"
                        name="img"
                        id="img"
                        placeholder="Img URL"
                    />
                    <button onClick={handleSendBtn} type="submit">SEND</button>
                    {changeBanner && <Banner color="green" text="Post aggiunto" />}

                </div>
                <textarea
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    required >
                </textarea>




            </form>
        </div>
    );
};

export default CreatePost;
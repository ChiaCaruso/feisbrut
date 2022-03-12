import { useState } from "react";
import styles from './Post.module.scss';
import { ViewDate } from "../ViewDate";
import { httpDelete } from '../../Libs/http';
import Banner from '../Banner';

const Post = (props) => {

    const data = props.data || {
        author: 'user',
        text: 'Text',
        date: new Date(),
        photo: 'https://images.unsplash.com/photo-1639519615117-828e9f0fb093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    };

    const [changeBanner, setChangeBanner] = useState(false);

    const handleDeletePost = (event) => {
        event.preventDefault();
        httpDelete(`/posts/${props.data.id}`).then(() => { });
        setChangeBanner(true);
        setTimeout(() => {
            setChangeBanner(false);
            window.location.href = "/";
        }, 3000);


    };

    return (
        <article className={styles.post}>
            {changeBanner && <Banner color="red" text="Post eliminato" />}
            <button onClick={handleDeletePost} className={styles.deleteBtn}>X</button>

            <h3>{data.author}</h3>
            <p>
                <ViewDate date={data.date} />
            </p>
            <p>{data.text}</p>

            {data.photo ? <img src={data.photo} alt={data.author} /> : <></>}

        </article>
    );
};

export { Post };


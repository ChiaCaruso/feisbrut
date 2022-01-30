import { useState, useEffect } from "react";
import FriendPreview from "../../components/FriendPreview";
import MessagePreview from "../../components/MessagePreview";
import { Post } from "../../components/Post";
import { http } from "../../Libs/http";
import { Link } from "react-router-dom"
import styles from "./Home.module.scss";

const friends = []

const messages = []

const Posts = []


const Home = () => {

    const [friendsPreview, setFriendsPreview] = useState(friends);
    const [allPosts, setAllPosts] = useState(Posts);
    const [messagesPreview, setMessagesPreview] = useState(messages);

    useEffect(() => {
        http('/friends?_limit=4').then((data) => setFriendsPreview(data));

        http('/messages?_limit=4').then((data) => setMessagesPreview(data));

        http('/posts').then((data) => setAllPosts(data.reverse()));
    }, []);



    return (
        <section className={styles.home}>
            <h3>Benvenuto utente</h3>
            <div className={styles.grid}>
                <aside>
                    {friendsPreview.map((friend, index) => (
                        <FriendPreview key={index} data={friend} />
                    ))}
                </aside>
                <main>
                    <Link to="/new-post">
                        <button className={styles.createPostBtn}>Create new post</button></Link>
                    {allPosts.map((post, index) => (
                        <Post key={index} data={post} />
                    ))}
                </main>
                <aside>
                    {messagesPreview.map((message, index) => (
                        <MessagePreview key={index} data={message} />
                    ))}
                </aside>
            </div>
        </section>
    )
};

export default Home;
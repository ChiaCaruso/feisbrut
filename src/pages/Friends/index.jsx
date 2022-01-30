import { useState, useEffect } from "react";
import CreateFriend from "../../components/CreateFriend";
import FriendPreview from "../../components/FriendPreview";
import { http } from "../../Libs/http";
import Pagination from "./../../components/Pagination"

import styles from "./Friends.module.scss"

const Friends = () => {

    const [acutualFriendList, setAcutualFriendList] = useState([]);
    const [totButtonNum, setTotButtonnum] = useState([]);

    useEffect(() => {
        http(`/friends?_page=${totButtonNum}`).then((friendsList) =>
            setAcutualFriendList(friendsList)
        );
    }, [totButtonNum]);


    return (
        <div className={styles.Friends}>
            <CreateFriend />

            <div className={styles.__friendsList}>
                {acutualFriendList.map((friend) => (
                    <FriendPreview key={friend.id} data={friend} />
                ))}
            </div>

            <div className={styles.paginationList}>
                <Pagination setActualButtonNum={setTotButtonnum} />
            </div>
        </div>
    );
};

export default Friends;

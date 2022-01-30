import { useReducer } from "react";
import { httpPost } from "../../Libs/http";
import Banner from '../Banner';

import styles from "./CreateFriend.module.scss";

const INIT = {
    formFriend: {
        friend: '',
        photo: ''
    },
    showBanner: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "update-friend":
            return { ...state, formFriend: { ...state.formFriend, [action.field]: action.payload } }
        case "show-banner":
            return { ...state, showBanner: !state.showBanner };
        default:
            return state;
    };
};



const CreateFriend = () => {

    const [state, dispatch] = useReducer(reducer, INIT);


    const handleSendBtn = (event) => {
        event.preventDefault();
        httpPost("/friends", state.formFriend);
        dispatch({ type: "show-banner", payload: !state.showBanner });


        setTimeout(() => {
            dispatch({ type: "show-banner", payload: false })
        }, 3000);

    };


    return (
        <div className={styles.createfriend}>
            <form>
                <div className={styles.__friend}>
                    <input
                        value={state.formFriend.friend}
                        onChange={(e) => dispatch({ type: "update-friend", field: e.target.name, payload: e.target.value })}
                        type="text"
                        name="friend"
                        id="friend"
                        placeholder="Friend Name"
                        required
                    />
                    <input
                        value={state.formFriend.photo}
                        onChange={(e) => dispatch({ type: "update-friend", field: e.target.name, payload: e.target.value })}
                        type="text"
                        name="photo"
                        id="photo"
                        placeholder="Friend Photo"
                    />
                    <button onClick={handleSendBtn} type="submit">ADD</button>
                    {state.showBanner && <Banner color="green" text="Amico aggiunto" />}


                </div>




            </form>
        </div>
    );
};

export default CreateFriend;
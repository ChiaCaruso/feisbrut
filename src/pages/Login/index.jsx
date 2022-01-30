
import { useReducer } from "react";
import styles from "./Login.module.scss";

const INIT = {
    username: '',
    password: ''
}



const reducer = (state, action) => {
    switch (action.type) {
        case "update-input":
            return { ...state, [action.field]: action.payload };
        default:
            return state;
    }
}



const Login = (props) => {

    const [state, dispatch] = useReducer(reducer, INIT);

    const nameUser = state.username;

    const onSubmit = (event) => {
        event.preventDefault();
        props.setNameUser(nameUser)
    }

    return (
        <div className={styles.boxLogin}>
            <form>
                <label htmlFor="username">Username:</label>
                <input
                    value={state.userName}
                    onChange={(e) => dispatch({ type: "update-input", field: e.target.name, payload: e.target.value })}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Username"
                    required />

                <label htmlFor="password">Password:</label>
                <input
                    value={state.password}
                    onChange={(e) => dispatch({ type: "update-input", field: e.target.name, payload: e.target.value })}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    required />

                <button type="submit" onClick={onSubmit} className={styles.formBtn}>LOGIN</button>
            </form>

        </div>
    );
};

export default Login;
import styles from './MessagePreview.module.scss';
import { ViewDate } from "../ViewDate";

const MessagePreview = (props) => {

    const data = props.data || {
        text: 'Lorem ipsum',
        date: new Date(),
        sender: 'User'
    };


    return (
        <div className={styles.message}>
            <h5>{data.sender}</h5>
            <p>
                <ViewDate date={data.date} />
            </p>
            <p>{data.text}</p>
        </div>
    )
}

export default MessagePreview;
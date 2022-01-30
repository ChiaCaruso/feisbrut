import styles from './FriendPreview.module.scss'

const FriendPreview = (props) => {

    const data = props.data || {
        name: 'Friend',
        photo: 'https://randomuser.me/api/portraits/lego/8.jpg'
    };

    return (
        <div className={styles.friend}>
            <img src={data.photo} alt={data.name}></img>
            {data.photo ? <p>{data.name}</p> : <></>}
        </div>
    )
};

export default FriendPreview;
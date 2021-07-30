const Social = ({media, text}) => {
    return (
        <div className='social-container'>
            <div className={media}></div>
            <div id='social-text'>{text}</div>
        </div>
    )
}

export default Social

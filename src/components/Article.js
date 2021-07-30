import Button from './Button'

const Article = () => {
    return (
        <div className='Article'>
            <p>Matching security professionals with organisations in need</p>
            <div className='button-container'>
                <Button text='I am a Security Professional'/>
                <div></div>
                <Button text='I need a Security Professional'/>
            </div>
        </div>
    )
}

export default Article

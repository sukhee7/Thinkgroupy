import Social from './Social'
import Copyright from './Copyright'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='social-super-container'>
                <Social media='fa fa-facebook' text='Thinkgroupy'/>
                <Social media='fa fa-instagram' text='Thinkgroupy'/>
                <div className='social-container'><i className="fa material-icons">email</i><div id='social-text'>Thinkgroupy</div></div>
                <Social media='fa fa-linkedin-square' text='Thinkgroupy'/>
                
            </div>
            <Copyright/>
        </div>
    )
}

export default Footer

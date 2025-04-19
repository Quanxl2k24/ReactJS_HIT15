import './Card.scss'

function Card(){
    return (
        <div className='containner'>
            <div className="profile-card">
                <div className='profile-card__img'>
                
                </div>
                <h1 className='profile-card__title'>John Doe</h1>
                <div className="profile-card__content">
                <p>Fontend dev</p>
                <p>|</p>
                <p>React</p>
                </div>
                <div className='profile-card__button'>
                <button className='profile-card__button-item profile-card__button-item--follow'>Follow</button>
                <button className='profile-card__button-item profile-card__button-item--message'>Message</button>
                </div>
            
             </div>
        </div>
    );
}   
export default Card
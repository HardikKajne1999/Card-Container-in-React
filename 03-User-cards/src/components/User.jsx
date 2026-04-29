import thor from '../assets/thor.jpg'

export default function User({availability,name,pay,img,role,skills1,skills2,skills3,info,company1,company2}){
    return (
        <>
            <div className="user">
                <div className="top">
                    <p className ='availability'>{availability?'Available':'Offline'}</p>    
                    <p className="pay">{pay}</p>
                </div>
                <div className="image-container">
                    <img src={img} alt="" />
                </div>
                <div className="info">
                    <h2>{name}</h2>
                    <p>{role}</p>
                    <p className='company'>{company2 == 'Freelancer'? <i className="ri-user-line"></i>:<i className="ri-government-line"></i>}&nbsp;&nbsp;{company2}</p>
                </div>
                <div className="skills">
                    <p>{skills1}</p>
                    <p>{skills2}</p>
                    <p>{skills3}</p>
                </div>
                <p style={{textAlign:'center', marginBlock:'0.85rem'}}>{info}</p>

                <div className="user-btn">
                    <button>VIEW PROFILE</button>
                </div>

            </div>                    
        </>
    )
}
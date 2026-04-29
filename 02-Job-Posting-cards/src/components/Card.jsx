import '../index.css'

export default function Card({img,company,jobTitle,tag1,tag2,timeOfPost,amount,location}){
    return (
        <>
        <div className="card">
            <div className="top">
                <div className="img-container">
                    <img src={img} alt="" />
                </div>
                <div className="saveBtn">
                    Save<i className="fa-regular fa-bookmark"></i>
                </div>
            </div>
            <div className="middle">
                <h2 className='companyName'>{company} <span className='time'>{timeOfPost}</span></h2>
                <h1 className='jobRole'>{jobTitle}</h1>
                <span className='tile'>{tag1}</span>
                <span className='tile'>{tag2}</span>
            </div>
            <div className="bottom">
                <div className="bottom-left">
                    <p className="amount">{amount}</p>
                    <p className="location">{location}</p>
                </div>
                <button className="btn">Apply now</button>
            </div>
        </div>
        </>
    )
}
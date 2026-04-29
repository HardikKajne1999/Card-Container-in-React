import thor from '../assets/thor.jpg'
import olsen from '../assets/olsen.jpg'
import captain from '../assets/captain.jpg'
import deadpool from '../assets/deadpool.jpg'
import ironman from '../assets/ironman.jpg'
import natasha from '../assets/natasha.jpg'

import User from './User.jsx';

export default function UserContainer(){

    const users =  [
        {
            availability: false,
            name : 'Ryan Reynolds',
            pay: '$55/hr',
            img: deadpool,
            role: 'Hollywood Actor',
            company: [<i className="ri-user-line"></i>,'Freelancer'],
            skills: ['Superhero', 'Acting', 'Dancing'],
            info: "Ryan Reynolds aka Wade Wilson is well known for his role as Deadpool. He claimed he is Marvel's JESUS."
        },
        {
            availability: false,
            name : 'Scarlett Johnson',
            pay: '$60/hr',
            img: natasha,
            role: 'Hollywood Actress',
            company: [<i className="ri-government-line"></i>,'Governer Ross'],
            skills: ['Female Lead', 'Acting', 'Team Worker'],
            info: 'Scarlett is admired for her work in Marvel movies as Natasha Romanoff and also her stand alone movie Black Widow.'
        },
        {
            availability: true,
            name : 'Chris Evans',
            pay: '$80/hr',
            img: captain,
            role: 'Hollywood Actor',
            company: [<i className="ri-user-line"></i>,'Freelancer'],
            skills: ['Righteousness','Acting', 'Team Leader'],
            info: 'Chris Evans is famous for his role as Captain Steve Rogers in Avengers franchise and his standalone films.'
        },
        {
            availability: false,
            name : 'Chris Hemsworth',
            pay: '$60/hr',
            img: thor,
            role: 'Hollywood Actor',
            company: [<i className="ri-user-line"></i>,'Freelancer'],
            skills: ['Tough Guy', 'Acting', 'Caring'],
            info: 'Chris is known for his role as Thor (Toofan ka Neta) in Avengers franchise and standalone movies'
        },
        {
            availability: true,
            name : 'Robert Downey Jr',
            pay: '$80/hr',
            img: ironman,
            role: 'Hollywood Actor',
            company: [<i className="ri-government-line"></i>,'Governer Ross'],
            skills: ['Acting', 'Funny', 'Billionare'],
            info: 'Robert Downey Jr is famous for his role as Tony Stark aka Iron Man, in the Avengers franchise and separate stand alone films.'
        },
        {
            availability: false,
            name : 'Elizabeth Olsen',
            pay: '$55/hr',
            img: olsen,
            role: 'Hollywood Actress',
            company: [<i className="ri-user-line"></i>,'Freelancer'],
            skills: ['Humble', 'Acting', 'Jolly'],
            info: 'Elizabeth Olsen is known for her work in Marvel movies as Scarlett Witch.'
        }
    ]
    
    return (
        <>
        <div className="user-container">
            {users.map(function(elem,index){
                return (
                <div key={index}>
                    <User availability={elem.availability} name={elem.name} pay={elem.pay} img={elem.img} role={elem.role}  skills1={elem.skills[0]} skills2={elem.skills[1]} skills3={elem.skills[2]} info={elem.info} company1={elem.company[0]} company2={elem.company[1]}/>
                </div>
                )
            })}
        </div>
            {/* user.map(function(hero,index){
                (
                    <div key={index}>
                        <User />
                    </div>
                )
            }) */}
        </>
    )
}
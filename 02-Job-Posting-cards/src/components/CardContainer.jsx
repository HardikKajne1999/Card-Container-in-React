import apple from '../assets/apple.png'
import google from '../assets/google.png'
import amazon from '../assets/amazon.png'
import dribble from '../assets/dribble.webp'
import airbnb from '../assets/airbnb.png'
import figma from '../assets/figma.webp'

import Card from './Card.jsx';

export default function CardContainer(){
    let cardContainer = {
        padding: '2rem',
        backgroundColor : '#000',
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
    }

    const jobOpenings = [
        {
            img: amazon, 
            company: 'Amazon',
            jobTitle: 'Graphics Designer', 
            info: ['Part time', 'Senior Level'], 
            timeOfPost: '12 days ago', 
            amount: '$32/hr', 
            location: 'New York, USA'
        },
        {
            img: google, 
            company: 'Google',
            jobTitle: 'Senior UI/UX Designer', 
            info: ['Part time', 'Flexible schedule'], 
            timeOfPost: '1 month ago', 
            amount: '$10/hr', 
            location: 'Gurugram, India'
        },
        {
            img: dribble, 
            company: 'Dribble',
            jobTitle: 'Senior Motion Designer', 
            info: ['Contract', 'Remote'], 
            timeOfPost: '2 days ago', 
            amount: '$14/hr', 
            location: 'Mumbai, India'
        },
        {
            img: figma, 
            company: 'Figma',
            jobTitle: 'UX Designer', 
            info: ['Full time', 'In office'], 
            timeOfPost: '15 days ago', 
            amount: '$35/hr', 
            location: 'Texas, USA'
        },
        {
            img: airbnb, 
            company: 'Airbnb',
            jobTitle: 'Junior UI/UX Designer', 
            info: ['Contract', 'Remote'], 
            timeOfPost: '1 hour ago', 
            amount: '$12/hr', 
            location: 'Pune, India'
        },
        {
            img: apple, 
            company: 'Apple',
            jobTitle: 'Full Stack Developer', 
            info: ['Full time', 'Flexible Schedule'], 
            timeOfPost: '3 days ago', 
            amount: '$10/hr', 
            location: 'Nagpur, India'
        }
    ]
    return (
        <>
            <div style={cardContainer}>

            {jobOpenings.map( (job,index)=> {
                return (
                    <div key= {index}>
                        <Card img={job.img} company={job.company} jobTitle={job.jobTitle} tag1={job.info[0]} tag2={job.info[1]} timeOfPost={job.timeOfPost} amount = {job.amount} location={job.location}/>
                    </div>
                )
            })}
            </div>
        </>
    )
}
import CardTitle from "./CardTitle.jsx"
import CardDescription from './CardDescription.jsx'
import CardImg from './CardImg.jsx'
import CardPrice from './CardPrice.jsx'

export default function Card({index}){
    let card = {
        // textAlign: 'center',
        borderRadius: '1.5rem',
        border: '0.15rem solid #fff',
        height: '25rem',
        width: '18rem',
        padding: '2rem 1rem',
        position:'relative',
        overflow: 'hidden'
    }
    return (
        <>
            <div style = {card}>
                <CardTitle index={index}/>
                <CardDescription index={index}/>
                <CardImg index={index}/> 
                <CardPrice index={index}/>   
            </div>        
        </>
    )
}
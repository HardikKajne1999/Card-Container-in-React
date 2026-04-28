import Card from './Card.jsx';

export default function CardContainer(){
    let cardContainer = {
        padding: '2rem',
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
    return (
        <>
            <div style={cardContainer}>
                <Card index = {0}/>
                <Card index = {1}/>
                <Card index = {2}/>
                <Card index = {3}/>
            </div>
        </>
    )
}
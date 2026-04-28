import mouse from '../assets/mouse.jpg'
import keyboard from '../assets/keyboard.jpg'
import cpu from '../assets/cpu.jpg'
import monitor from '../assets/monitor.jpg'

export default function CardImg({index}){
    let imgContainer = {
        width: '15rem',
        height: '12rem',
        backgroundColor: 'pink'
    }
    let img = {
        height: '100%',
        margin: 'auto',
        maxWidth: '100%',
        objectFit: 'cover',
        display: 'block'
    }
    let imgArr = [mouse,keyboard,cpu,monitor];
    return (
        <>
            <div style={imgContainer}>
                <img style={img} src={imgArr[index]} />
            </div>
        </>
    )
}
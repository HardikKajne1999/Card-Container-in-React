export default function CardDescription({index}){
    let arr = [ ['8000 DPI','Good mouse'],['feels life magic','sets vibe'],['useful for gaming','high tech processing'],['slim','perfect for office']];
    let ulStyle = {
        display: 'block',
        marginInline: 'auto',
        // listStyle: 'none',
        // backgroundColor: "grey",
        width: '60%',
        marginBlock: '1.5rem'
    } 
    return (
        <>
            <ul style={ulStyle}>
                <li>{arr[index][0]}</li>
                <li>{arr[index][1]}</li>
            </ul>
        </>
    )
}
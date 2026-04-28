export default function CardPrice({index}){
    let oldPrices = [234,4321,321,564];
    let newPrices = [180,320,100,400];
    let oldStyle = {
        textDecoration: 'line-through'
    }
    let newStyle = {
        fontWeight: 'bold'
    }
    let styles = {
        padding: '1rem',
        position: 'absolute',
        backgroundColor: 'brown',
        height: '3rem',
        width: '100%',
        bottom: '0%',
        left: '0%',
        textAlign: 'center'
    }
    return (
        <>
            <div style={styles}>
                <p>
                    <span style={oldStyle}>Rs.{oldPrices[index]}</span>
                    &nbsp;&nbsp;&nbsp;
                    <span style={newStyle}>Rs.{newPrices[index]}</span>
                </p>
            </div>
        </>
    );
}
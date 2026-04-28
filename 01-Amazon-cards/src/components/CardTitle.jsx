export default function CardTitle({index}){
    let arr = ['Logitech mouse','rainbow keyboard','powerful cpu','nextgen monitor'];
    let h1Style = {
        fontSize: '1.25rem',
        textAlign: 'center',
        textDecoration: 'underline'
    }
    return (
        <>
            <h1 style={h1Style}>{arr[index].toUpperCase()}</h1>
        </>
    )
}
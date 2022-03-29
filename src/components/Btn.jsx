const Btn = (props) => {
    return (
        <button type="button" className={`btn border border-primary text-primary m-1 ${props.className}`} onClick={props.onClick}>{props.text}</button>
    )
}


export default Btn;
const Btn = (props) => {
    return (
        <button type="button" className="btn border border-primary text-primary m-1" onClick={props.onClick}>{props.text}</button>
    )
}


export default Btn;
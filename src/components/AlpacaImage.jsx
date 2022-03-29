import {background, neck, nose, mouth, ears, eyes, hair, leg, acc} from './images';

const AlpacaImage = (props) => {
    return (
        <div className="alpaca-image">
            <img src={props.bg} alt="default background" />
            <img src={props.neck} alt="default neck" />
            <img src={nose} alt="default nose" />
            <img src={props.mouth} alt="default mouth" />
            <img src={props.ears} alt="default ears" />
            <img src={props.hair} alt="default hair" />
            <img src={props.eyes} alt="default eyes" />
            <img src={props.leg} alt="default leg" />
            {/* Accessories */}
            <img src={props.acc} alt="" />
        </div>
    )
}


export default AlpacaImage;
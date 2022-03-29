import {background, neck, nose, mouth, ear, eye, hair, leg, acc} from './images';

const AlpacaImage = () => {
    return (
        <div className="alpaca-image">
            <img src={background.default} alt="default background" />
            <img src={neck.default} alt="default neck" />
            <img src={nose} alt="default nose" />
            <img src={mouth.default} alt="default mouth" />
            <img src={ear.default} alt="default ears" />
            <img src={hair.default} alt="default hair" />
            <img src={eye.default} alt="default eyes" />
            <img src={leg.default} alt="default leg" />
            {/* Accessories */}
            <img src={acc.default} alt="" />
        </div>
    )
}


export default AlpacaImage;
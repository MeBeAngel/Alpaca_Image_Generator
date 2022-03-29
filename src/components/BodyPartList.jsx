import Btn from '../components/Btn';

const BodyPartList = (props) => {
    return (
        <>
            <div className="d-flex d-md-block flex-column justify-content-center align-items-center mb-4">
                <h6 className="text-uppercase">Accessorize the alpaca's</h6>
                <div className="row">
                    <div className="col">
                        <Btn className={props.className}  text="Hair" onClick={props.hairOnClick} />
                        <Btn text="Ears" onClick={props.earsOnClick} />
                        <Btn text="Eyes" onClick={props.eyesOnClick} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Mouth" onClick={props.mouthOnClick} />
                        <Btn text="Neck" onClick={props.neckOnClick} />
                        <Btn text="Leg" onClick={props.legOnClick} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Accesories" onClick={props.accOnClick} />
                        <Btn text="Background" onClick={props.bgOnClick} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default BodyPartList;
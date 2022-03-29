import Btn from '../components/Btn';

const BodyPartList = () => {
    return (
        <>
            <div className="d-flex d-md-block flex-column justify-content-center align-items-center mb-4">
                <h6 className="text-uppercase">Accessorize the alpaca's</h6>
                <div className="row">
                    <div className="col">
                        <Btn text="Hair"/>
                        <Btn text="Ears" />
                        <Btn text="Eyes" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Mouth" />
                        <Btn text="Neck" />
                        <Btn text="Leg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Accesories" />
                        <Btn text="Background" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default BodyPartList;
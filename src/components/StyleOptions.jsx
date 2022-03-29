import Btn from './Btn';

const HairStyles = (props) => {
    return (
        <>
            <div className="d-flex d-md-block flex-column justify-content-center align-items-center">
                <h6 className="text-uppercase">Style</h6>
                <div className="row">
                    <div className="col">
                        <Btn text="Default" onClick={props.defaultOnClick}/>
                        <Btn text="Bangs" onClick={props.bangsOnClick}/>
                        <Btn text="Curls" onClick={props.curlsOnClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Elegant" onClick={props.elegantOnClick}/>
                        <Btn text="Fancy" onClick={props.fancyOnClick}/>
                        <Btn text="Quiff" onClick={props.quiffOnClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Short" onClick={props.shortOnClick}/>
                    </div>
                </div>
            </div>
        </>
    )
}


const EarsStyles = (props) => {
    return (
        <>
            <div className="d-flex d-md-block flex-column justify-content-center align-items-center">
                <h6 className="text-uppercase">Style</h6>
                <div className="row">
                    <div className="col">
                        <Btn text="Default" onClick={props.defaultOnClick}/>
                        <Btn text="Tilt-Backward" onClick={props.backOnClick}/>
                        <Btn text="Tilt-Forward" onClick={props.forwardOnClick}/>
                    </div>
                </div>
            </div>
        </>
    )
}


const EyesStyles = (props) => {
    return (
        <>
            <div className="d-flex d-md-block flex-column justify-content-center align-items-center">
                <h6 className="text-uppercase">Style</h6>
                <div className="row">
                    <div className="col">
                        <Btn text="Default" onClick={props.defaultOnClick}/>
                        <Btn text="Angry" onClick={props.angryOnClick}/>
                        <Btn text="Naughty" onClick={props.naughtyOnClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Panda" onClick={props.pandaOnClick}/>
                        <Btn text="Smart" onClick={props.smartOnClick}/>
                        <Btn text="Star" onClick={props.starOnClick}/>
                    </div>
                </div>
            </div>
        </>
    )
}


const MouthStyles = (props) => {
    return (
        <>
            <div className="d-flex d-md-block flex-column justify-content-center align-items-center">
                <h6 className="text-uppercase">Style</h6>
                <div className="row">
                    <div className="col">
                        <Btn text="Default" onClick={props.defaultOnClick}/>
                        <Btn text="Astonished" onClick={props.astonishedOnClick}/>
                        <Btn text="Eating" onClick={props.eatingOnClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Laugh" onClick={props.laughOnClick}/>
                        <Btn text="Tongue" onClick={props.tongueOnClick}/>
                    </div>
                </div>
            </div>
        </>
    )
}


const NeckStyles = (props) => {
    return (
        <>
            <div className="d-flex d-md-block flex-column justify-content-center align-items-center">
                <h6 className="text-uppercase">Style</h6>
                <div className="row">
                    <div className="col">
                        <Btn text="Default" onClick={props.defaultOnClick}/>
                        <Btn text="Bend-Backwards" onClick={props.backOnClick}/>
                        <Btn text="Bend-Forward" onClick={props.forwardOnClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Thick" onClick={props.thickOnClick}/>
                    </div>
                </div>
            </div>
        </>
    )
}


const LegStyles = (props) => {
    return (
        <>
            <div className="d-flex d-md-block flex-column justify-content-center align-items-center">
                <h6 className="text-uppercase">Style</h6>
                <div className="row">
                    <div className="col">
                        <Btn text="Default" onClick={props.defaultOnClick}/>
                        <Btn text="Bubble-Tea" onClick={props.teaOnClick}/>
                        <Btn text="Cookie" onClick={props.cookieOnClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Game-Console" onClick={props.gameOnClick}/>
                        <Btn text="Tilt-Backward" onClick={props.backOnClick}/>
                        <Btn text="Tilt-Forward" onClick={props.forwardOnClick}/>
                    </div>
                </div>
            </div>
        </>
    )
}


const AccStyles = (props) => {
    return (
        <>
            <div className="d-flex d-md-block flex-column justify-content-center align-items-center">
                <h6 className="text-uppercase">Style</h6>
                <div className="row">
                    <div className="col">
                        <Btn text="Default" onClick={props.defaultOnClick}/>
                        <Btn text="Earings" onClick={props.earingsOnClick}/>
                        <Btn text="Flower" onClick={props.flowerOnClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Glasses" onClick={props.glassesOnClick}/>
                        <Btn text="Headphone" onClick={props.headphoneOnClick}/>
                    </div>
                </div>
            </div>
        </>
    )
}


const BGStyles = (props) => {
    return (
        <>
            <div className="d-flex d-md-block flex-column justify-content-center align-items-center">
                <h6 className="text-uppercase">Style</h6>
                <div className="row">
                    <div className="col">
                        <Btn text="Default" onClick={props.defaultOnClick}/>
                        <Btn text="Blue 60" onClick={props.blue60OnClick}/>
                        <Btn text="Blue 70" onClick={props.blue70OnClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Green 50" onClick={props.green50OnClick}/>
                        <Btn text="Green 60" onClick={props.green60OnClick}/>
                        <Btn text="Green 70" onClick={props.green70OnClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Grey 40" onClick={props.grey40OnClick}/>
                        <Btn text="Grey 70" onClick={props.grey70OnClick}/>
                        <Btn text="Grey 80" onClick={props.grey80OnClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Red 50" onClick={props.red50OnClick}/>
                        <Btn text="Red 60" onClick={props.red60OnClick}/>
                        <Btn text="Red 70" onClick={props.red70OnClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Yellow 50" onClick={props.yellow50OnClick}/>
                        <Btn text="Yellow 60" onClick={props.yellow60OnClick}/>
                        <Btn text="Yellow 70" onClick={props.yellow70OnClick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Btn text="Dark Blue 30" onClick={props.darkBlue30OnClick}/>
                        <Btn text="Dark Blue 50" onClick={props.darkBlue50OnClick}/>
                        <Btn text="Dark Blue 70" onClick={props.darkBlue70OnClick}/>
                    </div>
                </div>
            </div>
        </>
    )
}


export { HairStyles, EarsStyles, EyesStyles, MouthStyles, NeckStyles, LegStyles, AccStyles, BGStyles };
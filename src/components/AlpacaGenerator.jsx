import AlpacaImage from "./AlpacaImage";
import BodyPartList from "./BodyPartList";
import { HairStyles, EarStyles, EyeStyles, MouthStyles, NeckStyles, LegStyles, AccStyles, BGStyles } from "./StyleOptions";

const AlpacaGenerator = () => {
    return (
        <>
            <div className="row d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
                {/* Alpaca Image */}
                <div className="col d-flex justify-content-center align-items-center mb-4 mb-md-0">
                    <AlpacaImage />
                </div>
                {/* Generator Lists */}
                <div className="col">
                    <BodyPartList />
                    <HairStyles />
                </div>
            </div>
        </>
    )
}


export default AlpacaGenerator;
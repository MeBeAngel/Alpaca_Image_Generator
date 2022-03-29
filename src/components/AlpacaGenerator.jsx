import { useState } from 'react';
import AlpacaImage from "./AlpacaImage";
import BodyPartList from "./BodyPartList";
import { HairStyles, EarsStyles, EyesStyles, MouthStyles, NeckStyles, LegStyles, AccStyles, BGStyles } from "./StyleOptions";
import { bg, neck, mouth, ears, eyes, hair, leg, accessories } from './images';



const AlpacaGenerator = () => {
    // Style State
    const [style, setStyle] = useState("Hair");

    // Image State
    const [image, setImage] = useState(
        {
            hair: hair.default,
            ears: ears.default,
            eyes: eyes.default,
            mouth: mouth.default,
            neck: neck.default,
            leg: leg.default,
            acc: '',
            background: bg.default
        }
    );


    // ###################### //

    const handleBodyPartClick = (event) => {
        if (event.target.innerText === "Hair") {
            setStyle('Hair');
        }
        if (event.target.innerText === "Ears") {
            setStyle('Ears');
        }
        if (event.target.innerText === "Eyes") {
            setStyle('Eyes');
        }
        if (event.target.innerText === "Mouth") {
            setStyle('Mouth');
        }
        if (event.target.innerText === "Neck") {
            setStyle('Neck');
        }
        if (event.target.innerText === "Leg") {
            setStyle('Leg');
        }
        if (event.target.innerText === "Accesories") {
            setStyle('Acc');
        }
        if (event.target.innerText === "Background") {
            setStyle('Bg');
        }
    }

    // ###################### //

    const handleHairStyleClick = (event) => {
        if (event.target.innerText === "Default") {
            setImage(prevState => (
                {
                    ...prevState,
                    hair: hair.default
                }
            )
            );
        }
        if (event.target.innerText === "Bangs") {
            setImage(prevState => (
                {
                    ...prevState,
                    hair: hair.bangs
                }
            ));
        }
        if (event.target.innerText === "Curls") {
            setImage(prevState => (
                {
                    ...prevState,
                    hair: hair.curls
                }
            ));
        }
        if (event.target.innerText === "Elegant") {
            setImage(prevState => (
                {
                    ...prevState,
                    hair: hair.elegant
                }
            ));
        }
        if (event.target.innerText === "Fancy") {
            setImage(prevState => (
                {
                    ...prevState,
                    hair: hair.fancy
                }
            ));
        }
        if (event.target.innerText === "Quiff") {
            setImage(prevState => (
                {
                    ...prevState,
                    hair: hair.quiff
                }
            ));
        }
        if (event.target.innerText === "Short") {
            setImage(prevState => (
                {
                    ...prevState,
                    hair: hair.short
                }
            ));
        }
    }

    // ###################### //

    const handleEarStyleClick = (event) => {
        if (event.target.innerText === "Default") {
            setImage(prevState => (
                {
                    ...prevState,
                    ears: ears.default
                }
            ));
        }
        if (event.target.innerText === "Tilt-Backward") {
            setImage(prevState => (
                {
                    ...prevState,
                    ears: ears.back
                }
            ));
        }
        if (event.target.innerText === "Tilt-Forward") {
            setImage(prevState => (
                {
                    ...prevState,
                    ears: ears.forward
                }
            ));
        }
    }

    // ###################### //

    const handleEyeStyleClick = (event) => {
        if (event.target.innerText === "Default") {
            setImage(prevState => (
                {
                    ...prevState,
                    eyes: eyes.default
                }
            ));
        }
        if (event.target.innerText === "Angry") {
            setImage(prevState => (
                {
                    ...prevState,
                    eyes: eyes.angry
                }
            ));
        }
        if (event.target.innerText === "Naughty") {
            setImage(prevState => (
                {
                    ...prevState,
                    eyes: eyes.naughty
                }
            ));
        }
        if (event.target.innerText === "Panda") {
            setImage(prevState => (
                {
                    ...prevState,
                    eyes: eyes.panda
                }
            ));
        }
        if (event.target.innerText === "Smart") {
            setImage(prevState => (
                {
                    ...prevState,
                    eyes: eyes.smart
                }
            ));
        }
        if (event.target.innerText === "Star") {
            setImage(prevState => (
                {
                    ...prevState,
                    eyes: eyes.star
                }
            ));
        }
    }


    // ###################### //

    const handleMouthStyleClick = (event) => {
        if (event.target.innerText === "Default") {
            setImage(prevState => (
                {
                    ...prevState,
                    mouth: mouth.default
                }
            ));
        }
        if (event.target.innerText === "Astonished") {
            setImage(prevState => (
                {
                    ...prevState,
                    mouth: mouth.astonished
                }
            ));
        }
        if (event.target.innerText === "Eating") {
            setImage(prevState => (
                {
                    ...prevState,
                    mouth: mouth.eating
                }
            ));
        }
        if (event.target.innerText === "Laugh") {
            setImage(prevState => (
                {
                    ...prevState,
                    mouth: mouth.laugh
                }
            ));
        }
        if (event.target.innerText === "Tongue") {
            setImage(prevState => (
                {
                    ...prevState,
                    mouth: mouth.tongue
                }
            ));
        }
    }


    // ###################### //

    const handleNeckStyleClick = (event) => {
        if (event.target.innerText === "Default") {
            setImage(prevState => (
                {
                    ...prevState,
                    neck: neck.default
                }
            ));
        }
        if (event.target.innerText === "Bend-Backwards") {
            setImage(prevState => (
                {
                    ...prevState,
                    neck: neck.back
                }
            ));
        }
        if (event.target.innerText === "Bend-Forward") {
            setImage(prevState => (
                {
                    ...prevState,
                    neck: neck.forward
                }
            ));
        }
        if (event.target.innerText === "Thick") {
            setImage(prevState => (
                {
                    ...prevState,
                    neck: neck.thick
                }
            ));
        }
    }


    // ###################### //

    const handleLegStyleClick = (event) => {
        if (event.target.innerText === "Default") {
            setImage(prevState => (
                {
                    ...prevState,
                    leg: leg.default
                }
            ));
        }
        if (event.target.innerText === "Bubble-Tea") {
            setImage(prevState => (
                {
                    ...prevState,
                    leg: leg.tea
                }
            ));
        }
        if (event.target.innerText === "Cookie") {
            setImage(prevState => (
                {
                    ...prevState,
                    leg: leg.cookie
                }
            ));
        }
        if (event.target.innerText === "Game-Console") {
            setImage(prevState => (
                {
                    ...prevState,
                    leg: leg.game
                }
            ));
        }
        if (event.target.innerText === "Tilt-Backward") {
            setImage(prevState => (
                {
                    ...prevState,
                    leg: leg.back
                }
            ));
        }
        if (event.target.innerText === "Tilt-Forward") {
            setImage(prevState => (
                {
                    ...prevState,
                    leg: leg.forward
                }
            ));
        }
    }


    // ###################### //

    const handleAccStyleClick = (event) => {
        if (event.target.innerText === "Default") {
            setImage(prevState => (
                {
                    ...prevState,
                    acc: accessories.default
                }
            ));
        }
        if (event.target.innerText === "Earings") {
            setImage(prevState => (
                {
                    ...prevState,
                    acc: accessories.earings
                }
            ));
        }
        if (event.target.innerText === "Flower") {
            setImage(prevState => (
                {
                    ...prevState,
                    acc: accessories.flower
                }
            ));
        }
        if (event.target.innerText === "Glasses") {
            setImage(prevState => (
                {
                    ...prevState,
                    acc: accessories.glasses
                }
            ));
        }
        if (event.target.innerText === "Headphone") {
            setImage(prevState => (
                {
                    ...prevState,
                    acc: accessories.headphone
                }
            ));
        }
    }


    // ###################### //

    const handleBGStyleClick = (event) => {
        if (event.target.innerText === "Default") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.default
                }
            ));
        }
        if (event.target.innerText === "Blue 60") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.blue60
                }
            ));
        }
        if (event.target.innerText === "Blue 70") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.blue70
                }
            ));
        }
        if (event.target.innerText === "Green 50") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.green50
                }
            ));
        }
        if (event.target.innerText === "Green 60") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.green60
                }
            ));
        }
        if (event.target.innerText === "Green 70") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.green70
                }
            ));
        }
        if (event.target.innerText === "Grey 40") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.grey40
                }
            ));
        }
        if (event.target.innerText === "Grey 70") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.grey70
                }
            ));
        }
        if (event.target.innerText === "Grey 80") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.grey80
                }
            ));
        }
        if (event.target.innerText === "Red 50") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.red50
                }
            ));
        }
        if (event.target.innerText === "Red 60") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.red60
                }
            ));
        }
        if (event.target.innerText === "Red 70") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.red70
                }
            ));
        }
        if (event.target.innerText === "Yellow 50") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.yellow50
                }
            ));
        }
        if (event.target.innerText === "Yellow 60") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.yellow60
                }
            ));
        }
        if (event.target.innerText === "Yellow 70") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.yellow70
                }
            ));
        }
        if (event.target.innerText === "Dark Blue 30") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.darkBlue30
                }
            ));
        }
        if (event.target.innerText === "Dark Blue 50") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.darkBlue50
                }
            ));
        }
        if (event.target.innerText === "Dark Blue 70") {
            setImage(prevState => (
                {
                    ...prevState,
                    background: bg.darkBlue70
                }
            ));
        }
    }

    const toggleActiveBtn = () => {
        if (style === "Hair") {
            return "btn-active text-white"
        }
    }




    return (
        <>
            <div className="row d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
                {/* Alpaca Image */}
                <div className="col d-flex justify-content-center align-items-center mb-4 mb-md-0">
                    <AlpacaImage hair={image.hair} ears={image.ears} eyes={image.eyes} mouth={image.mouth} neck={image.neck} leg={image.leg} acc={image.acc} bg={image.background} />
                </div>
                {/* Generator Lists */}
                <div className="col">
                    <BodyPartList
                        hairOnClick={handleBodyPartClick}
                        className={toggleActiveBtn}
                        earsOnClick={handleBodyPartClick}
                        eyesOnClick={handleBodyPartClick}
                        mouthOnClick={handleBodyPartClick}
                        neckOnClick={handleBodyPartClick}
                        legOnClick={handleBodyPartClick}
                        accOnClick={handleBodyPartClick}
                        bgOnClick={handleBodyPartClick} />

                    {/* Styles */}
                    {style === "Hair" && <HairStyles
                        defaultOnClick={handleHairStyleClick}
                        bangsOnClick={handleHairStyleClick}
                        curlsOnClick={handleHairStyleClick}
                        elegantOnClick={handleHairStyleClick}
                        fancyOnClick={handleHairStyleClick}
                        quiffOnClick={handleHairStyleClick}
                        shortOnClick={handleHairStyleClick} />

                    }
                    {style === "Ears" && <EarsStyles
                        defaultOnClick={handleEarStyleClick}
                        backOnClick={handleEarStyleClick}
                        forwardOnClick={handleEarStyleClick}
                    />}

                    {style === "Eyes" && <EyesStyles
                        defaultOnClick={handleEyeStyleClick}
                        angryOnClick={handleEyeStyleClick}
                        naughtyOnClick={handleEyeStyleClick}
                        pandaOnClick={handleEyeStyleClick}
                        smartOnClick={handleEyeStyleClick}
                        starOnClick={handleEyeStyleClick}
                    />}

                    {style === "Mouth" && <MouthStyles
                        defaultOnClick={handleMouthStyleClick}
                        astonishedOnClick={handleMouthStyleClick}
                        eatingOnClick={handleMouthStyleClick}
                        laughOnClick={handleMouthStyleClick}
                        tongueOnClick={handleMouthStyleClick}
                    />}

                    {style === "Neck" && <NeckStyles
                        defaultOnClick={handleNeckStyleClick}
                        backOnClick={handleNeckStyleClick}
                        forwardOnClick={handleNeckStyleClick}
                        thickOnClick={handleNeckStyleClick}
                    />}

                    {style === "Leg" && <LegStyles
                        defaultOnClick={handleLegStyleClick}
                        teaOnClick={handleLegStyleClick}
                        cookieOnClick={handleLegStyleClick}
                        gameOnClick={handleLegStyleClick}
                        backOnClick={handleLegStyleClick}
                        forwardOnClick={handleLegStyleClick}
                    />}

                    {style === "Acc" && <AccStyles
                        defaultOnClick={handleAccStyleClick}
                        earingsOnClick={handleAccStyleClick}
                        flowerOnClick={handleAccStyleClick}
                        glassesOnClick={handleAccStyleClick}
                        headphoneOnClick={handleAccStyleClick}
                    />}

                    {style === "Bg" && <BGStyles 
                        defaultOnClick={handleBGStyleClick}
                        blue60OnClick={handleBGStyleClick}
                        blue70OnClick={handleBGStyleClick}
                        green50OnClick={handleBGStyleClick}
                        green60OnClick={handleBGStyleClick}
                        green70OnClick={handleBGStyleClick}
                        grey40OnClick={handleBGStyleClick}
                        grey70OnClick={handleBGStyleClick}
                        grey80OnClick={handleBGStyleClick}
                        red50OnClick={handleBGStyleClick}
                        red60OnClick={handleBGStyleClick}
                        red70OnClick={handleBGStyleClick}
                        yellow50OnClick={handleBGStyleClick}
                        yellow60OnClick={handleBGStyleClick}
                        yellow70OnClick={handleBGStyleClick}
                        darkBlue30OnClick={handleBGStyleClick}
                        darkBlue50OnClick={handleBGStyleClick}
                        darkBlue70OnClick={handleBGStyleClick}
                    />}

                </div>
            </div>
        </>
    )
}


export default AlpacaGenerator;
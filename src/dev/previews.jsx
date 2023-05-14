import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Hero from "../Components/Hero";
import Esquema from "../Components/formulario/Form";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Hero">
                <Hero/>
            </ComponentPreview>
            <ComponentPreview path="/Esquema">
                {/*<Form/>*/}
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
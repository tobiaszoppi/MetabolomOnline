import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Hero from "../Components/Hero";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Hero">
                <Hero/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
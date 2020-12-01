import {SamplerSounds} from "./components/SamplerSounds/SamplerSounds";
import {Sampler} from "./components/Sampler/Sampler";
import {Navigation} from "./components/Navigation/Navigation";
import {PresetInformation} from "./components/PresetInformation/PresetInformation";

const app = new SamplerSounds('#app', {
    components: [ Navigation, PresetInformation, Sampler ]
})

console.log(app.render())

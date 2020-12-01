export class SamplerSounds {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot(){
        const $root = document.createElement('div')

        this.components.forEach( Component => {
            const component = new Component()
            $root.insertAdjacentHTML('beforeend', component.toHTML())
        })

        return $root
    }

    render(){
        //  this.$el.insertAdjacentHTML('afterbegin', '<h1>test</h1>')
        this.$el.append(this.getRoot())
    }
}

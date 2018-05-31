import * as components from './components/index'

const TablerVuePlugin = {

    install: function (Vue) {
        // register components
        for (let component in components) {
            Vue.component(component.name, component)
        }
    }

};

// vueUse(TablerVuePlugin)

export default TablerVuePlugin
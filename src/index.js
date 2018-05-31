import {components} from './components/index'
import directives from './directives/index'

const TablerVuePlugin = {

    install: function (Vue) {
        for (let component in components) {
            // register components
            Vue.component(components[component].name, components[component])
        }

        for (let directive in directives) {
            Vue.directive(directive, directives[directive])
        }
    }

};

// vueUse(TablerVuePlugin)

export default TablerVuePlugin
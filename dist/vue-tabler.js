'use strict';

var Container = {
    name: 'container',
    template: `<div class="container"><slot/></div>`
}



var components = /*#__PURE__*/Object.freeze({
    Container: Container
});

const TablerVuePlugin = {

    install: function (Vue) {
        // register components
        for (let component in components) {
            Vue.component(component, components[component]);
        }
    }

};

module.exports = TablerVuePlugin;

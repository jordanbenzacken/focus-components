var React = require('react');
var type = require('focus').component.types;
var translationMixin = require('../../common/i18n').mixin;
var referenceMixin = require('../../common/mixin/reference-property');
var definitionMixin = require('../../common/mixin/definition');
var builtInComponentsMixin = require('../mixin/built-in-components');

var lineMixin = {
    /**
     * React component name.
     */
    displayName: 'table-line',

    /**
     * Mixin dependancies.
     */
    mixins: [translationMixin, definitionMixin, referenceMixin, builtInComponentsMixin],

    /**@inheritDoc**/
    getDefaultProps: function getLineDefaultProps(){
        return {

        };
    },

    /**@inheritDoc**/
    getInitialState: function getInitialSate(){
        return {};
    },

    /**
     * line property validation.
     * @type {Object}
     */
    propTypes: {
        saveAction: type('func'),
        deleteAction: type('func'),
        onLineClick: type('func')
    },

    /**
     * Render line Actions.
     */
    renderActions: function renderLineActions(){
    },

    render: function renderLine(){
        return this.renderLineContent();
    }
};

module.exports = {mixin: lineMixin};

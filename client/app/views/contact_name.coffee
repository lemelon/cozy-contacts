BaseView       = require 'lib/base_view'
CallLogReader  = require 'lib/call_log_reader'
ContactLogCollection = require 'collections/contactlog'
app            = require 'application'

module.exports = class ContactName extends BaseView

    template: require 'templates/contact_name'

    el: '#contact-name'

    events:
        'keyup input': 'onKeyup'
        'blur input': 'onBlur'
        'click #toggle-name-fields': 'toggleFields'

    afterRender: ->
        @listenTo @model, 'change', @setName
        @toggleFields()

    toggleFields: ->
        toggleButton = @$('#toggle-name-fields')
        if toggleButton.hasClass 'icon-minus'
            @showFew()
        else
            @showAll()

        toggleButton.toggleClass 'icon-plus icon-minus'

    showFew: ->
        nameParts = _.object ['last', 'first', 'middle', 'prefix', 'suffix'],
        @model.get 'n'

        for field, value of nameParts
            elem = @$('.control-group.' + field)
            if (field in ['last', 'first']) or (value? and value isnt '')
                elem.show()
            else
                elem.hide()

    showAll: ->
        fields = ['last', 'first', 'middle', 'prefix', 'suffix']
        fields.forEach (field) =>
            @$('.control-group.' + field).show()

    setName: =>
        nameParts = _.object ['last', 'first', 'middle', 'prefix', 'suffix'],
                @model.get 'n'

        for field, value of nameParts
            @$('input#' + field).val value

    getRenderData: ->
        _.extend {}, @model.attributes,
            fn: @model.getFN()
            n: @model.getN()

    getStructuredName: ->
        fields = ['last', 'first', 'middle', 'prefix', 'suffix']
        return fields.map (field) -> $('#' + field).val()

    onKeyup: (ev) ->
        @options.onKeyup ev

    onBlur: (ev) ->
        @options.onBlur ev
define([ 'dojo/_base/declare', "dijit/_WidgetBase", "dijit/_OnDijitClickMixin",
		"dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
		"dojo/text!./First.html",

		"dijit/form/Button" ],
		function(declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin,
				_WidgetsInTemplateMixin, template) {
			return declare([ _WidgetBase, _OnDijitClickMixin, _TemplatedMixin,
					_WidgetsInTemplateMixin ],
					{
						templateString: template,

						title: 'default Title!',

						_firstClicked: false,

						_counter: 1,
						
						_onClick: function() {
				            if(this._firstClicked) {
				                this.titleNode.innerHTML = this.title + " was clicked " + (++this._counter) + " times";
				            } else {
				                this.titleNode.innerHTML = this.title + " was clicked ";
				                this._firstClicked = true;
				            }
				        },
						postCreate : function() {
							this.titleNode.innerHTML = this.title;
						}
					});
		});
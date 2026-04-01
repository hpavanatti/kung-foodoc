/**
 * @summary Access filter toolbar for toggling symbol visibility by access level.
 *
 * This component powers the checkbox toolbar rendered by site/_layout.hbs that
 * lets users show/hide symbols based on their access level (inherited, public,
 * protected, private). Each checkbox toggles the corresponding CSS class on
 * symbol-title/symbol-details/li elements.
 *
 * The inherited level has special handling: when inherited is ON but a visibility
 * level (e.g. public) is OFF, inherited-public symbols are hidden. Conversely,
 * when inherited is OFF, the visibility toggles skip inherited members entirely.
 *
 * After each toggle, updateEmptyStates() checks each symbol section and shows
 * a "No visible items" message when all items in a section are hidden.
 *
 * Enabled only when window.DOCLET_AFILTER_ENABLED is true (set by the template
 * based on doclet.showAccessFilter computed by docletHelper.getShowAccessFilter).
 *
 * @see module:docletHelper.getShowAccessFilter - determines when the filter appears
 */
(function(options, enabled, $){

	/** The four access levels managed by the filter, in DOM order. */
	var ACCESS_LEVELS = ['inherited', 'public', 'protected', 'private'];

	function capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	function AccessFilter(){
		if (!(this instanceof AccessFilter)) return new AccessFilter();
		var self = this;
		ACCESS_LEVELS.forEach(function(level) {
			self['$toggle' + capitalize(level)] = $();
			self[level] = false;
		});
	}

	$.extend(AccessFilter.prototype, {
		/** Binds change events to all toggle checkboxes and applies initial state. */
		init: function(){
			var self = this;
			ACCESS_LEVELS.forEach(function(level) {
				var prop = '$toggle' + capitalize(level);
				self[prop] = $(".access-filter .toggle-" + level).on('change', function() {
					self._setAccess(level);
					self.updateEmptyStates();
				});
				self._setAccess(level);
			});
			self.updateEmptyStates();
		},
		/**
		 * Toggles visibility for all symbols of the given access level.
		 * Handles the inherited/visibility cross-filtering logic and updates
		 * the checkbox's visual "checked" state via the .checked CSS class.
		 */
		_setAccess: function(level){
			var self = this;
			var $toggle = self['$toggle' + capitalize(level)];
			if ($toggle.length === 0) return;

			self[level] = $toggle.prop("checked");
			var $elem = $(".symbol-title." + level + ",.symbol-details." + level + ",li." + level);

			if (level === 'inherited') {
				if (self.inherited) {
					if (!self.public) $elem = $elem.not('.public');
					if (!self.protected) $elem = $elem.not('.protected');
					if (!self.private) $elem = $elem.not('.private');
				}
			} else {
				if (!self.inherited) $elem = $elem.not('.inherited');
			}

			$elem = $elem.add($elem.filter(".symbol-title").prev("hr"));
			$elem.toggle(self[level]);
			$toggle.closest(".form-check-inline").toggleClass("checked", self[level]);
		},
		/** Shows "No visible items" message in sections where all symbols are hidden. */
		updateEmptyStates: function(){
			$('.secondary > h3').each(function(){
				var $heading = $(this);
				var $dl = $heading.nextAll('dl.symbol').first();
				if (!$dl.length) return;
				var $visible = $dl.find('dt.symbol-title').filter(':visible');
				var $empty = $dl.prev('.empty-state');
				if ($visible.length === 0){
					if (!$empty.length){
						$dl.before('<p class="empty-state">No visible items for current filter.</p>');
					}
				} else {
					$empty.remove();
				}
			});
		}
	});

	$(function(){
		if (enabled){
			var filter = new AccessFilter();
			filter.init();
		}
	});

})(window.TEMPLATE_OPTIONS, window.DOCLET_AFILTER_ENABLED, jQuery);
var Templates = new (function() {
	var templateNodes = {
	};

	this.load = function(templates, callback) {
		var pending = Object.keys(templates).length;
		for (var template in templates) {
			if (templates.hasOwnProperty(template)) {
				var link = document.createElement('link');
				link.rel = 'import';
				link.href = templates[template];
				link.templateName = template;

				link.onload = function (e) {
					var link = this;
					templateNodes[link.templateName] = link.import.body.children[0];
					pending--;
					if (pending == 0) {
						callback();
					}
				};

				link.onerror = function (e) {
					pending--;
					if (pending == 0) {
						callback();
					}
				};
				document.head.appendChild(link);
			}
		}
	};

	this.get = function(templateName) {
		return templateNodes[templateName].cloneNode(true);
	};

})();

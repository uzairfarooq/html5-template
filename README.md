# html5-template
Use html5 templates to inject DOM elements from external files

## Usage

Call `Templates.load` to load templates before using them. You can call `Templates.load` multiple times to load templates when required. Callback function is called when all templates get loaded:
 
```javascript
Templates.load({
	sampleTemplate: "/templates/sample-template.html"
	warningBar: "/templates/warning-bar.html",
}, function() {
	// all templates loaded successfully, you can now call Templates.get to get any template
	var sampleTemplate = Templates.get("sampleTemplate");
	document.body.appendChild(sampleTemplate);
});
```

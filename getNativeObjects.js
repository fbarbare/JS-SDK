function getNativeObjects(iframeId){
	this.iframeId = iframeId;
	this.iframe = null;
}

getNativeObjects.prototype.getNativeObject = function(objectPath) {
	var iframe = this.getIframe(),
		path = objectPath.split('.'),
		objectToReturn,
		pathLength,
		i = 0;

	if(path[0] === 'window'){
		path = path.slice(1);
	}

	pathLength = path.length;
	objectToReturn = iframe.contentWindow;
	for (; i < pathLength; i = i + 1) {
		objectToReturn = objectToReturn[path[i]];
	};

	return objectToReturn;
};

getNativeObjects.prototype.getIframe = function() {
	var iframe = document.getElementById(this.iframeId);

	if(!iframe){
		iframe = this.createIframe();
	}

	return iframe;
};

getNativeObjects.prototype.createIframe = function() {
	var iframe = document.createElement('iframe');

	iframe.id = this.iframeId;
	iframe.style.display = 'none';
	document.body.appendChild(iframe);

	return iframe;
};

getNativeObjects.prototype.init = function() {
	this.createIframe();
};

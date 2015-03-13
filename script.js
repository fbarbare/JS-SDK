var nativeObjects;

function init(){
	nativeObjects = new getNativeObjects();
	nativeObjects.init();
}
window.onload = init;
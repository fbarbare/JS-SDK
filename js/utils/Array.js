//Explicitly defines the "foo/title" module:
define([
	"NativeObjects"
], function(nativeObjects) {

	var Array = nativeObjects.getNativeObject('Array');

	return Array;

});
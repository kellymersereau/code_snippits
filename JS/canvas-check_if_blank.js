// check if canvas is blank for signature pad or any canvas element
function isCanvasBlank(canvas) {
	var blank = document.createElement('canvas');
	blank.width = canvas.width;
	blank.height = canvas.height;
			
	return canvas.toDataURL() == blank.toDataURL();
}

isCanvasBlank($('#signature-canvas')[0])
var devMode = false;

if (devMode)
{
	var documentName = 'Dev Doc';
	var artWidth = 20;
	var artHeight = 16;
	var barWidth = 1;
	var buffer = 1;

}
else
{
	var documentName = prompt('New Document Name?', 'New Doc');
	var artWidth = Number(prompt('Document Width?', 20)) || 20;
	var artHeight = Number(prompt('Document Height?', 16)) || 16;
	var barWidth = Number(prompt('Stretcher Bar Width?', 1));
	var buffer = Number(prompt('Buffer Amount (Length that should fold onto back)?', 1)) || 1;
}



var docResolution = 300;

var docWidth = artWidth + (barWidth * 2) + 2;
var docHeight = artHeight + (barWidth * 2) + 2;


var docWidth = artWidth + (barWidth * 2) + (buffer * 2);
var docHeight = artHeight + (barWidth * 2)+ (buffer * 2);


app.preferences.rulerUnits = Units.INCHES;

app.documents.add(docWidth, docHeight, docResolution, documentName , NewDocumentMode.CMYK, DocumentFill.WHITE);


// Create Guides for back of canvas
app.activeDocument.guides.add(Direction.HORIZONTAL, buffer);
app.activeDocument.guides.add(Direction.HORIZONTAL, docHeight - buffer);
app.activeDocument.guides.add(Direction.VERTICAL,buffer);
app.activeDocument.guides.add(Direction.VERTICAL, docWidth - buffer);



// Create Guides for sides
app.activeDocument.guides.add(Direction.HORIZONTAL, buffer + barWidth);
app.activeDocument.guides.add(Direction.HORIZONTAL, docHeight - buffer - barWidth);
app.activeDocument.guides.add(Direction.VERTICAL, buffer + barWidth);
app.activeDocument.guides.add(Direction.VERTICAL, docWidth - buffer - barWidth);



// Add overlay
var overlay = app.activeDocument.artLayers.add();
overlay.name = 'Overlay';
overlay.opacity = 95;


var selectionBoundaries = [
	[buffer + barWidth, buffer + barWidth],
	[docWidth - buffer - barWidth, buffer + barWidth],
	[docWidth - buffer - barWidth, docHeight - buffer - barWidth],
	[buffer + barWidth, docHeight - buffer - barWidth]
];
 
var finalOverlaySelection = [];
for (i = 0; i < selectionBoundaries.length; i++)
{
    finalOverlaySelection[i] = [ (selectionBoundaries[i][0] * docResolution), (selectionBoundaries[i][1] * docResolution) ];
}
                   
app.activeDocument.selection.select(finalOverlaySelection);
app.activeDocument.selection.invert();

var black = new CMYKColor;
    black.black = 100;
    black.cyan = 0;
    black.magenta = 0;
    black.yellow = 0;

app.activeDocument.selection.fill(black);
app.activeDocument.selection.deselect();
overlay.visible = false;



// Create cut line
var cut = app.activeDocument.artLayers.add();
cut.name = 'Cut line';
cut.opacity = 50;

app.activeDocument.selection.selectAll();
app.activeDocument.selection.contract(2);
app.activeDocument.selection.invert();

var grey = new CMYKColor;
    grey.black = 50;
    grey.cyan = 0;
    grey.magenta = 0;
    grey.yellow = 0;

app.activeDocument.selection.fill(grey);
app.activeDocument.selection.deselect();
cut.visible = false;



// Restore to normal setup
var background = app.activeDocument.layers.getByName('Background');
app.activeDocument.activeLayer = background;
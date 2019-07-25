# Photoshop Canvas Print Generator

Easily set up ready-to-print canvas documents with a few quick prompts.

## Use
Download the `new-canvas.jsx` file somewhere to your computer and double-click it. On some systems, you may need to drag it to a running instance of Photoshop.

## Prompts

The script will ask you several questions to set up your document:

- **New Document Name?**
	- Doesn't actually affect the end product; simply for housekeeping. Will be the default filename when you save.
- **Document Width?**
	- Width of *front* of canvas, in inches.
- **Document Height?**
	- Height of *front* of canvas, in inches.
- **Stretcher Bar Width?**
	- How thick the frame is (depth of canvas), in inches.
- **Buffer Amount?**
	- How much canvas material you want to wrap around to the back (the amount you'll have left to staple).
- **DPI?**
	- Resolution of the document.


## Adding your image
After following the prompts, click `File` > `Place Embedded` or `Place Linked` (your choice of which. If you don't know the difference, the two will act the same for what you need).

## The Layers
- **Cut Line**
	- Not visible by default. Optional to print. I added this for two reasons:
		- When printing on larger-than-your-image canvases, it's difficult to tell where to cut, if you have any white space left over
		- I tend to have a space-saver option turned on with my printer and it will crop it *right* to the image by default; this forces it to print the whole thing
- **Overlay**
	- Not visible by default. Simply a reference layer (**don't** print with it visible!). Allows you to visualize what will be visible on the front of the canvas.
- **Background**
	- Just a white background.

## Notes
- You don't have to fill the *entire* document with your image - as long as you make it a little past the outermost guidelines, the image will fill the front and sides of the canvas. If you're okay with some blank canvas on the back (I usually am), you will be able to get more of your image on the front.
- In the "Buffer Amount" question - I recommend to add `.25` or `.5` more than you think you need - canvas going around the corners always seems to steal from my actual dimensions. You can always cut more away, but you can't get extra put on!
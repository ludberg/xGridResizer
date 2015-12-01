# xGridResizer

This extension lets you resize the grid of a sheet in Qlik Sense. 

## Usage

1. Drag the extension onto EVERY sheet you want to reisze. 
2. Use the slider to change the number of columns to min 12 and max 64. 

## Installation

### Server

1. Download the .zip file and remove README.md from the archive
2. Import the .zip file via the QMC, under Extensions
3. You will now have a new extension in Qlik Sense called xGridResizer. Drag this to the sheet you want to resize.
4. You might have to save the app and reload before you can resize!
5. Drag the slider to change the number of columns.

### Desktop

1. Download the .zip file and unpack and rename the directory to "GridResizer". 
2. Place the directory in you Qlik Sense Extensions directory, usually found at "C:\Users\your.username\Documents\Qlik\Sense\Extensions\GridResizer"
3. You will now have a new extension in Qlik Sense called xGridResizer. Drag this to the sheet you want to resize. 
4. If you're using Qlik Sense Desktop you might have to save the app and reload it before you can resize the grid
5. Drag the slider to change the number of columns.

Please note that the number of rows will be calculated automatically to keep the ratio 2:1, ie twice as many columns as rows. 

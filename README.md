liquidText
==========

This jQuery plugin was built for a very specific use-case. If you find this doesn&apos;t work for you, I suggest looking at the tools below.

- [fluidText](https://github.com/maxfolley/fluidtext) by [@maxfolley](https://github.com/maxfolley).
- [fittext](https://github.com/thomasmulloy/fittext) by [@thomasmulloy](https://github.com/thomasmulloy).

### What&apos;s the use-case?

- You need lines of text to fit the width of the containing element.
- You do not need the text to be responsive (ie, window resizing).
- You need the text to be resized immediately on page load.

### Usage

Make sure your elements have `white-space: nowrap;`, `display: block;` or `inline-block`, and some kind of width other than `auto` defined. 

Target the liquid selector and call `liquidText()`.

	$(".my-liquid-selector").liquidText();
	
Example
-------

**index.html**

	<!doctype html>
    <html>
       	<head>
            <style>
            div {
                border: 1px solid black;
                text-align: center;
                width: 100%;
            }
        
            .liquid {
                font-family: helvetica;
                line-height: 1;
                text-transform: uppercase;
                width: 100%;
        
                /* REQUIRED */
                display: block;
                white-space: nowrap;
            }
        
            .liquid.half    { width: 50%; }
            .liquid.sixty   { width: 60%; }
            .liquid.seventy { width: 70%; }
            .liquid.eighty  { width: 80%; }
            </style>
        </head>
        <body>
            <div>
            	<span class="liquid">liquid text</span>
            	<span class="liquid">works</span>
            	<span class="liquid">for the most part</span>
            </div>
            <div>
            	<span class="liquid half">even when</span>
            	<span class="liquid sixty">you want some things</span>
            	<span class="liquid seventy">at different</span>
            	<span class="liquid eighty">relative widths</span>
            </div>
        
            <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
            <script src="jquery.liquidtext.js"></script>
            <script>
            	$(".liquid").liquidText();
            </script>
        </body>
    </html>

**result**
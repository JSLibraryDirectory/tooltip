# [Tooltip](https://github.com/fengyuanchen/tooltip)

> A simple jQuery tooltip plugin.

- [Demo](http://fengyuanchen.github.io/tooltip)


## Main

```
dist/
├── tooltip.css     (2 KB)
├── tooltip.min.css (2 KB)
├── tooltip.js      (9 KB)
└── tooltip.min.js  (4 KB)
```



## Getting started

### Quick start

Two quick start options are available:

- [Download the latest release](https://github.com/fengyuanchen/tooltip/archive/master.zip).
- Clone the repository: `git clone https://github.com/fengyuanchen/tooltip.git`.



### Installation

Include files:

```html
<script src="/path/to/jquery.js"></script><!-- jQuery is required -->
<link  href="/path/to/tooltip.css" rel="stylesheet">
<script src="/path/to/tooltip.js"></script>
```


### Usage

Initialize with `$.fn.tooltip` method.

```js
// With option
$('body').tooltip({
  autoshow: true,
  content: 'Hello, world!'
});

// With method
$('body').tooltip('show', 'Hello, world!');
```


## Options

```js
// Set tooltip options
$().tooltip(options);

// Change the global default options
$.fn.tooltip.setDefaults(options);
```


### autohide

- Type: `Boolean`
- Default: `true`

Hide the tooltip automatically when timeout. requires `duration` option to be set.


### autoshow

- Type: `Boolean`
- Default: `true`

Show the tooltip automatically when initialize. requires `content` option to be set.


### content

- Type: `String`
- Default: `''`

Tooltip content


### countdown

- Type: `Boolean`
- Default: `false`

Show countdown view. requires `duration` option to be set.


### dismissible

- Type: `Boolean`
- Default: `false`

Allow to dismiss the tooltip by click an attached close button before it is closed automatically.


### duration

- Type: `Number`
- Default: `3000`

Define the time of the tooltip showing (3 seconds by default).


### fixed

- Type: `Boolean`
- Default: `true`

Fix the tooltip (Only available for `body` element).


### offset

- Type: `Number`
- Default: `10`

Offset of the tooltip from its parent.


### position

- Type: `String`
- Default: `'center top'`
- Options:
    `'left top'`,    `'center top'`,    `'right top'`,
    `'left middle'`, `'center middle'`, `'right middle'`,
    `'left bottom'`, `'center bottom'`, `'right bottom'`

Position of the tooltip (horizontal and vertical)


### style

- Type: `String`
- Default: `'default'`
- Options: `'default'`, `'primary'`, `'success'`, `'info'`, `'warning'`, `'danger'`

Style of the tooltip


### zIndex

- Type: `Number`
- Default: `1024`

Z-index of the tooltip.



## Methods


```js
$().tooltip('method', argument1, , argument2, ..., argumentN)
```


### show([content[, options]])

- **content** (optional):
  - Type: `String`
  - Tooltip [content](#content)
- **options** (optional):
  - Type: `Object`
  - Tooltip [options](#options)

Show the tooltip with new content.

```js
$().tooltip('show', 'Hello, world!');
$().tooltip('show', 'Hello, world!', {
  style: 'primary',
  zIndex: 2048
});
```


### hide()

Hide the tooltip.


### destroy()

Destroy the tooltip.



## Events


### show.tooltip

This event fires immediately when the `show` instance method is called.


### shown.tooltip

This event is fired when the tooltip has been made visible to the user (will wait for CSS transitions to complete).


### hide.tooltip

This event is fired immediately when the hide instance method has been called.


### hidden.tooltip

This event is fired when the tooltip has finished being hidden from the user (will wait for CSS transitions to complete).



## No conflict

If you have to use other plugin with the same namespace, just call the `$.fn.tooltip.noConflict` method to revert to it.

```html
<script src="other-plugin.js"></script>
<script src="tooltip.js"></script>
<script>
  $.fn.tooltip.noConflict();
  // Code that uses other plugin's "$().tooltip" can follow here.
</script>
```



## Browser Support

- Chrome (latest 2)
- Firefox (latest 2)
- Internet Explorer 8+
- Opera (latest 2)
- Safari (latest 2)

As a jQuery plugin, you also need to see the [jQuery Browser Support](http://jquery.com/browser-support/).



## [License](LICENSE.md)

Released under the [MIT](http://opensource.org/licenses/mit-license.html) license.

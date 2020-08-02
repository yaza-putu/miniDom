# yazQuery
Mini DOM manipulations like jquery

# Features
 * css, rawCss, attr, getAttr, removeAttr, animate, on, addClass, toggleClass, html
 * text, val, insertBefore, insertAfter, insertFirst, insertLast, empty, fetch
* Total (18)

# How to use
for use you can first initialise with
```javascript
$_(selector).function();
```
# How to use
for use you can first initialise with
```javascript
$_(selector).function();
```

1. css
```javascript
$_(selector).css(style,textStyle);
// example
$_('#idname').css('display','none');
```
2. rawCss
```javascript
$_(selector).rawCss(style);
// example
$_('.classname').rawCss('display:none;border:1px solid black');
```
3. attr
```javascript
$_(selector).attr(attribute_name,value);
// example
$_('.classname').attr('value','1234');
```
4. getAttr
```javascript
$_(selector).getAttr(attribute_name);
// example
$_('.classname').getAttr('value');
```
5. removeAttr
```javascript
$_(selector).removeAttr(attribute_name);
// example
$_('.classname').removeAttr('value');
```
6. animate
```javascript
$_(selector).animate(time, scale, rotate, rotateX, rotateY, translateX, translateY, skewX, skewY, opacity);
// example 
$_('.classname').animate('3', '1','0','360','1','0','0', '0','0','1');
```
7. on
```javascript
$_(selector).on(event_name,function(){
    // expresion
});
// example
$_('button').on('click',function(){
     // expresion
});
```
8. addClass
```javascript
$_(selector).addClass(class_name);
// example
$_('#lastname').addClass('name');
```
9. toggleClass
```javascript
$_(selector).toggleClass(class_name);
// example
$_("button").on('click',function(){
    $_(selector).toggleClass(class_name);
});
```
10. html
```javascript
$_(selector).html(element);
// example
$_('.classname').html('<p>paragraf</p>');
```
11. text
```javascript
$_(selector).text(text);
// get text value
$_(selector).text();
// example
$_('.textarea').text('this value');
```
12. value
```javascript
$_(selector).val(val);
// get value
$_(selector).val();
// example
$_('.inputclass').val('this value');
```
13. insertBefore
```javascript
$_(selector).insertBefore(beforeBegin);
// example
$_('p').insertBefore('<i>before begin</i>');
```
14. insertAfter
```javascript
$_(selector).insertAfter(afterEnd);
// example
$_('p').insertAfter('<i>after End</i>');
```
15. insertFirst 
```javascript
$_(selector).insertFirst(afterBegin);
// example
$_('p').insertFirst('<i>after Begin</i>');
```
16. insertLast
```javascript
$_(selector).insertLast(beforeEnd);
// example
$_('p').insertLast('<i>Before End</i>');
```
17. empty
```javascript
$_(selector).empty();
// example
$_('.classname').empty();
```
18. fetch
use this template fetch https://github.com/yaza-putu/fetch-template

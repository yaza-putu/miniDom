# Mini Dom
Mini DOM manipulations like jquery

# Features
 * css, rawCss, attr, getAttr, removeAttr, animate, on, addClass, toggleClass, html
 * text, val, insertBefore, insertAfter, insertFirst, insertLast, empty, fetch
* Total (18)

# How to use
for use you can first initialise with
```javascript
select(document).ready(function(){
    //code here
});
```
1. css
```javascript
select(selector).css(style,textStyle);
// example
select('#idname').css('display','none');
```
2. rawCss
```javascript
select(selector).rawCss(style);
// example
select('.classname').rawCss('display:none;border:1px solid black');
```
3. attr
```javascript
select(selector).attr(attribute_name,value);
// example
select('.classname').attr('value','1234');
```
4. getAttr
```javascript
select(selector).getAttr(attribute_name);
// example
select('.classname').getAttr('value');
```
5. removeAttr
```javascript
select(selector).removeAttr(attribute_name);
// example
select('.classname').removeAttr('value');
```
6. animate
```javascript
select(selector).animate(time, scale, rotate, rotateX, rotateY, translateX, translateY, skewX, skewY, opacity);
// example 
select('.classname').animate('3', '1','0','360','1','0','0', '0','0','1');
```
7. on
```javascript
select(selector).on(event_name,function(){
    // expresion
});
// example
select('button').on('click',function(){
     // expresion
});
```
8. addClass
```javascript
select(selector).addClass(class_name);
// example
select('#lastname').addClass('name');
```
9. toggleClass
```javascript
select(selector).toggleClass(class_name);
// example
select("button").on('click',function(){
    select(selector).toggleClass(class_name);
});
```
10. html
```javascript
select(selector).html(element);
// example
select('.classname').html('<p>paragraf</p>');
```
11. text
```javascript
select(selector).text(text);
// get text value
select(selector).text();
// example
select('.textarea').text('this value');
```
12. value
```javascript
select(selector).val(val);
// get value
select(selector).val();
// example
select('.inputclass').val('this value');
```
13. insertBefore
```javascript
select(selector).insertBefore(beforeBegin);
// example
select('p').insertBefore('<i>before begin</i>');
```
14. insertAfter
```javascript
select(selector).insertAfter(afterEnd);
// example
select('p').insertAfter('<i>after End</i>');
```
15. insertFirst 
```javascript
select(selector).insertFirst(afterBegin);
// example
select('p').insertFirst('<i>after Begin</i>');
```
16. insertLast
```javascript
select(selector).insertLast(beforeEnd);
// example
select('p').insertLast('<i>Before End</i>');
```
17. empty
```javascript
select(selector).empty();
// example
select('.classname').empty();
```
18. fetch
use this template fetch https://github.com/yaza-putu/fetch-template , fetch like ajax jquery

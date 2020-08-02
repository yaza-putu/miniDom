# yazQuery
Mini DOM manipulations like jquery

# fitur 
 * css, rawCss, attr, getAttr, removeAttr, animate, on, addClass, toggleClass, html
 * text, val, insertBefore, insertAfter, insertFirst, insertLast, empty, log, fetch
* Total (19)

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
$_(selector).css('style','textStyle');
```
2. rawCss
```javascript
$_(selector).rawCss('display:none;border:1px solid black');
```
3. attr
```javascript
$_(selector).attr('attribute_name','value');
```
4. getAttr
```javascript
$_(selector).getAttr('attribute_name');
```
5. removeAttr
```javascript
$_(selector).removeAttr('attribute_name');
```
6. animate
```javascript
$_(selector).animate(time, scale, rotate, rotateX, rotateY, translateX, translateY, skewX, skewY, opacity);
// example $_(selector).animate('3', '1','0','360','1','0','0', '0','0','1');
```
7. on
```javascript
$_(selector).on(event_name,function(){
    // expresion
})
```
8. addClass
```javascript
$_(selector).addClass('class_name');
```
9. toggleClass
```javascript
$_(selector).toggleClass('class_name');
// example
$_("button").on('click',function(){
    $_(selector).toggleClass('class_name');
});
```
10. html
```javascript
$_(selector).html(element);
```
11. text
```javascript
$_(selector).text(text);
```
12. value
```javascript
$_(selector).val(val);
```
13. insertBefore
```javascript
$_(selector).insertBefore(beforeBegin);
```
14. insertAfter
```javascript
$_(selector).insertAfter(afterEnd);
```
15. insertFirst 
```javascript
$_(selector).insertFirst(afterBegin);
```
16. insertLast
```javascript
$_(selector).insertLast(beforeEnd);
```
17. empty
```javascript
$_(selector).empty();
```
18. log
```javascript
$_(selector).log();
```
19. fetch
use this template fetch https://github.com/yaza-putu/fetch-template
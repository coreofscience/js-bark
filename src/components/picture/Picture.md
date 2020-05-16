The picture element cycles through pictures.

It can use same size pictures:
```js
<Picture urls={[
    "http://placekitten.com/g/300/300",
    "http://placekitten.com/g/100/300",
    "http://placekitten.com/g/700/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300/FFF"
]}/>
```

Or pictures of different sizes:
```js
<Picture urls={[
    "http://placekitten.com/g/300/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300/FFF"
]}/>
```
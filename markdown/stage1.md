# Stage1
******
### 重要内容
1. 基本页面的搭建
2. CSS的基本布局实现
3. CSS样式的学习
4. 练手

### 重点难点
##### 1. 两张图片在同一行的居中显示
![居中显示](./img/center.png)
html代码

```
 <div class="img2">
        <div></div>
        <div></div>
 </div>
```

css代码

```
.intro .img2 { text-align: center; clear: both }
.intro .img2 div { width: 230px; height: 150px; display: inline-block; margin-bottom: 10px }
.intro .img2 div:nth-child(1) { background-image: url("images/pic7.jpg") }
.intro .img2 div:nth-child(2) { background-image: url("images/pic8.jpg") }
```

原理解析：
内部div使用`display:inline-block`,外部div使用`text-align:center`


##### 2,左边文字，右边图片的并列显示
![边文字，右边图片的并列显示](./img/002.png)
html代码

```
 <div class="info"></div>
 <div class="img"></div>
```


css代码

```
.info { float: left; }
..img { background-image: url("images/pic3.jpg"); width: 229px; height: 150px; display: inline-block }
```
原理解析：
文字的div使用`float: left`,图片div使用`display: inline-block`
webpackJsonp([0],{27:function(n,t,r){var e=r(1)(r(289),r(340),null,null);n.exports=e.exports},283:function(n,t,r){"use strict";var e=r(309),a=r.n(e),o=r(312),s=r.n(o),i=r(300),c=r.n(i),l=r(301),p=r.n(l),u=r(299),m=r.n(u),d=r(314),f=r.n(d),h=r(302),b=r.n(h),g=r(304),j=r.n(g),v=r(303),y=r.n(v),x=r(306),w=r.n(x),T=r(307),_=r.n(T),k=r(305),I=r.n(k),P=r(320),R=r.n(P),S=r(321),E=r.n(S),A=r(322),N=r.n(A),U=r(323),q=r.n(U),D=r(324),O=r.n(D),C=r(311),M=r.n(C),L=r(319),F=r.n(L),$=r(315),J=r.n($),Y=r(313),z=r.n(Y),B=r(310),G=r.n(B),W=r(318),K=r.n(W),X=r(317),V=r.n(X),Q=r(316),H=r.n(Q);t.a={consolelog:a.a,hexoThemeMake:s.a,JsFloatBug:c.a,JsToObj:p.a,JSONPBaidu:m.a,mobileOr:f.a,PromiseReturn:b.a,ReactNote:j.a,ReactPropTypes:y.a,SqlDayofweek:w.a,SqlGroupIF:_.a,SqlUUID:I.a,tempTable:R.a,uploadFile:E.a,vueProps:N.a,webpackNote:q.a,zeptoGetScript:O.a,disqusReset:M.a,scrollDirection:F.a,paddingSquare:J.a,justifyLayout:z.a,createReact:G.a,reactRouter:K.a,reactRedux:V.a,reactPPT:H.a}},289:function(n,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=r(283);t.default={name:"article",data:function(){return{str:""}},mounted:function(){console.log(this),this.str=e.a[this.$route.params.name],window.DISQUS&&window.reset(this.$route.params.name,"http://liujians.me/"+this.$route.params.name,this.$route.params.name)}}},299:function(n,t){n.exports='### 使用JSONP 跨域调取百度API\r\n\r\n2016-12-02 liujians\r\n\r\n这些日子做公司的项目、PC站要用到IP定位\r\n\r\n就使用了百度2016年8月26日才推出的高精度IP定位、误差在80m范围内\r\n\r\n前端调取百度API算跨域、所以这里就想到了JSONP\r\n\r\n然而百度的工程师早就想到了给我们提供JSONP的接口、所以自然而然地在API传入参数就好了\r\n\r\nhttp://api.map.baidu.com/highacciploc/v1?qterm=pc&ak=请输入您的AK&coord=bd09ll&callback_type=jsonp&callback=test\r\n\r\n我们再callback_type参数中传入jsonp，并且在callback传入回调函数名\r\n\r\n将回调函数做全局使用\r\n\r\n\tfunction test(data){\r\n\t\t//这里的data就是JSONP取到的数据对象\r\n\t}\r\n\t\r\n\t//返回结果例子\r\n\t{\r\n\t"content":{\r\n\t\t\t"location":\t{\r\n\t\t\t\t"lat":30.653839,\r\n\t\t\t\t"lng":104.093354\r\n\t\t\t\t},\r\n\t\t\t"locid":"973d0dc2e6340f7bfc8eb29993a0de9d",\r\n\t\t\t"radius":30,\r\n\t\t\t"confidence":1.0\r\n\t\t\t},\r\n\t"result":{"error":161,"loc_time":"2016-12-02 09:17:51"}}\r\n\r\n最重要的地方就是callback_type 和callback 两个参数了\r\n\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)'},300:function(n,t){n.exports="### 单精度计算时遇到的bug\r\n\r\n2016-12-15 liujians\r\n\r\njs单精度计算时遇到的相关bug\r\n\r\n闲暇时候尝试\r\n\r\n\t2.2 + 2.1 = 4.300000000000001 \r\n\t2.2 - 1.9 = 0.30000000000000027 \r\n\t2.2 * 2.2 = 4.840000000000001 \r\n\t2.1 / 0.3 = 7.000000000000001\r\n\r\n记录一下、以后可以考虑用parseFloat来直接强转\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)"},301:function(n,t){n.exports='### Js 将字符串对象转换成对象的三种方法\r\n\r\n2016-11-21 liujians\r\n\r\n如果某天从后端返回的对象莫名其妙的变成了字符串、需要前端处理成对象、再去取值的话\r\n\r\n那就需要用到、字符串强转对象了\r\n\r\n首先我们要转换的东西可能是这个样子：\r\n\r\n\t\'{"name":"test"}\'\r\n\r\nJSON的标准写法应该是KEY和VALUE都带引号的\r\n\r\n我们要将这样的字符串转为对象、有三种方法可以参考使用\r\n\r\n第一种可能是大家用的非常之多的、用JSON对象下面的方法`.parse()`\r\n\r\n写起来可能是这样的：\r\n\r\n\tvar jsonData = \'{"name":"test"}\';\r\n\tvar obj = JSON.parse(jsonData)\r\n\tconsole.log(obj.name);//"test"\r\n\r\n`JSON.parse()`和`JSON.stringify()` 是我用的比较多的方法\r\n\r\n第二种是利用JS的eval()函数\r\n\r\n\tvar jsonData = \'{"name":"test"}\';\r\n\tvar obj= eval(\'(\'+ jsonData +\')\');\r\n\tconsole.log(obj.name);//"test"\r\n\r\n这里要解释一下、为什么要再eval里面头尾加入圆括号、因为`eval()`是以函数语句解析的、那么其中的{}大括号会用作标记为作用域、或者方法体类似的概念、我们想要把他解析成对象就不会成功了\r\n\r\n\teval(\'{}\')\r\n\teval(\'({})\')//返回的是一个obj\r\n\r\n第三种是用Function对象\r\n\r\n\tvar jsonData = \'{"name":"test"}\';\r\n\tvar obj = new Function(\'return \' + jsonData)();\r\n\tconsole.log(obj.name);//"test"\r\n\r\n原理比较类似第二种、将return 拼接字符串对象、放入function\r\n\r\n执行的时候、由于将字符串解析成了语句、所以return出去的是一个对象\r\n\r\n以上就是今天所要说的三种方法、欢迎补充！\r\n\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)'},302:function(n,t){n.exports='### Promise对象的链式调用\n\n2016-12-06 liujians\n\nPromise对象是解决异步回调嵌套的一种方案\n\n现在封装Promise的库很多、像q,bluebrid等等\n\nPromise对象下调用.then方法就可以把异步排个顺序\n\n那么只要返回Promise对象、.then就可以继续下去\n\n首先我们定义三个异步方法\n\n\tvar test ={\n\t\tfunc1:function(){\n\t\t\tvar data = new Promise(function(resolve){\n\t\t\t\tsetTimeout(function(){\n\t\t\t\t\tresolve("ajax结果111")\n\t\t\t\t},200)\n\t\t\t})\n\t\t\treturn data;\n\t\t},\n\t\tfunc2:function(){\n\t\t\tvar data = new Promise(function(resolve){\n\t\t\t\tsetTimeout(function(){\n\t\t\t\t\tresolve("ajax结果222")\n\t\t\t\t},100)\n\t\t\t})\n\t\t\treturn data;\n\t\t},\n\t\tfunc3:function(){\n\t\t\tvar data = new Promise(function(resolve){\n\t\t\t\tsetTimeout(function(){\n\t\t\t\t\tresolve("ajax结果333")\n\t\t\t\t},500)\n\t\t\t})\n\t\t\treturn data;\n\t\t}\n\t}\n\n假设三个方法分别三个ajax\n\n然后\n\n\ttest.func1().then(function(value){\n\t\tconsole.log(value)\n\t\t//do something...\n\t})\n\n那如果想要三个ajax顺序请求、并依赖上一个ajax的结果，该怎么写呢？\n\n可能你会这样做：\n\n\ttest.func1().then(function(value){\n\t\tconsole.log(value)\n\t\ttest.func2().then(function(value){\n\t\t\tconsole.log(value)\n\t\t\ttest.func3().then(function(value){\n\t\t\t\tconsole.log(value)\n\t\t\t\t//do something...\n\t\t\t})\n\t\t})\n\t})\n\n但是这样写跟ajax嵌套一样代码越多越看不清楚...改起来也麻烦\n\n所以要链式调用、并让三个方法顺序执行\n\n\ttest.func1().then(function(value){\n\t\tconsole.log(value)\n\t\t//do something...\n\t\treturn test.func2();\n\t}).then(function(value){\n\t\tconsole.log(value)\n\t\treturn test.func3();\n\t}).then(function(value){\n\t\tconsole.log(value)\n\t})\n\n使用return链式调用、这样代码就清晰明了\n\n也有人说可以简写\n\n    test.func1()\n    .then(test.func2)\n    .then(test.func3)\n    .then(function(value){\n      console.log(value)\n    })\n\n\n希望可以帮助到大家\n___\n本文出自————[http://liujians.me](http://liujians.me)\n'},303:function(n,t){n.exports="### React_PropTypes 记录\r\n\r\n2016-11-29 liujians\r\n\r\n\r\n\r\n\tMyComponent.propTypes = {\r\n\t  // You can declare that a prop is a specific JS primitive. By default, these\r\n\t  // are all optional.\r\n\t  optionalArray: React.PropTypes.array,\r\n\t  optionalBool: React.PropTypes.bool,\r\n\t  optionalFunc: React.PropTypes.func,\r\n\t  optionalNumber: React.PropTypes.number,\r\n\t  optionalObject: React.PropTypes.object,\r\n\t  optionalString: React.PropTypes.string,\r\n\t  optionalSymbol: React.PropTypes.symbol,\r\n\t\r\n\t  // Anything that can be rendered: numbers, strings, elements or an array\r\n\t  // (or fragment) containing these types.\r\n\t  optionalNode: React.PropTypes.node,\r\n\t\r\n\t  // A React element.\r\n\t  optionalElement: React.PropTypes.element,\r\n\t\r\n\t  // You can also declare that a prop is an instance of a class. This uses\r\n\t  // JS's instanceof operator.\r\n\t  optionalMessage: React.PropTypes.instanceOf(Message),\r\n\t\r\n\t  // You can ensure that your prop is limited to specific values by treating\r\n\t  // it as an enum.\r\n\t  optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),\r\n\t\r\n\t  // An object that could be one of many types\r\n\t  optionalUnion: React.PropTypes.oneOfType([\r\n\t    React.PropTypes.string,\r\n\t    React.PropTypes.number,\r\n\t    React.PropTypes.instanceOf(Message)\r\n\t  ]),\r\n\t\r\n\t  // An array of a certain type\r\n\t  optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),\r\n\t\r\n\t  // An object with property values of a certain type\r\n\t  optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),\r\n\t\r\n\t  // An object taking on a particular shape\r\n\t  optionalObjectWithShape: React.PropTypes.shape({\r\n\t    color: React.PropTypes.string,\r\n\t    fontSize: React.PropTypes.number\r\n\t  }),\r\n\t\r\n\t  // You can chain any of the above with `isRequired` to make sure a warning\r\n\t  // is shown if the prop isn't provided.\r\n\t  requiredFunc: React.PropTypes.func.isRequired,\r\n\t\r\n\t  // A value of any data type\r\n\t  requiredAny: React.PropTypes.any.isRequired,\r\n\t\r\n\t  // You can also specify a custom validator. It should return an Error\r\n\t  // object if the validation fails. Don't `console.warn` or throw, as this\r\n\t  // won't work inside `oneOfType`.\r\n\t  customProp: function(props, propName, componentName) {\r\n\t    if (!/matchme/.test(props[propName])) {\r\n\t      return new Error(\r\n\t        'Invalid prop `' + propName + '` supplied to' +\r\n\t        ' `' + componentName + '`. Validation failed.'\r\n\t      );\r\n\t    }\r\n\t  },\r\n\t\r\n\t  // You can also supply a custom validator to `arrayOf` and `objectOf`.\r\n\t  // It should return an Error object if the validation fails. The validator\r\n\t  // will be called for each key in the array or object. The first two\r\n\t  // arguments of the validator are the array or object itself, and the\r\n\t  // current item's key.\r\n\t  customArrayProp: React.PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {\r\n\t    if (!/matchme/.test(propValue[key])) {\r\n\t      return new Error(\r\n\t        'Invalid prop `' + propFullName + '` supplied to' +\r\n\t        ' `' + componentName + '`. Validation failed.'\r\n\t      );\r\n\t    }\r\n\t  })\r\n\t};\r\n\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)"},304:function(n,t){n.exports="### React 笔记\r\n\r\n2016-11-28 liujians\r\n\r\n> 组件类的第一个字母必须大写，否则会报错\r\n\r\n> 组件类只能包含一个顶层标签，否则也会报错\r\n\r\n> JSX中class写成className\r\n\r\n> JSX中for写成htmlFor\r\n\r\n> this.props获取父元素传入的值\r\n\r\n> this.props.children\r\n\r\n> React.Children用来处理子节点\r\n\r\n> PropTypes限制使用组件的参数类型\r\n\r\n> getDefaultProps方法设置参数默认值\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)"},305:function(n,t){n.exports="### MySql中声明变量和UUID相关函数的使用\r\n\r\n2016-11-28 liujians\r\n\r\n工作中的项目做到用户权限部分了、需要将用户、功能、菜单还有几张关系表做初始化\r\n\r\n说白了、就是插很多很多数据\r\n\r\n那其实可以通过写个脚本、方便去复用和修改\r\n\r\n用到了UUID、因为MySql的默认值是没有UUID的、所以只能通过插值的时候用UUID()的函数来做\r\n\r\n因为UUID还有个依赖的关系、所以要用set的方法做变量声明\r\n\r\n\tSET @Role_User = UPPER(REPLACE(UUID(),'-',''));\r\n\tSET @Role_Admin = UPPER(REPLACE(UUID(),'-',''));\r\n\r\n这里还用到两个函数、第一个是Replace\r\n\r\n顾名思义、就是替换了、这里把生成出的UUID中的`-`横线删掉\r\n\r\n然后用到了UPPER将其中的字幕转换成大写\r\n\r\n之后就可以分开插入到几张表和关联表里了\r\n\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)"},306:function(n,t){n.exports="### MySql 查询日期为星期几的几种方法\r\n\r\n2016-11-22 liujians\r\n\r\n有一个需求、根据周末和工作日不同的情况、做不同的数据处理、\r\n\r\n那么就要区分星期几\r\n\r\n这里查到了几种方法、顺便记录一下\r\n\r\n> DAYNAME(date)\r\n\r\n\tmysql>SELECT DAYNAME('2016-11-22');\r\n\t//Tuesday\r\n\r\n这种方法直接打印出是星期几，适合直接展示的时候用\r\n\r\n> DAYOFWEEK(date)\r\n\r\n\tmysql>SELECT DAYOFWEEK('2016-11-22');\r\n\t//3\r\n\r\n这种是标记数字1——7\r\n\r\n1代表周日，7代表周六、因为外国人都是周日为第一天\r\n\r\n> WEEKDAY(date)\r\n\r\n\tmysql>SELECT WEEKDAY('2016-11-22');\r\n\t//1\r\n\r\n这种是周一到周日对应数组中的下标、从周一到周日分别对应0——6\r\n\r\n\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)"},307:function(n,t){n.exports="### MySql 聚合函数和IF的复杂嵌套\r\n\r\n2016-11-18 liujians\r\n\r\n在一个业务中、我需要做一个将原始打卡表做整合到一张整合表中、方便以后数据的查询又不会打乱原始数据\r\n\r\n原始表中的记录是这样的\r\n\r\n![](http://ogo5zlrgk.bkt.clouddn.com/img/table_2016-11-18.png)\r\n\r\n现在需要整合,将相同日期，且相同用户的数据合并，并留出打卡时间的最大值最小值\r\n\r\n这里中断一下留给大家想一下自己的思路\r\n\r\n...\r\n\r\n博主第一时间想到的是Group By\r\n\r\n通过UserNumber和AttendanceDate分组、并用聚合函数求出ClockTime的最大值最小值\r\n\r\n所以想到这样的一句Sql\r\n\r\n\tSELECT IF(COUNT(a.ClockTime)>1,MIN(a.ClockTime),IF(MIN(a.ClockTime)>'12:00:00',NULL,a.ClockTime)) \r\n\tFROM a \r\n\tGROUP BY a.UserNumber,a.AttendanceDate\r\n\r\n如果按照UserNumber和AttendanceDate分组（合并相同ID并且相同时间的数据）、得到的结果集要求出最小值\r\n\r\n如果ClockTime的总数大于一，说明有两条甚至以上时间记录，那我们求出最大值和最小值就OK了、如果小于等于1、\r\n\r\n那么记录是不足的、再以12点为基准、判断是上午打卡还是下午打卡、另一条记作空\r\n\r\nMySql的IF函数跟三元运算符类似、仔细看看其实很好理解\r\n\r\n根据上面的结论整合之后\r\n\r\n\tSELECT a.UserNumber,a.AttendanceDate \r\n\t\t\t,IF(COUNT(a.ClockTime)>1,MIN(a.ClockTime),IF(MIN(a.ClockTime)>'12:00:00',NULL,a.ClockTime)) AS myMin\r\n\t\t\t,IF(COUNT(a.ClockTime)>1,MAX(a.ClockTime),IF(MAX(a.ClockTime)>'12:00:00',a.ClockTime,NULL)) AS myMax \r\n\tFROM a \r\n\tGROUP BY a.UserNumber,a.AttendanceDate\r\n\r\n这里在SQLyog IDE里面是没有问题的、可以查出并且是四列、要做的就是再插入到新表就OK了、一个人一天只有一条记录\r\n\r\n在这里把代码嵌入到node中报错了\r\n\r\n    ERR:this is incompatible with sql_mode=only_full_group_by\r\n\r\n\r\n百度了好久、也找了好久问题\r\n\r\n最后发现了问题、原因是\r\n\r\n> 子if里的列必须要包一层聚合函数\r\n\r\n> Group by 查出结果集如果查出的列不是Group by的条件列、则必须是聚合函数的列\r\n\r\n就把子IF的结果套上对应的聚合函数吧\r\n\r\n\tSELECT a.UserId,a.AttendanceDate \r\n\t\t\t,IF(COUNT(a.ClockTime)>1,MIN(a.ClockTime),IF(MIN(a.ClockTime)>'12:00:00',NULL,MIN(a.ClockTime))) AS myMin\r\n\t\t\t,IF(COUNT(a.ClockTime)>1,MAX(a.ClockTime),IF(MAX(a.ClockTime)>'12:00:00',MAX(a.ClockTime),NULL)) AS myMax \r\n\tFROM a \r\n\tGROUP BY a.UserNumber,a.AttendanceDate\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)"},309:function(n,t){n.exports='### 兼容IE8、使用log插件取代原始console.log\r\n\r\n2016-12-05 liujians\r\n\r\nIE8下面会报没有console这个对象、所以用log插件替换是不错的选择\r\n\r\nlog的blog:[http://patik.com/blog/complete-cross-browser-console-log/](http://patik.com/blog/complete-cross-browser-console-log/)\r\n\r\n这个插件代码量很少、用法也非常简单、引入即可\r\n\r\n使用起来就像这样：\r\n\r\n\tlog(111,222,{test:"test"},new Date())\r\n\r\n![](http://ogo5zlrgk.bkt.clouddn.com/image/consolelog.png)\r\n\r\n打印出是一个数组、可以一次打印多个对象或字符串\r\n\r\n好处是做字符串标志时候更方便了\r\n\r\n比如：\r\n\tvar test = [{ test:"test" },{test:"newtest"}];\r\n\r\n这个JSON想要打印出来、但是之前的代码也加了一些打印、为了区分开、你可能是这样：\r\n\r\n\tconsole.log("====test======");\r\n\tconsole.log(test);\r\n\r\n使用了log，你就可以：\r\n\r\n\tlog("test",test);\r\n\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)\r\n\r\n'},310:function(n,t){n.exports="### react的学习之路(一)\n\n2017-06-09 liujians\n\n这几天、把公司的项目也忙的差不多了\n\n手头慢慢的多了学习的时间、想到还没有用react做过项目\n\n打算从react开始入手、学习这个全家桶\n\n前几天在看`vue-cli`的结构、`webpack`配置、以及热更新服务器和打包都是怎么写的、为了深入`webpack2.x`、方便自定义`react`的脚手架\n\n官方推荐使用[create-react-app](https://github.com/facebookincubator/create-react-app)\n\n看了看阮一峰老师的教学、觉得虽然只过了一年、但是发现很多东西都换代了、`react-router`已经有了4.x的新写法\n\n再加上webpack的升2.x版本等等、\n\n所以我觉得看阮老师的`react`倒是没太多变化、但是`react-router`和`webpack`、可能学习起来会有误区、所以干脆就找文档看吧\n\n`react`出来也蛮久的了、在国内找一份好的中文文档还是那么不容易\n\n这里找到了`react-router`和`redux`还有`webpack`的文档：\n\n- [react-router](https://reacttraining.cn/)\n- [redux](http://www.redux.org.cn/)\n- [webpack](http://www.css88.com/doc/webpack2/)\n\n然后根据几天的折腾、发现`create-react-app`默认是简易版的、也就是打包之类的命令都给你集合好了、只需要一键\n\n但是这样定制化不太好\n\n找了一圈`yeoman`上面的`gennerator`、发现很多要么webpack没升级、要么结构不完美、\n\n然后经过这几天的折腾、偶然间、我发现了`create-react-app`还有一个变形金刚功能（这样叫比较形象）\n\n\tnpm run eject\n\n这是一个不可逆操作、此操作会把之前的package之类的直接修改\n\n变为一个可拓展的、基于`webpack`的脚手架\n\n估计这才是很多人所需要的\n\n这里也记录一下、我基于他的`webpack`配置、改了几个地方\n\n第一：我发现它的打包是没有分离出vendor的、所以在`webpack.config.prod.js`里面加入了`webpack.optimize.CommonsChunkPlugin`这个插件\n\n第二：它的css-loader默认没有开启modules功能、所以修改成\n\n\t{\n\t\tloader: 'css-loader',\n\t\toptions: {\n\t\t\tmodules: true,\n\t\t\timportLoaders: 1,\n\t\t},\n\t},\n\n后面再看有没有还需要修改的地方吧\n\n6月13日更新\n\n第三：因为使用了css module、所以所有的css名都被转成了hash值、这样有一些公用的css就也要写很多、所以这里把配置改了、让common.css单独不使用css-module\n把cssloader的配置复制了一份、分别加入了exclude和include\n\n    {\n      test: /\\.css$/,\n      use: [\n        require.resolve('style-loader'),\n        {\n          loader: 'css-loader',\n          options: {\n            modules: true,\n            importLoaders: 1,\n          },\n        },\n        {\n          loader: require.resolve('postcss-loader'),\n          options: {\n            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options\n            plugins: () => [\n              require('postcss-flexbugs-fixes'),\n              autoprefixer({\n                browsers: [\n                  '>1%',\n                  'last 4 versions',\n                  'Firefox ESR',\n                  'not ie < 9', // React doesn't support IE8 anyway\n                ],\n                flexbox: 'no-2009',\n              }),\n            ],\n          },\n        },\n      ],\n      exclude: [\n        path.resolve(__dirname, \"../src/css/common.css\")\n      ],\n    },\n    {\n      test: /\\.css$/,\n      use: [\n        require.resolve('style-loader'),\n        {\n          loader: 'css-loader',\n          options: {\n            importLoaders: 1,\n          },\n        },\n        {\n          loader: require.resolve('postcss-loader'),\n          options: {\n            ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options\n            plugins: () => [\n              require('postcss-flexbugs-fixes'),\n              autoprefixer({\n                browsers: [\n                  '>1%',\n                  'last 4 versions',\n                  'Firefox ESR',\n                  'not ie < 9', // React doesn't support IE8 anyway\n                ],\n                flexbox: 'no-2009',\n              }),\n            ],\n          },\n        },\n      ],\n      include: [\n        path.resolve(__dirname, \"../src/css/common.css\")\n      ],\n    },\n\n___\n本文出自————[http://liujians.me](http://liujians.me)\n"},311:function(n,t){n.exports="### 单页应用中disqus插件的重载\n\n2017-05-24 liujians\n\ndisqus默认是每个页面引入、然后跳转会重载、\n\n在拓展disqus这套评论插件的时候、遇到了一些小问题、\n\n这里问题在于、我的blog是vue的SPA应用、用router跳转的时候评论插件不会重载、这就尴尬了\n\n遇到问题先[https://www.google.com/](https://www.google.com/)\n\n这里搜索 `disqus ajax` 找到一些结果\n\n看了一下、这里提供的文档\n[https://help.disqus.com/customer/portal/articles/472107-using-disqus-on-ajax-sites\n](https://help.disqus.com/customer/portal/articles/472107-using-disqus-on-ajax-sites)\n\n这样是可以解决问题的\n\n如果还不知道怎么写、可以看它的github例子\n[https://github.com/disqus/DISQUS-API-Recipes/blob/master/snippets/js/disqus-reset/disqus_reset.html](https://github.com/disqus/DISQUS-API-Recipes/blob/master/snippets/js/disqus-reset/disqus_reset.html)\n\n这里虽然可以解决问题、但是想继续探究\n\n引入他的JS之后是有个内置对象的、叫DISQUS\n\n那么我们可不可以打印出这个对象看一下有什么方法呢？\n\n一定是可以的\n\n在控制台输入DISQUS\n\n![](http://ogo5zlrgk.bkt.clouddn.com/image/9D5673D4-AD1C-401C-8AE2-19366739D12D.png)\n\n这里确实有reset的方法\n\n果然如此、那么、问题解决了\n___\n本文出自————[http://liujians.me](http://liujians.me)\n"},312:function(n,t){n.exports="### hexo主题制作入坑之旅\r\n\r\n2016-12-10 liujians\r\n\r\nhexo是一个挺好玩的东西、之前也写过ejs、所以打算写一套hexo的主题尝试一下\r\n\r\n首先要全局安装hexo\r\n\r\n\tnpm i hexo -g\r\n\r\n然后找个目录初始化\r\n\t\r\n\thexo init\r\n\r\n---\r\n\r\n中间要等待很久，因为他会自动帮你安装package.json的依赖\r\n\r\n接下来全局安装yeoman\r\n\r\n\tcnpm i -g yo\r\n\r\n然后安装生成主题结构目录工具\r\n\r\n\tnpm i -g generator-hexo-theme\t\r\n\r\n建一个新主题目录\r\n\r\n\tmd test\r\n\tcd test\r\n\r\n\r\n\r\n\tyo hexo-theme\r\n\t\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)"},313:function(n,t){n.exports="### 制作两端对齐响应式布局\n\n2017-05-29 liujians\n\n以前做的一个例子、现在博客刚刚重构完、所以整理一下放出来\n\n制作这个布局主要用到了`text-align: justify`\n\n大家应该知道、这是文字两端对齐的css样式\n\n但是注意了（敲敲黑板） **没有换行的文本不会生效**\n\n那么这里有一个投机的办法、就是用:after的content属性为它创造换行的环境\n\n用到这个、我还想起了一个和他很像的属性`text-align-last: justify`\n\n但是`text-align-last` 只有IE和Firefox支持\n\n那么就不考虑、喜欢尝试的同学可以下去自己试一下\n\n那么只需要把元素设为`inline-block`并且加上after伪类就可以了\n\n具体代码和例子[点击这里](http://liujians.me/#/example/justifyLayout)\n\n___\n本文出自————[http://liujians.me](http://liujians.me)\n"},314:function(n,t){n.exports='### 判断浏览器为PC还是移动端\n\n2016-11-23 liujians\n\n判断userAgent、根据正则、找出对应的设备或者浏览器\n\n\t<script type="text/javascript">\n        function browserRedirect() {\n            var sUserAgent = navigator.userAgent.toLowerCase();\n            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";\n            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";\n            var bIsMidp = sUserAgent.match(/midp/i) == "midp";\n            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";\n            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";\n            var bIsAndroid = sUserAgent.match(/android/i) == "android";\n            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";\n            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";\n            document.writeln("您的浏览设备为：");\n            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {\n                document.writeln("phone");\n            } else {\n                document.writeln("pc");\n            }\n        }\n\n        browserRedirect();\n    <\/script>\n\n___\n本文出自————[http://liujians.me](http://liujians.me)\n\n'},315:function(n,t){n.exports='### 利用padding制作响应式正方形\n\n2017-05-28 liujians\n\n端午放假了、在家闲来无事，整理了一下以前的东西\n\n有些情况下、我们要做响应式的布局、来应对多设备、或者多分辨率\n\n来个简单的需求\n\n**需求：每行三个正方形、依次排开、做列表、流式**\n\n最简单的需求出来了、那我们直接开搞\n\n首先、我们要了解到、padding的百分比是基于谁的\n\n这里敲了几下黑白、这道送分题、相信很多人心中已经知道了答案\n\n那就是 **基于父元素的宽度**\n\n注意、是宽度、也就是说、利用这个特性、我们父子元素保持宽度一致、\n\n子元素的padding是100%、就可以达到效果\n\n\t<style>\n\t\t.square-box{\n\t      box-sizing: border-box;\n\t      width:30%\n\t    }\n\t    .square{\n\t    \twidth:100%;\n\t    \tpadding-bottom: 100%;\n\t    \tbackground: red;\n    \t\tbox-sizing: border-box;\n\t    }\n\t</style>\n\t<div class="square-box">\n\t\t<div class="square"></div>\n\t</div>\n\n这样做好了一个、那么三个一排、只需要用float就可以了\n\n我们做好了最基本的布局、那么新的需求来了\n\n**我们的列表、图片是正方形的、下方要加入一段说明文字**\n\n那么就在这样的基础上、每个列表项增加固定的高度就好了\n\n最简单的方式、在此基础上、直接给square加上`padding-top:30px;`就可以了\n\n因为padding-bottom的高度是100%、那么会在原本的正方形上面再加高30px\n\n那么还有一个问题、列表项之间也不可能挨着啊、之间的间隙怎么做呢？\n\n两种方案：\n\n最简单的就是给父元素加padding、\n\n这里如果是移动端的用户、且考虑安卓4.4版本以上的开发者、可以使用calc来做\n\n这里把两种都写在了一个例子里:[点击这里](http://liujians.me/#/example/paddingSquare)\n\n___\n本文出自————[http://liujians.me](http://liujians.me)\n'},316:function(n,t){n.exports="### 使用web ppt做react技术栈的粗略分享\r\n\r\n2017-06-21 liujians\r\n\n明天周四了、要在公司给公司没有了解过react的同事的开发做一个react粗略的分享\n\n做了一个ppt、使用reveal.js写的\n\n[关于reveal.js](https://github.com/hakimel/reveal.js)\n\n我在群里发、当时很多人不理解、为什么写ppt、不用wps、keynote之类的东西呢？\n\n其实很简单、代码写惯了、让你用keynote、拖东西、加动画、很不顺畅、估计事倍功半\n\n用reveal.js、切换效果一个配置就搞定了、需要加动画的地方直接加class、而且自带整合了zoom和notes的功能\n\n关于reveal.js、还有很多配置没有用到、希望以后有机会做ppt的时候用到\n\n现在ppt已经发到线上了、地址是:\n\n[http://liujians.me/react-share/](http://liujians.me/react-share/)\n\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)"},317:function(n,t){n.exports="### react的学习之路(三)\n\n2017-06-14 liujians\n\n上一期把路由弄上了、根据官方文档来做很简单\n\n现在打算做组件的状态共享了\n\n首选redux\n\n写过vue的同学肯定发现redux其实和vuex有相似之处\n\nredux中涉及到reducer action store\n\n要想使用redux、首先肯定是引入\n\n    import { applyMiddleware, createStore } from 'redux';\n\n引入了两个东西、第一个是应用中间件的方法、第二个是创建store的方法\n\ncreateStore需要一个参数、那就是reducer、是一个纯函数\n\n    function counter(state = { count: 0 }, action) {\n        const count = state.count\n        switch (action.type) {\n            case 'INCREMENT':\n                return {count:count + 1};\n            case 'DECREMENT':\n                return {count:count - 1};\n            default:\n                return state\n        }\n    }\n\nreducer传入之后、store就创建出来了、但是state是默认的值、需要触发修改、需要有一个action\n\naction通常会由一个函数来创建、免得每次都要构建\n\n    function addAction(type){\n      return {\n        type,\n        name:'action'\n      }\n    }\n\n如何调用触发更新state呢\n\nstore下面有几个常用的属性\n\n    store.dispatch(addAction('INCREMENT'))//传入action触发reducer\n\n    store.getState()//获取当前的state\n\n    store.subscribe(() =>\n      console.log('update')//每当state发生变化回调触发\n    );\n\n对于react使用redux、为了简化、作者写了一个react-redux\n\n使用react-redux、需要使用额外的api\n\n    import { connect,Provider } from 'react-redux'\n\n    // Map Redux state to component props\n    function mapStateToProps(state) {\n      return {\n        value: state.count\n      }\n    }\n\n    // Map Redux actions to component props\n    function mapDispatchToProps(dispatch) {\n      return {\n        onIncreaseClick: () => dispatch(increaseAction)\n      }\n    }\n\n    About = connect(\n      mapStateToProps,\n      mapDispatchToProps\n    )(About)\n\n把about组件传进去、然后建立一个带connect的组件、会把值通过mapStateToProps和mapDispatchToProps这两个方法转化、变成参数传到组件中去\n\n还需要一个react-redux提供的组件来完成这个功能\n\n    <Provider store={store}>\n      <About />\n    </Provider>\n\n这样就大功告成了\n\n更多redux的中文教程、可以参考：[http://www.redux.org.cn/](http://www.redux.org.cn/)\n\n___\n本文出自————[http://liujians.me](http://liujians.me)\n"},318:function(n,t){n.exports="### react的学习之路(二)\n\n2017-06-13 liujians\n\n创建完了react的项目、想着弄的完整点、自然要用到react-router做路由控制\n\n4.x的react-router写法上还是较以前有很多不同的\n\n我是照着官方文档的例子学习的、贴地址\n\n[https://reacttraining.cn/web/guides/quick-start](https://reacttraining.cn/web/guides/quick-start)\n\n首先\n\n> npm install --save react-router-dom\n\n然后就是引入他的里面的几个东西\n\n    import React from 'react'\n    import {\n      BrowserRouter as Router,\n      Route,\n      Link\n    } from 'react-router-dom'\n\n然后就是写组件、组件分为三个、一个主页也相当于根视图、其他两个是路由切换页面\n\nRouter作为根容器、然后Route和Link作为切换组件和链接\n\n组件有一个match参数、可以match.url取到对应的url、或者match.params\n\nrouter的功能暂时只用到这里、后面再陆续补充\n\n___\n本文出自————[http://liujians.me](http://liujians.me)\n"},319:function(n,t){n.exports="### 判断滚动条是向上还是向下\n\n2017-05-27 liujians\n\n在写wap中遇到了这个需求、把代码记录下来吧\n\n    $(document).ready(function(){\n        var position=0,top=0;\n\n        $(window).scroll(function(e){\n                position = $(this).scrollTop();\n\n                if(top<=position){//下滚\n                    .......\n                }\n\n                else{//上滚\n                    .......\n                }\n                setTimeout(function(){top = position;},0);\n        });\n    });\n\n___\n本文出自————[http://liujians.me](http://liujians.me)\n"},320:function(n,t){n.exports="### MySql 临时表的使用\r\n\r\n2016-11-15 liujians\r\n\r\n这是之前写到的一个功能、因为一直做前端，刚开始做后端的东西、很多稍复杂的查询都没有思路\r\n\r\n现在的场景有个功能、批量审批用户的加班、相同用户累计调休时间。更新到userinfo表中\r\n\r\n没听懂没关系，我们拆开看：\r\n\r\n1. 审批的用户可能是多个\r\n2. 批量审批中、如果有ID相同的用户需要累计被审批的时间相加\r\n3. 不同用户的时间分开计算\r\n4. 计算出结果后、更新到用户表的每个用户字段\r\n\r\n按这样的逻辑来看、前台传过来的记录ID我们只需要查询出对应的userId和他们的审批时间集合、然后用group by 分组就好\r\n\r\n显示出来的东西我们要更新到userinfo可能就稍微有点麻烦\r\n\r\n我也是那次第一次听说有临时表的概念\r\n\r\n听人讲了一下、那就要尝试一下\r\n\r\n    CREATE TEMPORARY TABLE IF NOT EXISTS tmp \r\n    (\r\n    UserId INT UNSIGNED NOT NULL,\r\n    DurationTime DECIMAL(4,1) NOT NULL\r\n    )\r\n    ENGINE=MEMORY; -- change engine type if required e.g myisam/innodb\r\n    \r\n    INSERT INTO tmp (UserId, DurationTime) \r\n    (SELECT UserId,SUM(oq.OverTimeDuration) FROM overtimerequest oq WHERE oq.OverTimeRequestId IN (2,5,7,9) GROUP BY UserId);\r\n    \r\n\r\n首先创建一个临时表\r\n\r\n用作记录每个用户对应的ID和审批时间集合（用作中间层）\r\n\r\n然后把临时表的数据、用作表连接更新到userinfo表\r\n\r\n\tUPDATE userinfo ui \r\n    JOIN tmp \r\n        ON ui.UserId = tmp.UserId \r\n    SET ui.DurationTime = ui.DurationTime+tmp.DurationTime\r\n\r\n最后别忘了删除临时表\r\n\r\n\tDROP TABLE tmp\r\n\r\nover~\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)"},321:function(n,t){n.exports='### 使用formidable做node的文件上传，并利用iframe让表单提交不跳转\r\n\r\n2016-11-14 liujians\r\n\r\n今天做功能做到了文件上传、之前做过img的上传是用的h5的fileReader对象转base64上传\r\n遇到纯数据文件上传确实做的时候遇到了很多问题\r\n\r\n开始的时候想的用ajax传（以前base64就是长字符串、可以用ajax），发现ajax只能传字符串、不然就要引用插件、对于现在的项目来说、引入插件也会变得冗余、所以寻求一个其他的方法\r\n\r\n先没管那么多、先用表单传过去看看吧、发现传文件流需要给from表单一个比较重要的属性`enctype="multipart/form-data"`\r\n\r\n这里是前台代码v-on：change的方法可以理解成onchange触发submit()\r\n\r\n\t\t<form id="fileForm" method="post" action="/data/import" enctype="multipart/form-data" >\r\n        \t<a href="#" class="btn btn-primary uploaderBtn">\r\n       \t\t\t上传\r\n                <input type="file" id="test" name="files" v-on:change="importData(\'fileForm\')"/>\r\n            </a>\r\n        </form>\r\n\r\n提交之后、node这边应该用我们的主角formidable抓取请求了\r\n\r\n首先install这一步是一定的\r\n\r\n    npm install formidable --save-dev\r\n\t//fs文件操作模块（可选项）\r\n\tnpm install formidable --save-dev\r\n\r\n用require的方式引入\r\n\r\n\tvar formidable = require(\'formidable\');\r\n\tvar fs = require(\'fs\');\r\n\r\n方法中我们要先new一个formidable对象并设置他的属性\r\n\r\n\tvar form = new formidable();\r\n\tform.encoding = \'utf-8\';\t\t//设置编辑\r\n    form.uploadDir = \'static\'\t //设置上传目录\r\n    form.keepExtensions = true;\t //保留后缀\r\n    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小\r\n\r\n调用form.parse()方法\r\n\t\r\n\tform.parse(req, (err, fields, files)=>{\r\n\t\t\r\n\t\tif (err) {\r\n          console.log("文件上传报错"+err);\r\n\t      res.send(err);\t\t\r\n\t    }\r\n\t\t//这里我把上传的文件读取出来\r\n\t\tvar data = fs.readFileSync(files.files.path,\'utf-8\');\r\n\t\t//你要做的操作\r\n\t\t...\r\n\t}\r\n\r\n到了这一步、上传可以实现了、但是前台传完文件之后会跳转到action的地址、这对于我来说是不想看到的\r\n\r\n所以便有了iframe的出现\r\n\r\n\t\t<iframe name="testIframeName" style="display:none;"></iframe>\r\n        <form target="testIframeName" id="fileForm" method="post" action="/data/import" enctype="multipart/form-data" >\r\n        \t<a href="#" class="btn btn-primary uploaderBtn">\r\n        \t\t上传\r\n        \t\t<input type="file" id="test" name="files" v-on:change="importData(\'fileForm\')"/>\r\n        \t</a>\r\n        </form>\r\n\r\n改写了一下前台页面、加入了一个iframe并且把他们用target链接到一起、意义在于、form提交之后、iframe去跳转、form表单不会跳转、iframe是看不见的、所以达到了简单实现我们要的效果\r\n\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)'},322:function(n,t){n.exports='### 使用Vue的props做组件的通信\n\n2016-11-18 liujians\n\nvue比较方便的就是自己抽象组件、做代码分离和代码复用、\n\n抽离出的组件有自己的数据、自己的方法\n\n那么抽离出的组件如果需要依赖传入参数怎么办呢？\n\n这里给出一种方案、就是用props做父子通信\n\n首先就用我博客的头部组件代码为例（现在已经重构、旧版blog的代码仅供参考）\n\n\t<template>\n\t\t<div class="content-header">\n\t\t\t<h1>\n\t\t\t\t{{title}}\n\t\t\t\t<small>{{v}}</small>\n\t\t\t</h1>\n\t\t\t<ol class="breadcrumb">\n\t\t\t\t<li v-for="(i,index) in menuList" v-bind:class="{ active: i.isActive}">\n\t\t\t\t\t<router-link :to="{name:i.url}">{{i.text}}</router-link>\n\t\t\t\t</li>\n\t\t\t\t\x3c!-- <li class="active">异常考勤记录</li> --\x3e\n\t\t\t</ol>\n\n\t\t</div>\n\t</template>\n\t<script>\n\t\texport default {\n\t\t  name: \'content_header\',\n\t\t  data(){\n\t\t  \treturn {\n\t\t  \t\ttitle:"Welcome",\n\t\t  \t\tv:"liujians.me"\n\t\t  \t}\n\t\t  },\n\t\t  props: [\'menuList\']\n\t\t}\n\t<\/script>\n\n仔细看的话代码并不难、这里v-for用到了一个menuList、但是我们的data里面并没有menuList\n\n所以menuList的含义是、哪个页面使用、就需要传递参数进来、对应的模板就会变化\n\n页面的引用就可以用 import 或者 require :\n\n\timport contentHeader from \'./content_header\'\n\n然后在你的Vue实例中引用：\n\n\texport default{\n\t\tdata(){\n\t      \treturn {\n\t\t        menuList:[\n\t\t          {\n\t\t            text:"建站笔记",\n\t\t            isActive:"true",\n\t\t            url:"createNote"\n\t\t          }\n\t\t        ]\n\t\t\t}\n\t\t},\n\t\tcomponents:{\n\t      contentHeader,\n\t    }\n\t}\n\n页面上的组件就绑定页面中的menuList数组就可以传递过去了\n\n\t<content-header v-bind:menuList="menuList"></content-header>\n\n页面上引用完毕、可以达到我们想要的效果了\n\n当然还有一种方法、通过$parent获取父组件的相关属性和数据\n\n我们可以在子组件的方法中通过\n\n\tthis.$parent.dataname\n\n获取到父组件数据、甚至可以重新为父组件数据赋值\n\n___\n本文出自————[http://liujians.me](http://liujians.me)\n'},323:function(n,t){n.exports="### webpack 笔记(一有机会就更新)\r\n\r\n2016-12-08 liujians\r\n\r\n\t# 全局安装\r\n\t$ npm install webpack -g\r\n\t# 安装 webpack 依赖\r\n\t$ npm install webpack --save-dev\r\n\t# 查看 webpack 版本信息\r\n\t$ npm info webpack\r\n\t# 使用 Webpack 开发工具\r\n\t$ npm install webpack-dev-server --save-dev\r\n\t# 将入口文件（entry）打包成bundle 自动载入引入的JS\r\n\t$ webpack entry.js bundle.js\r\n\t# 安装loader\r\n\t$ npm install css-loader style-loader\r\n\t# 下载babel-loader模块\r\n\t$ npm install --save-dev babel-loader\r\n\t# 下载babel-preset-es2015，这样确保babel能解析ES6的最新特性\r\n\t$ npm install --save-dev babel-preset-es2015\r\n\t$ npm install babel-core --save-dev\r\n\t# 输出内容带有进度、颜色、结果输出为JSON\r\n\t$ webpack --progress --colors --watch --json\r\n\t# 开启监听模式\r\n\t$ webpack --watch\r\n\t# 压缩混淆脚本\r\n\t$ webpack -p\r\n\t# 生成map映射文件，告知打包到那里了\r\n\t$ webpack -d\r\n\t# inline模式启动server\r\n\t$ webpack-dev-server --inline\r\n\r\n\r\n> 关于配置项\r\n\t\r\n\tmodule.loader: 其中test是正则表达式，对符合的文件名使用相应的加载器./.css$/会匹配 xx.css文件，但是并不适用于xx.sass或者xx.css.zip文件.\r\n\turl-loader: 它会将样式中引用到的图片转为模块来处理; 配置信息的参数“?limit=8192”表示将所有小于8kb的图片都转为base64形式。\r\n\tentry: 模块的入口文件。依赖项数组中所有的文件会按顺序打包，每个文件进行依赖的递归查找，直到所有模块都被打成包；\r\n\toutput：模块的输出文件，其中有如下参数：\r\n\tfilename: 打包后的文件名\r\n\tpath: 打包文件存放的绝对路径。\r\n\tpublicPath: 网站运行时的访问路径。\r\n\trelolve.extensions: 自动扩展文件的后缀名，比如我们在require模块的时候，可以不用写后缀名的。\r\n\trelolve.alias: 模块别名定义，方便后续直接引用别名，无须多写长长的地址\r\n\tplugins 是插件项;\r\n\r\n> 插件\r\n\r\n\tnew webpack.optimize.UglifyJsPlugin({\r\n      \tcompress: {\r\n      \t  warnings: false\r\n      \t},\r\n\t\texcept: ['$super', '$', 'exports', 'require']\r\n    }),\r\n\tnew HtmlWebpackPlugin({\r\n      filename: 'index.html',\r\n      template: 'index.html',\r\n      inject: true\r\n    })\r\n___\r\n本文出自————[http://liujians.me](http://liujians.me)"},324:function(n,t){n.exports="### zepto拓展getScript函数用作跨域\n\n2016-12-16 liujians\n\n为zepto扩展getScript方法\n\n用到了、直接贴代码\n\n\tvar _getScript = function(url, callback) {\n\t    var head = document.getElementsByTagName('head')[0],\n\t        js = document.createElement('script');\n\n\t    js.setAttribute('type', 'text/javascript');\n\t    js.setAttribute('src', url);\n\n\t    head.appendChild(js);\n\n\t    //执行回调\n\t    var callbackFn = function(){\n\t            if(typeof callback === 'function'){\n\t                callback();\n\t            }\n\t        };\n\n\t    if (document.all) { //IE\n\t        js.onreadystatechange = function() {\n\t            if (js.readyState == 'loaded' || js.readyState == 'complete') {\n\t                callbackFn();\n\t            }\n\t        }\n\t    } else {\n\t        js.onload = function() {\n\t            callbackFn();\n\t        }\n\t    }\n\t}\n\t//如果使用的是zepto，就添加扩展函数\n\tif(Zepto){\n\t    $.getScript = _getScript;\n\t}\n\n___\n本文出自————[http://liujians.me](http://liujians.me)\n"},340:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",[r("markdown-page",{attrs:{text:n.str}}),n._v(" "),r("money-reward"),n._v(" "),r("div",{attrs:{id:"disqus_thread"}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.d15398a135e368d2a994.js.map
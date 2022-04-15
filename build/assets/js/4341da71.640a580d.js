"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5234],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={sidebar_position:12,id:"faq",title:"FAQ"},l=void 0,c={unversionedId:"faq",id:"version-0.6.1/faq",title:"FAQ",description:"1.Flink on Yarn HA\u9ad8\u53ef\u7528,\u914d\u7f6ehdfs\u4f9d\u8d56,\u65e0\u6cd5\u8bc6\u522bHDFS\u9ad8\u53ef\u7528\u8bbf\u95ee\u5730\u5740\u522b\u540d\uff0c\u5728Perjob\u548capplication\u6a21\u5f0f\uff0c\u63d0\u4ea4\u4efb\u52a1\uff0c\u51fa\u73b0\u5f02\u5e38\u4fe1\u606f",source:"@site/versioned_docs/version-0.6.1/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/DataLinkDC/dinky-website/tree/master/versioned_docs/version-0.6.1/faq.md",tags:[],version:"0.6.1",sidebarPosition:12,frontMatter:{sidebar_position:12,id:"faq",title:"FAQ"},sidebar:"version-0.6.1/tutorialSidebar",previous:{title:"debug",permalink:"/docs/developer_guide/debug"},next:{title:"\u4ea4\u6d41\u4e0e\u8d21\u732e",permalink:"/docs/comminicate"}},u={},s=[],d={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"1.Flink on Yarn HA\u9ad8\u53ef\u7528,\u914d\u7f6ehdfs\u4f9d\u8d56,\u65e0\u6cd5\u8bc6\u522bHDFS\u9ad8\u53ef\u7528\u8bbf\u95ee\u5730\u5740\u522b\u540d\uff0c\u5728Perjob\u548capplication\u6a21\u5f0f\uff0c\u63d0\u4ea4\u4efb\u52a1\uff0c\u51fa\u73b0\u5f02\u5e38\u4fe1\u606f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/dev/docs/HDFS%E9%9B%86%E7%BE%A4%E5%88%AB%E5%90%8D.png",alt:"HDFS\u96c6\u7fa4\u522b\u540d"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u529e\u6cd5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#\u89e3\u51b3\u65b9\u6848\u4e00\n#\u6dfb\u52a0HADOOP_HOME\u73af\u5883\u53d8\u91cf\uff0c\u4fee\u6539 /etc/profile\nexport HADOOP_HOME=/opt/cloudera/parcels/CDH/lib/hadoop\n#\u89e3\u51b3\u65b9\u6848\u4e8c\nauto.sh\u91cc\u52a0\u4e00\u884cexport HADOOP_HOME=/opt/cloudera/parcels/CDH/lib/hadoop\n")),(0,a.kt)("p",null,"2.\u51fa\u73b0commons-cli\u5f02\u5e38\u62a5\u9519\uff0c\u9700\u8981\u5728\u5982\u4e0b\u8def\u5f84\u653e\u5165commons-cli\u4f9d\u8d56"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u529e\u6cd5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u4e0b\u8f7dcommon-cli\u5305\uff0c\u9700\u8981\u5728\u5982\u4e0b\u8def\u5f84\u653e\u7f6e\uff1a\n\u5728Flink\u7684\u4e0b\u7684lib\n\u5728dinky\u4e0b\u7684plugins\nHDFS\u7684/flink/lib/\n")),(0,a.kt)("p",null,"3.\u4f9d\u8d56\u51b2\u7a81"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/faq/dependency_conflict.png",alt:"dependency_conflict"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u529e\u6cd5\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u6dfb\u52a0flink-shade-hadoop-uber-3\u5305\u540e\uff0c\u8bf7\u624b\u52a8\u5220\u9664\u8be5\u5305\u5185\u90e8\u7684javax.servlet \u7b49\u51b2\u7a81\u5185\u5bb9\n")),(0,a.kt)("p",null,"4.\u8fde\u63a5hive\u5f02\u5e38"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u5f02\u5e38\u4fe1\u606f Caused by: java.lang.ClassNotFoundException: org.apache.http.client.HttpClient\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://www.aiwenmo.com/dinky/docs/zh-CN/faq/hive_http_error.png",alt:"hive_http_error"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u529e\u6cd5:")," "),(0,a.kt)("p",null,"\u5728plugins\u4e0b\u6dfb\u52a0\u4ee5\u4e0b\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"httpclient-4.5.3.jar\nhttpcore-4.4.6.jar\n")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},l="Tron",i={unversionedId:"Challenges/Tron",id:"Challenges/Tron",title:"Tron",description:"This challenge will heavily test the skills of using classes and interacting between them. Your task is to make a game where two players face off in a game of light cycles from Tron.",source:"@site/docs/Challenges/Tron.md",sourceDirName:"Challenges",slug:"/Challenges/Tron",permalink:"/PythonTutorial/docs/Challenges/Tron",draft:!1,editUrl:"https://github.com/JaedanC/PythonTutorial/tree/main/docs/Challenges/Tron.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Crossword Solver",permalink:"/PythonTutorial/docs/Challenges/Crossword Solver"}},s={},c=[{value:"Game board",id:"game-board",level:2},{value:"Level format",id:"level-format",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tron"},"Tron"),(0,o.kt)("p",null,"This challenge will heavily test the skills of using classes and interacting between them. Your task is to make a game where two players face off in a game of ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=SqSuRdkglxM"},"light cycles")," from Tron."),(0,o.kt)("h2",{id:"game-board"},"Game board"),(0,o.kt)("p",null,"This is an example of a game:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It is 56 turns in."),(0,o.kt)("li",{parentName:"ol"},"The board is 40 * 20 squares (playable area)"),(0,o.kt)("li",{parentName:"ol"},"There are 2 players")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"}," ----------------------------------------\n|                    o-------------o     |\n|                           o---o  |     |\n|                           |   |  |     |\n|                           |   |  |     |\n|                           |   |  |     |\n|                 o---------o   |  |     |\n|                oo             |  |     |\n|           1----o              o--o     |\n|     2--o                               |\n|        |    o--------------o           |\n|        |    |              |           |\n|        |    |      o------o|           |\n|        |    |      |      ||           |\n|        o----o      |      ||           |\n|                    |      oo           |\n|                    |                   |\n|                    |                   |\n|                    |                   |\n|                    |                   |\n|                    o                   |\n ----------------------------------------\n")),(0,o.kt)("h2",{id:"level-format"},"Level format"),(0,o.kt)("p",null,"To play the game a level file will be loaded that will contain information about the game to be played. This is the format of the game above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=board.json",title:"board.json"},'{\n    "Size": [40, 20],\n    "Players": {\n        "1": [20, 19],\n        "2": [20, 0],\n    },\n    "Points": {\n        "Kill": 10,\n        "Survivor": 10\n    }\n}\n')),(0,o.kt)("p",null,"The take-aways is that the file format is ",(0,o.kt)("inlineCode",{parentName:"p"},"json"),"."))}m.isMDXComponent=!0}}]);
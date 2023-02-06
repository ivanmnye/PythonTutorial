"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1285:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:5},i="Crossword Solver",s={unversionedId:"Crossword Solver",id:"Crossword Solver",title:"Crossword Solver",description:"Write a python program that assists in solving for words in a crossword. This is done by inputing what the known characters are for a word, and then the program will print a list of possible words that could go in that spot. Execution of the program is as follows:",source:"@site/docs/Crossword Solver.md",sourceDirName:".",slug:"/Crossword Solver",permalink:"/PythonTutorial/docs/Crossword Solver",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Crossword Solver.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/PythonTutorial/docs/Advanced"}},l={},p=[{value:"Solving for words",id:"solving-for-words",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"crossword-solver"},"Crossword Solver"),(0,n.kt)("p",null,"Write a python program that assists in solving for words in a crossword. This is done by inputing what the known characters are for a word, and then the program will print a list of possible words that could go in that spot. Execution of the program is as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ python crossword.py <path-to-word-list>\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"crossword.py")," file will contain the code for the program. The word-list file will be a file I will provide to you. For context, the word list file is just a standard .txt file that usually comes with linux computers that includes all English words in the dictionary. I will send you this file. Treat this dictionary as the possible solutions for a word in the crossword."),(0,n.kt)("h2",{id:"solving-for-words"},"Solving for words"),(0,n.kt)("p",null,"When the program is run initially print out some useful information to the user on how to use the program. Below is an example but, it is not exhaustive by any means."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ python crossword.py words.txt\nPlease input your word by typing the known letters and \u2018?\u2019 where you do not know the\nletter.\n")),(0,n.kt)("p",null,"Then, to solve a word the user will be asked to include some input. Print the \u201c>\u201d character to tell the user we are waiting for some input (highlighted in green is text input by the user in this example)."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"> tr??n\ntrain\ntreen\n> bre???t?\nbregmata\nbreviate\n>\n")),(0,n.kt)("p",null,"The program will continue to ask for words. In the example above you can see that one of the user inputs was the word \u201ctr??n\u201d. And it matched two words in the dictionary, so it printed them both out. Note that the number of letters must match as well. The program will close when the user press CTRL+C. (This is the standard way of telling a program to die)."),(0,n.kt)("p",null,"These are the concepts that will need to be researched to do this task, in order of how they should be researched:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Variables"),(0,n.kt)("li",{parentName:"ul"},"If statements."),(0,n.kt)("li",{parentName:"ul"},"Printing"),(0,n.kt)("li",{parentName:"ul"},"Command-line arguments"),(0,n.kt)("li",{parentName:"ul"},"Opening and reading text files"),(0,n.kt)("li",{parentName:"ul"},"String manipulation"),(0,n.kt)("li",{parentName:"ul"},"User input"),(0,n.kt)("li",{parentName:"ul"},"While loops")),(0,n.kt)("p",null,"I recommend not trying to tackle the program instantly, but rather become familiar with the concepts above before trying to attempt the problem."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[1747],{7686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tutorial-assertions/type-checking","title":"Type Checking","description":"TUnit assertions try to check the types at compile time.","source":"@site/docs/tutorial-assertions/type-checking.md","sourceDirName":"tutorial-assertions","slug":"/tutorial-assertions/type-checking","permalink":"/TUnit/docs/tutorial-assertions/type-checking","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Or Conditions","permalink":"/TUnit/docs/tutorial-assertions/or-conditions"},"next":{"title":"Delegates","permalink":"/TUnit/docs/tutorial-assertions/delegates"}}');var i=n(4848),o=n(8453);const r={sidebar_position:5},a="Type Checking",c={},l=[];function d(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"type-checking",children:"Type Checking"})}),"\n",(0,i.jsx)(t.p,{children:"TUnit assertions try to check the types at compile time.\nThis gives faster developer feedback and helps speed up development time.\n(Ever made a silly mistake on a test, but haven't realised till 15 minutes later after your build pipeline has finally told you? I know I have!)"}),"\n",(0,i.jsxs)(t.p,{children:["So this wouldn't compile, because we're comparing an ",(0,i.jsx)(t.code,{children:"int"})," and a ",(0,i.jsx)(t.code,{children:"string"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'    [Test]\n    public async Task MyTest()\n    {\n        await Assert.That(1).IsEqualTo("1");\n    }\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
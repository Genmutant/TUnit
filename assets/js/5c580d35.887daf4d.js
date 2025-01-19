"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[3604],{7543:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"tutorial-extras/parallel-limiter","title":"Parallel Limiter","description":"TUnit allows the user to control the parallel limit on a test, class or assembly level.","source":"@site/docs/tutorial-extras/parallel-limiter.md","sourceDirName":"tutorial-extras","slug":"/tutorial-extras/parallel-limiter","permalink":"/TUnit/docs/tutorial-extras/parallel-limiter","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11},"sidebar":"tutorialSidebar","previous":{"title":"Parallel Groups","permalink":"/TUnit/docs/tutorial-extras/parallel-groups"},"next":{"title":"Executors","permalink":"/TUnit/docs/tutorial-extras/executors"}}');var i=l(4848),s=l(8453);const n={sidebar_position:11},r="Parallel Limiter",o={},d=[{value:"Example",id:"example",level:2},{value:"Caveats",id:"caveats",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"parallel-limiter",children:"Parallel Limiter"})}),"\n",(0,i.jsx)(t.p,{children:"TUnit allows the user to control the parallel limit on a test, class or assembly level."}),"\n",(0,i.jsxs)(t.p,{children:["To do this, we add a ",(0,i.jsx)(t.code,{children:"[ParallelLimiter<>]"})," attribute."]}),"\n",(0,i.jsxs)(t.p,{children:["You'll notice this has a generic type argument - You must give it a type that implements ",(0,i.jsx)(t.code,{children:"IParallelLimit"})," and has a public empty constructor. That interface requires you to define what the limit is for those tests."]}),"\n",(0,i.jsx)(t.p,{children:"If a class doesn't have a parallel limit defined, it'll try and eagerly run when the .NET thread pool allows it to do so, so the upper limit is unknown."}),"\n",(0,i.jsxs)(t.p,{children:["If it does have a parallel limit defined, be aware that that parallel limit is shared for any tests with that same ",(0,i.jsx)(t.code,{children:"Type"})," of parallel limit."]}),"\n",(0,i.jsxs)(t.p,{children:["In the example below, ",(0,i.jsx)(t.code,{children:"MyParallelLimit"})," has a limit of ",(0,i.jsx)(t.code,{children:"2"}),". Now any test, anywhere in your test suite, that has this parallel limit attribute applied to it, will shared this limit, and so only 2 can be processed at a time."]}),"\n",(0,i.jsx)(t.p,{children:"Other tests without this attribute may run alongside them still."}),"\n",(0,i.jsxs)(t.p,{children:["And other tests with a different ",(0,i.jsx)(t.code,{children:"Type"})," of parallel limit may also run alongside them still, but limited amongst themselves by their shared ",(0,i.jsx)(t.code,{children:"Type"})," and limit."]}),"\n",(0,i.jsxs)(t.p,{children:["So be aware that limits are only shared among tests with that same ",(0,i.jsx)(t.code,{children:"IParallelLimit"})," ",(0,i.jsx)(t.code,{children:"Type"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"So if you wanted to do a global limit on an assembly, you could do:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"[assembly: ParallelLimiter<MyParallelLimit>]\n"})}),"\n",(0,i.jsx)(t.p,{children:"And as long as that isn't overridden on a test or class, then that will apply to all tests in an assembly and be shared among them all, limiting how many run in parallel."}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"using TUnit.Core;\n\nnamespace MyTestProject;\n\n[ParallelLimiter<MyParallelLimit>]\npublic class MyTestClass\n{\n    [Test, Repeat(10)]\n    public async Task MyTest()\n    {\n        \n    }\n\n    [Test, Repeat(10)]\n    public async Task MyTest2()\n    {\n        \n    }\n}\n\npublic record MyParallelLimit : IParallelLimit\n{\n    public int Limit => 2;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"caveats",children:"Caveats"}),"\n",(0,i.jsxs)(t.p,{children:["If a test uses ",(0,i.jsx)(t.code,{children:"[DependsOn(nameof(OtherTest))]"})," and the other test has its own different parallel limit, this isn't guaranteed to be honoured."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,l)=>{l.d(t,{R:()=>n,x:()=>r});var a=l(6540);const i={},s=a.createContext(i);function n(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
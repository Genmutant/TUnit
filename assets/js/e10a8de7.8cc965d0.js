"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[4956],{4673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"tutorial-basics/running-your-tests","title":"Running your tests","description":"As TUnit is built on-top of the newer Microsoft.Testing.Platform, and combined with the fact that TUnit tests are source generated, running your tests is available in a variety of ways.","source":"@site/docs/tutorial-basics/running-your-tests.md","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/running-your-tests","permalink":"/TUnit/docs/tutorial-basics/running-your-tests","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Writing your first test","permalink":"/TUnit/docs/tutorial-basics/writing-your-first-test"},"next":{"title":"Data Driven Tests","permalink":"/TUnit/docs/tutorial-basics/data-driven-tests"}}');var i=n(4848),r=n(8453);const o={sidebar_position:3},d="Running your tests",l={},c=[{value:"dotnet run",id:"dotnet-run",level:2},{value:"dotnet test",id:"dotnet-test",level:2},{value:"dotnet exec",id:"dotnet-exec",level:2},{value:"Published Test Project",id:"published-test-project",level:2},{value:"Visual Studio",id:"visual-studio",level:2},{value:"Rider",id:"rider",level:2},{value:"VS Code",id:"vs-code",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"running-your-tests",children:"Running your tests"})}),"\n",(0,i.jsx)(t.p,{children:"As TUnit is built on-top of the newer Microsoft.Testing.Platform, and combined with the fact that TUnit tests are source generated, running your tests is available in a variety of ways."}),"\n",(0,i.jsxs)(t.p,{children:["Please note that for the coverage and trx report, you need to install ",(0,i.jsx)(t.a,{href:"/TUnit/docs/extensions/",children:"additional extensions"})]}),"\n",(0,i.jsx)(t.h2,{id:"dotnet-run",children:(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-run",children:"dotnet run"})}),"\n",(0,i.jsxs)(t.p,{children:["For a simple execution of a project, ",(0,i.jsx)(t.code,{children:"dotnet run"})," is the preferred method, allowing easier passing in of command line flags."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"cd 'C:/Your/Test/Directory'\ndotnet run -c Release\n# or with flags\ndotnet run -c Release --report-trx --coverage\n"})}),"\n",(0,i.jsx)(t.h2,{id:"dotnet-test",children:(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-test",children:"dotnet test"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"dotnet test"})," requires any command line flags to be specified as application arguments, meaning after a ",(0,i.jsx)(t.code,{children:"--"})," - Otherwise you'll get an error about unknown switches."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"cd 'C:/Your/Test/Directory'\ndotnet test -c Release\n# or with flags\ndotnet test -c Release -- --report-trx --coverage\n"})}),"\n",(0,i.jsx)(t.h2,{id:"dotnet-exec",children:(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet",children:"dotnet exec"})}),"\n",(0,i.jsxs)(t.p,{children:["If your test project has already been built, you can use ",(0,i.jsx)(t.code,{children:"dotnet exec"})," or just ",(0,i.jsx)(t.code,{children:"dotnet"})," with the ",(0,i.jsx)(t.code,{children:".dll"})," path"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"cd 'C:/Your/Test/Directory/bin/Release/net8.0'\ndotnet exec YourTestProject.dll\n# or with flags\ndotnet exec YourTestProject.dll --report-trx --coverage\n"})}),"\n",(0,i.jsx)(t.p,{children:"or"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"cd 'C:/Your/Test/Directory/bin/Release/net8.0'\ndotnet YourTestProject.dll\n# or with flags\ndotnet YourTestProject.dll --report-trx --coverage\n"})}),"\n",(0,i.jsx)(t.h2,{id:"published-test-project",children:"Published Test Project"}),"\n",(0,i.jsxs)(t.p,{children:["When you publish your test project, you'll be given an executable.\nOn windows this'll be a ",(0,i.jsx)(t.code,{children:".exe"})," and on Linux/MacOS there'll be no extension."]}),"\n",(0,i.jsx)(t.p,{children:"This can be invoked directly and passed any flags."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-powershell",children:"cd 'C:/Your/Test/Directory/bin/Release/net8.0/win-x64/publish'\n./YourTestProject.exe\n# or with flags\n./YourTestProject.exe --report-trx --coverage\n"})}),"\n",(0,i.jsx)(t.h1,{id:"ide-support",children:"IDE Support"}),"\n",(0,i.jsx)(t.h2,{id:"visual-studio",children:"Visual Studio"}),"\n",(0,i.jsx)(t.p,{children:'Visual Studio is supported. The "Use testing platform server mode" option must be selected in Tools > Manage Preview Features.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Visual Studio Settings",src:n(50).A+"",width:"846",height:"572"})}),"\n",(0,i.jsx)(t.h2,{id:"rider",children:"Rider"}),"\n",(0,i.jsx)(t.p,{children:"Rider is supported."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://www.jetbrains.com/help/rider/Reference__Options__Tools__Unit_Testing__VSTest.html",children:"Enable Testing Platform support"})," option must be selected in Settings > Build, Execution, Deployment > Unit Testing > VSTest."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Rider Settings",src:n(4429).A+"",width:"1226",height:"875"})}),"\n",(0,i.jsx)(t.h2,{id:"vs-code",children:"VS Code"}),"\n",(0,i.jsx)(t.p,{children:"Visual Studio Code is supported."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Install the extension Name: ",(0,i.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit",children:"C# Dev Kit"})]}),"\n",(0,i.jsx)(t.li,{children:"Go to the C# Dev Kit extension's settings"}),"\n",(0,i.jsx)(t.li,{children:"Enable Dotnet > Test Window > Use Testing Platform Protocol"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Visual Studio Code Settings",src:n(5422).A+"",width:"1557",height:"885"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},4429:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/rider-fc32db8e7c271340fc8018d15fe319d8.png"},5422:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/visual-studio-code-31c2cf7aaa93d6b85b0859d74b303469.png"},50:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/visual-studio-9d0c07a059c8661637788830d1c06c83.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
(this.webpackJsonpvidly=this.webpackJsonpvidly||[]).push([[0],{92:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(31),c=n.n(s),o=n(10),i=n(2),u=n(5),l=n(6),d=n(8),h=n(7),b=n(4),j=n(21),m=n(22),p=n(3),v=n.n(p),f=n(12),O=n(20),g=n.n(O);g.a.defaults.baseURL="https://tranquil-oasis-55255.herokuapp.com/api",g.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||j.toast.error("An unexpected error occured."),Promise.reject(e)}));var x={get:g.a.get,post:g.a.post,put:g.a.put,delete:g.a.delete,setJwt:function(e){g.a.defaults.headers.common["x-auth-token"]=e}},y=n(46),k=n.n(y),S="/auth",w="token";function C(){return(C=Object(f.a)(v.a.mark((function e(t,n){var r,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post(S,{email:t,password:n});case 2:r=e.sent,a=r.data,localStorage.setItem(w,a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return localStorage.getItem(w)}x.setJwt(N());var P={logout:function(){localStorage.removeItem(w)},login:function(e,t){return C.apply(this,arguments)},getCurrentUser:function(){try{var e=localStorage.getItem(w);return k()(e)}catch(t){return null}},loginWithJwt:function(e){localStorage.setItem(w,e)},getJwt:N},I=n(0),R=function(e){var t=e.component,n=e.render,r=Object(m.a)(e,["component","render"]);return Object(I.jsx)(b.b,Object(i.a)(Object(i.a)({},r),{},{render:function(e){return P.getCurrentUser()?t?Object(I.jsx)(t,Object(i.a)({},e)):n(e):Object(I.jsx)(b.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},_=function(e){var t=e.user;return Object(I.jsx)("div",{children:Object(I.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",children:[Object(I.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Vidly"}),Object(I.jsxs)("div",{className:"navbar-nav mr-auto",id:"navbarSupportedContent",children:[Object(I.jsxs)(o.c,{className:"nav-link nav-item",to:"/movies",children:["Movies ",Object(I.jsx)("span",{className:"sr-only",children:"(current)"})]}),Object(I.jsx)(o.c,{className:"nav-link nav-item",to:"/customers",children:"Customers"}),Object(I.jsx)(o.c,{className:"nav-link nav-item",to:"/rentals",children:"Rentals"}),!t&&Object(I.jsxs)(a.a.Fragment,{children:[Object(I.jsx)(o.c,{className:"nav-link nav-item",to:"/login",children:"Login"}),Object(I.jsx)(o.c,{className:"nav-link nav-item",to:"/register",children:"Register"})]}),t&&Object(I.jsxs)(a.a.Fragment,{children:[Object(I.jsx)(o.c,{className:"nav-link nav-item",to:"/profile",children:t.name}),Object(I.jsx)(o.c,{className:"nav-link nav-item",to:"/logout",children:"Logout"})]})]})]})})},D=n(34),G=n(19),A=n.n(G);function F(){return x.get("/genres")}var L="/movies";function M(e){return"".concat(L,"/").concat(e)}function q(e){return x.delete(M(e))}function B(e){return x.get(M(e))}function T(e){if(e._id){var t=Object(i.a)({},e);return delete t._id,x.put(M(e._id),t)}return x.post(L,e)}function U(e,t,n){var r=(t-1)*n;return A()(e).slice(r).take(n).value()}var J=function(e){var t=e.genres,n=e.onSort,r=e.textProp,a=e.valueProp,s=e.sortedGenre;return Object(I.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(I.jsx)("li",{onClick:function(){return n(e)},className:e===s?"list-group-item active":"list-group-item",children:e[r]},e[a])}))})};J.defaultProps={textProp:"name",valueProp:"_id"};var z=J,Q=function(e){var t=e.itemsCount,n=e.pageSize,r=e.onPageChange,a=e.currentPage,s=Math.ceil(t/n);if(1===s)return null;var c=A.a.range(1,s+1);return Object(I.jsx)("div",{children:Object(I.jsx)("nav",{"aria-label":"Page navigation example",children:Object(I.jsx)("ul",{className:"pagination",children:c.map((function(e){return Object(I.jsx)("li",{className:e===a?"page-item active":"page-item",children:Object(I.jsx)("button",{onClick:function(){return r(e)},className:"page-link",children:e})},e)}))})})})},V=function(e){var t=e.value,n=e.onChange;return Object(I.jsx)("div",{className:"form-group",children:Object(I.jsx)("input",{placeholder:"Search...",type:"text",name:"query",value:t,className:"form-control",onChange:function(e){return n(e.currentTarget.value)}})})},W=function(e){var t=e.liked,n=e.onClick,r="fa fa-heart";return t||(r+="-o"),Object(I.jsx)("i",{style:{cursor:"pointer"},onClick:n,className:r,"aria-hidden":"true"})},E=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).raiseSort=function(t){var n=Object(i.a)({},e.props.sortColumn);n.path===t?n.order="asc"===n.order?"desc":"asc":(n.path=t,n.order="asc"),e.props.onSort(n)},e.renderSortIcon=function(t){var n=e.props.sortColumn;return t.path!==n.path?null:"asc"===n.order?Object(I.jsx)("i",{className:"fa fa-sort-asc"}):Object(I.jsx)("i",{className:"fa fa-sort-desc"})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.columns;return Object(I.jsx)("thead",{children:Object(I.jsx)("tr",{children:t.map((function(t){return Object(I.jsxs)("th",{className:"clickable",onClick:function(){return e.raiseSort(t.path)},children:[t.label," ",e.renderSortIcon(t)]},t.path||t.key)}))})})}}]),n}(r.Component),K=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).renderCell=function(e,t){return t.content?t.content(e):A.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.columns;return Object(I.jsx)("tbody",{children:n.map((function(t){return Object(I.jsx)("tr",{children:r.map((function(n){return Object(I.jsx)("td",{children:e.renderCell(t,n)},e.createKey(t,n))}))},t._id)}))})}}]),n}(r.Component),H=function(e){var t=e.columns,n=e.sortColumn,r=e.onSort,a=e.data;return Object(I.jsxs)("table",{className:"table",children:[Object(I.jsx)(E,{columns:t,sortColumn:n,onSort:r}),Object(I.jsx)(K,{columns:t,data:a})]})},X=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n),(e=t.call(this)).columns=[{path:"title",label:"Title",content:function(e){return Object(I.jsx)(o.b,{to:"/movies/".concat(e._id),children:e.title})}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return Object(I.jsx)(W,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}],e.deleteButtonColumn={key:"delete",content:function(t){return Object(I.jsx)("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger btn-sm",children:"Delete"})}};var r=P.getCurrentUser();return r&&r.isAdmin&&e.columns.push(e.deleteButtonColumn),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.sortColumn,r=e.onSort;return Object(I.jsx)(H,{columns:this.columns,data:t,sortColumn:n,onSort:r})}}]),n}(r.Component),Y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={movies:[],genres:[],pageSize:5,currentPage:1,sortColumn:{path:"title",order:"asc"},selectedGenre:null,searchQuery:""},e.handleDelete=function(){var t=Object(f.a)(v.a.mark((function t(n){var r,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state.movies,a=r.filter((function(e){return e._id!==n._id})),e.setState({movies:a}),t.prev=3,t.next=6,q(n._id);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&404===t.t0.response.status&&j.toast.error("This movie has already been deleted."),e.setState({movies:r});case 12:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleLike=function(t){var n=Object(D.a)(e.state.movies),r=n.indexOf(t);n[r]=Object(i.a)({},n[r]),n[r].liked=!n[r].liked,e.setState({movies:n})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleSortByGenre=function(t){e.setState({selectedGenre:t,searchQuery:"",currentPage:1})},e.handleSortAlphabetically=function(t){e.setState({sortColumn:t})},e.handleSearch=function(t){e.setState({searchQuery:t,selectedGenre:null,currentPage:1})},e.getPagedData=function(){var t=e.state,n=t.movies,r=t.currentPage,a=t.pageSize,s=t.selectedGenre,c=t.sortColumn,o=t.searchQuery,i=n;o?i=n.filter((function(e){return e.title.toLowerCase().startsWith(o.toLowerCase())})):s&&s._id&&(i=n.filter((function(e){return e.genre._id===s._id})));var u=U(A.a.orderBy(i,[c.path],[c.order]),r,a);return{totalCount:i.length,data:u}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,n,r,a,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return t=e.sent,n=t.data,e.next=6,x.get(L);case 6:r=e.sent,a=r.data,s=[{_id:"",name:"All genres"}].concat(Object(D.a)(n)),this.setState({movies:a,genres:s});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.currentPage,n=e.pageSize,r=e.sortColumn,s=e.searchQuery,c=this.getPagedData(),i=c.totalCount,u=c.data,l=this.props.user;return Object(I.jsx)(a.a.Fragment,{children:Object(I.jsxs)("div",{className:"row mt-4",children:[Object(I.jsx)("div",{className:"col-2 mr-4",children:Object(I.jsx)(z,{sortedGenre:this.state.selectedGenre,onSort:this.handleSortByGenre,genres:this.state.genres})}),Object(I.jsxs)("div",{className:"col-8",children:[l&&Object(I.jsx)(o.b,{to:"/movies/new",className:"btn btn-primary mb-3",children:"New Movie"}),Object(I.jsx)(V,{value:s,onChange:this.handleSearch}),Object(I.jsx)(X,{movies:u,sortColumn:r,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSortAlphabetically}),Object(I.jsx)(Q,{onPageChange:this.handlePageChange,itemsCount:i,pageSize:n,currentPage:t})]})]})})}}]),n}(r.Component),Z=function(){return Object(I.jsx)("h1",{children:"Rentals"})},$=function(){return Object(I.jsx)("h1",{children:"Customers"})},ee=function(){return Object(I.jsx)("h1",{children:"Page Not Found"})},te=n(23),ne=n(48),re=n(11),ae=n.n(re),se=function(e){var t=e.name,n=e.label,r=e.error,a=Object(m.a)(e,["name","label","error"]);return Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{htmlFor:t,children:n}),Object(I.jsx)("input",Object(i.a)(Object(i.a)({},a),{},{name:t,id:t,className:"form-control"})),r&&Object(I.jsx)("div",{className:"alert alert-danger",children:r})]})},ce=function(e){var t=e.name,n=e.label,r=e.options,a=e.error,s=Object(m.a)(e,["name","label","options","error"]);return Object(I.jsxs)("div",{className:"form-group",children:[Object(I.jsx)("label",{htmlFor:t,children:n}),Object(I.jsxs)("select",Object(i.a)(Object(i.a)({},s),{},{name:t,id:t,className:"form-control",children:[Object(I.jsx)("option",{value:""}),r.map((function(e){return Object(I.jsx)("option",{value:e._id,children:e.name},e._id)}))]})),a&&Object(I.jsx)("div",{className:"alert alert-danger",children:a})]})},oe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{},errors:{}},e.validation=function(){var t=e.state.data,n=ae.a.validate(t,e.schema,{abortEarly:!1}).error;if(!n)return null;var r,a={},s=Object(ne.a)(n.details);try{for(s.s();!(r=s.n()).done;){var c=r.value;a[c.path[0]]=c.message}}catch(o){s.e(o)}finally{s.f()}return a},e.validateProperty=function(t){var n=t.name,r=t.value,a=Object(te.a)({},n,r),s=Object(te.a)({},n,e.schema[n]),c=ae.a.validate(a,s).error;return c?c.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var n=e.validation();e.setState({errors:n||{}}),n||e.doSubmit()},e.handleChange=function(t){var n=t.currentTarget,r=Object(i.a)({},e.state.errors),a=e.validateProperty(n);a?r[n.name]=a:delete r[n.name];var s=Object(i.a)({},e.state.data);s[n.name]=n.value,e.setState({data:s,errors:r})},e}return Object(l.a)(n,[{key:"renderButton",value:function(e){return Object(I.jsx)("button",{disabled:this.validation(),className:"btn btn-primary",children:e})}},{key:"renderInput",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",r=this.state,a=r.data,s=r.errors;return Object(I.jsx)(se,{name:e,value:a[e],onChange:this.handleChange,label:t,error:s[e],type:n})}},{key:"renderSelect",value:function(e,t,n){var r=this.state,a=r.data,s=r.errors;return Object(I.jsx)(ce,{name:e,value:a[e],onChange:this.handleChange,label:t,error:s[e],options:n})}}]),n}(r.Component),ie=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},e.schema={_id:ae.a.string(),title:ae.a.string().required().label("Title"),genreId:ae.a.string().required().label("Genre"),numberInStock:ae.a.number().required().min(0).max(100).label("Number in Stock"),dailyRentalRate:ae.a.number().required().min(0).max(10).label("Daily Rental Rate")},e.mapToViewModel=function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}},e.doSubmit=Object(f.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e.state.data);case 2:e.props.history.push("/movies");case 3:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(n,[{key:"populateGenres",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,n=t.data,this.setState({genres:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"populateMovie",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,B(t);case 6:n=e.sent,r=n.data,this.setState({data:this.mapToViewModel(r)}),e.next=15;break;case 11:if(e.prev=11,e.t0=e.catch(0),!e.t0.response||404!==e.t0.response.status){e.next=15;break}return e.abrupt("return",this.props.history.replace("/not-found"));case 15:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateGenres();case 2:return e.next=4,this.populateMovie();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(I.jsxs)("div",{className:"w-25",children:[Object(I.jsx)("h1",{children:"Movie Form"}),Object(I.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("dailyRentalRate","Rate","number"),this.renderButton("Save")]})]})}}]),n}(oe),ue=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{username:"",password:""},errors:{}},e.schema={username:ae.a.string().required().label("Username"),password:ae.a.string().required().label("Password")},e.doSubmit=Object(f.a)(v.a.mark((function t(){var n,r,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.state.data,t.next=4,P.login(n.username,n.password);case 4:r=e.props.location.state,window.location=r?r.from.pathname:"/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((a=Object(i.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:a}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(l.a)(n,[{key:"render",value:function(){return P.getCurrentUser()?Object(I.jsx)(b.a,{to:"/"}):Object(I.jsxs)("div",{className:"w-25",children:[Object(I.jsx)("h1",{children:"Login"}),Object(I.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")]})]})}}]),n}(oe);function le(e){return x.post("/users",{email:e.username,password:e.password,name:e.name})}var de=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{username:"",password:"",name:""},errors:{}},e.schema={username:ae.a.string().email({minDomainSegments:2,tlds:{allow:["com","net","pl"]}}).required().label("Username"),password:ae.a.string().required().min(5).label("Password"),name:ae.a.string().required().label("Name")},e.doSubmit=Object(f.a)(v.a.mark((function t(){var n,r,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,le(e.state.data);case 3:n=t.sent,r=n.headers,P.loginWithJwt(r["x-auth-token"]),window.location="/",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((a=Object(i.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:a}));case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),e}return Object(l.a)(n,[{key:"render",value:function(){return Object(I.jsxs)("div",{className:"w-25",children:[Object(I.jsx)("h1",{children:"Register"}),Object(I.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")]})]})}}]),n}(oe),he=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){P.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),n}(r.Component),be=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=P.getCurrentUser();this.setState({user:e})}},{key:"render",value:function(){var e=this,t=this.state.user;return Object(I.jsxs)(a.a.Fragment,{children:[Object(I.jsx)(j.ToastContainer,{}),Object(I.jsx)(_,{user:t}),Object(I.jsx)("div",{className:"content",children:Object(I.jsxs)(b.d,{children:[Object(I.jsx)(b.b,{path:"/login",component:ue}),Object(I.jsx)(b.b,{path:"/logout",component:he}),Object(I.jsx)(R,{path:"/movies/:id",component:ie}),Object(I.jsx)(b.b,{path:"/movies",render:function(t){return Object(I.jsx)(Y,Object(i.a)(Object(i.a)({},t),{},{user:e.state.user}))}}),Object(I.jsx)(b.b,{path:"/customers",component:$}),Object(I.jsx)(b.b,{path:"/rentals",component:Z}),Object(I.jsx)(b.b,{path:"/not-found",component:ee}),Object(I.jsx)(b.b,{path:"/register",component:de}),Object(I.jsx)(b.a,{from:"/",exact:!0,to:"/movies"}),Object(I.jsx)(b.a,{to:"/not-found"})]})})]})}}]),n}(r.Component),je=(n(92),n(93),n(94),n(95),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))});c.a.render(Object(I.jsx)(a.a.Fragment,{children:Object(I.jsx)(o.a,{children:Object(I.jsx)(be,{})})}),document.getElementById("root")),je()}},[[96,1,2]]]);
//# sourceMappingURL=main.437df6d7.chunk.js.map
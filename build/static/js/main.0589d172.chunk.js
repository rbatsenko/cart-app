(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/basket.4a91dad9.svg"},33:function(e,t,a){e.exports=a(48)},41:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),s=a(11),o=a(24),i=a(25),m=a(32),u=a(18),d={cart:[],products:[{id:1,name:"Apple",price:6},{id:2,name:"Orange",price:7},{id:3,name:"Kiwifruit",price:10},{id:4,name:"Grenade",price:15},{id:5,name:"Banana",price:4},{id:6,name:"Tomato",price:2},{id:7,name:"Cucumber",price:3},{id:8,name:"Salad",price:12}],cartTotal:0},p="ALERT_SUCCESS",E="ALERT_ERROR",h="ALERT_CLEAR",A={LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT",GETALL_REQUEST:"USERS_GETALL_REQUEST",GETALL_SUCCESS:"USERS_GETALL_SUCCESS",GETALL_FAILURE:"USERS_GETALL_FAILURE"},f=JSON.parse(localStorage.getItem("user")),v=f?{loggedIn:!0,user:f}:{};var b=a(9),g=(a(41),a(51)),N=a(50),y=a(49),O=a(29),w=a.n(O),C=a(3),j=a(4),S=a(6),k=a(5),T=a(7),L=a(52),U=a(30),I=a.n(U),R=function(e){function t(){return Object(C.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"App-nav text-center"},r.a.createElement("ul",{className:"nav justify-content-center"},r.a.createElement("li",{className:"nav-item nav-item--logo"},r.a.createElement(L.a,{className:"nav-link",to:"/products"},r.a.createElement("img",{src:I.a,alt:"",width:"40",height:"40"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(L.a,{className:"nav-link",activeClassName:"active",exact:!0,to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(L.a,{className:"nav-link",activeClassName:"active",to:"/products"},"Products")))))}}]),t}(n.Component),G=a(12);var x=function(){localStorage.removeItem("user")},_=function(e){return e.text().then(function(t){var a=t&&JSON.parse(t);if(!e.ok){401===e.status&&(x(),window.location.reload(!0));var n=a&&a.message||e.statusText;return Promise.reject(n)}return a})},Q=function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})};return fetch("/login",a).then(_).then(function(e){return e.token&&localStorage.setItem("user",JSON.stringify(e)),e})},F=x,D=function(){var e={method:"GET",headers:function(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}()};return fetch("/login",e).then(_)},K=a(14),M=Object(K.a)(),P=function(e){return{type:E,message:e}},B={login:function(e,t){return function(a){var n;a((n={username:e},{type:A.LOGIN_REQUEST,user:n})),Q(e,t).then(function(e){a(function(e){return{type:A.LOGIN_SUCCESS,user:e}}(e)),M.push("/")},function(e){a(function(e){return{type:A.LOGIN_FAILURE,error:e}}(e)),a(P(e))})}},logout:function(){return F(),{type:A.LOGOUT}},getAll:function(){return function(e){e({type:A.GETALL_REQUEST}),D().then(function(t){return e(function(e){return{type:A.GETALL_SUCCESS,users:e}}(t))},function(t){return e(function(e){return{type:A.GETALL_FAILURE,error:e}}(t))})}}},q=function(e){function t(e){var a;return Object(C.a)(this,t),(a=Object(S.a)(this,Object(k.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(G.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),a.setState({submitted:!0});var t=a.state,n=t.username,r=t.password,c=a.props.dispatch;n&&r&&c(B.login(n,r))},a.state={username:"",password:"",submitted:!1},a}return Object(T.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props,t=e.loggingIn,a=e.alert,n=e.authentication,c=this.state,l=c.username,s=c.password,o=c.submitted;return r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),r.a.createElement("div",{className:"form-group"+(o&&!l?" has-error":"")},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",className:"form-control"+(o&&!l?" is-invalid":""),name:"username",value:l,onChange:this.handleChange}),o&&!l&&r.a.createElement("div",{className:"invalid-feedback"},"Username is required")),r.a.createElement("div",{className:"form-group"+(o&&!s?" has-error":"")},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control"+(o&&!s?" is-invalid":""),name:"password",value:s,onChange:this.handleChange}),o&&!s&&r.a.createElement("div",{className:"invalid-feedback"},"Password is required")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary",style:{marginRight:10}},"Login"),t&&r.a.createElement("img",{alt:"",src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="})),a.message&&!n.loggedIn&&r.a.createElement("div",{className:"alert alert-danger"},a.message),n.loggedIn&&r.a.createElement("div",{className:"alert alert-success",role:"alert"},r.a.createElement("h4",{className:"alert-heading"},"Well done!"),r.a.createElement("p",null,"Logged in as: ",r.a.createElement("strong",null,n.user.username))))}}]),t}(n.Component),J=Object(b.b)(function(e){return{loggingIn:e.authentication.loggingIn,alert:e.alert,authentication:e.authentication}})(q),Y=function(e){function t(){return Object(C.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-md-4 product-item"},r.a.createElement("div",{className:"product-grid4"},r.a.createElement("div",{className:"product-content"},r.a.createElement("h3",{className:"title"},this.props.name),r.a.createElement("div",{className:"price"},"$",this.props.price),r.a.createElement("button",{className:"add-to-cart",onClick:function(){e.props.onClick(e.props.id,e.props.name,e.props.price)}},"ADD TO CART"))))}}]),t}(n.Component),V=function(e){function t(){return Object(C.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between lh-condensed"},r.a.createElement("div",null,r.a.createElement("h6",{className:"cart-item--title my-0"},this.props.name),r.a.createElement("small",null,"x ",this.props.count),r.a.createElement("button",{className:"remove-item",onClick:function(){return e.props.onClick(e.props.id)}},"X")),r.a.createElement("span",{className:"text-muted"},"$",this.props.price*this.props.count))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).handleRemove=function(e){a.props.onRemove(e),a.props.calcTotal()},a}return Object(T.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App-cart"},r.a.createElement("h4",{className:"d-flex justify-content-between align-items-center mb-3"},r.a.createElement("span",{className:"text-muted"},"Your cart"),r.a.createElement("span",{className:"badge badge-secondary badge-pill"},this.props.cart.map(function(e){return e.count}).reduce(function(e,t){return e+t},0))),r.a.createElement("ul",{className:"list-group mb-3"},this.props.cart.map(function(t){return r.a.createElement(V,Object.assign({key:t.id,id:t.id},t,{onClick:e.handleRemove}))}),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",null,"Total (USD)"),r.a.createElement("strong",null,"$",this.props.cartTotal))))}}]),t}(n.Component),H=Object(b.b)(function(e){return{products:e.products,cart:e.cart,cartTotal:e.cartTotal}},function(e){return{onRemove:function(t){return e(function(){return{type:"REMOVE_FROM_CART",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:t}))},calcTotal:function(){return e({type:"CALC_TOTAL"})}}})(W),z=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).handleAdd=function(e,t,n){Object.values(a.props.cart.map(function(e){return e.count})).reduce(function(e,t){return e+t},0)<3?(a.props.onAdd(e,t,n),a.props.calcTotal()):alert("You can only add 3 or less items to cart!")},a}return Object(T.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",{className:"products-page-title"},"Store"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"row products-container"},this.props.products.map(function(t){return r.a.createElement(Y,Object.assign({key:t.id,id:t.id},t,{onClick:e.handleAdd}))}))),r.a.createElement("div",{className:"col-md-4 mb-4"},r.a.createElement(H,null),r.a.createElement(L.a,{className:"btn btn-primary",to:"/checkout"},"Proceed to checkout"))))}}]),t}(n.Component),X=Object(b.b)(function(e){return{products:e.products,cart:e.cart,cartTotal:e.cartTotal}},function(e){return{onAdd:function(t,a,n){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,a=e.name,n=e.price,r=e.count;return{type:"ADD_TO_CART",product:{id:t,name:a,price:n,count:void 0===r?1:r}}}({id:t,name:a,price:n}))},calcTotal:function(){return e({type:"CALC_TOTAL"})}}})(z),Z=function(e){function t(){var e,a;Object(C.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).handleKeyUp=function(e){e.target.value?e.target.classList.remove("is-invalid"):e.target.classList.add("is-invalid")},a.handleSubmit=function(e){e.preventDefault(),a.props.history.push("/confirmation")},a}return Object(T.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props.authentication;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 order-md-2 mb-4"},r.a.createElement(H,null)),r.a.createElement("div",{className:"col-md-8 order-md-1"},r.a.createElement("h4",{className:"mb-3"},"Billing address"),r.a.createElement("form",{className:"needs-validation",noValidate:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mb-3"},r.a.createElement("label",{htmlFor:"firstName"},"First name"),r.a.createElement("input",{type:"text",className:"form-control",id:"firstName",defaultValue:e.loggedIn?e.user.firstName:"",required:!0,onKeyUp:this.handleKeyUp}),r.a.createElement("div",{className:"invalid-feedback"},"Valid first name is required.")),r.a.createElement("div",{className:"col-md-6 mb-3"},r.a.createElement("label",{htmlFor:"lastName"},"Last name"),r.a.createElement("input",{type:"text",className:"form-control",id:"lastName",defaultValue:e.loggedIn?e.user.lastName:"",required:!0,onKeyUp:this.handleKeyUp}),r.a.createElement("div",{className:"invalid-feedback"},"Valid last name is required."))),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"address"},"Phone number"),r.a.createElement("input",{type:"text",className:"form-control",id:"phone",placeholder:"XXXXXXXXX",defaultValue:e.loggedIn?e.user.phone:"",required:!0,onKeyUp:this.handleKeyUp}),r.a.createElement("div",{className:"invalid-feedback"},"Please enter your phone number.")),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{type:"text",className:"form-control",id:"address",placeholder:"ul. Winogrady 3/5",defaultValue:e.loggedIn?e.user.address:"",required:!0,onKeyUp:this.handleKeyUp}),r.a.createElement("div",{className:"invalid-feedback"},"Please enter your shipping address.")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5 mb-3"},r.a.createElement("label",{htmlFor:"country"},"Country"),r.a.createElement("select",{className:"custom-select d-block w-100",id:"country",required:!0},r.a.createElement("option",{value:""},"Choose..."),r.a.createElement("option",null,"Poland")),r.a.createElement("div",{className:"invalid-feedback"},"Please select a valid country.")),r.a.createElement("div",{className:"col-md-4 mb-3"},r.a.createElement("label",{htmlFor:"state"},"City"),r.a.createElement("select",{className:"custom-select d-block w-100",id:"state",required:!0},r.a.createElement("option",{value:""},"Choose..."),r.a.createElement("option",null,"Pozna\u0144")),r.a.createElement("div",{className:"invalid-feedback"},"Please provide a valid city.")),r.a.createElement("div",{className:"col-md-3 mb-3"},r.a.createElement("label",{htmlFor:"zip"},"Zip"),r.a.createElement("input",{type:"text",className:"form-control",id:"zip",required:!0}),r.a.createElement("div",{className:"invalid-feedback"},"Zip code required."))),r.a.createElement("hr",{className:"mb-4"}),r.a.createElement("h4",{className:"mb-3"},"Payment"),r.a.createElement("div",{className:"d-block my-3"},r.a.createElement("div",{className:"custom-control custom-radio"},r.a.createElement("input",{id:"credit",name:"paymentMethod",type:"radio",className:"custom-control-input",defaultChecked:!0,required:!0}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"credit"},"Credit card"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mb-3"},r.a.createElement("label",{htmlFor:"cc-name"},"Name on card"),r.a.createElement("input",{type:"text",className:"form-control",id:"cc-name",defaultValue:e.loggedIn?e.user.firstName+" "+e.user.lastName:"",required:!0,onKeyUp:this.handleKeyUp}),r.a.createElement("small",{className:"text-muted"},"Full name as displayed on card"),r.a.createElement("div",{className:"invalid-feedback"},"Name on card is required")),r.a.createElement("div",{className:"col-md-6 mb-3"},r.a.createElement("label",{htmlFor:"cc-number"},"Credit card number"),r.a.createElement("input",{type:"text",className:"form-control",id:"cc-number",required:!0,onKeyUp:this.handleKeyUp}),r.a.createElement("div",{className:"invalid-feedback"},"Credit card number is required"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 mb-3"},r.a.createElement("label",{htmlFor:"cc-expiration"},"Expiration"),r.a.createElement("input",{type:"text",className:"form-control",id:"cc-expiration",required:!0,onKeyUp:this.handleKeyUp}),r.a.createElement("div",{className:"invalid-feedback"},"Expiration date required")),r.a.createElement("div",{className:"col-md-3 mb-3"},r.a.createElement("label",{htmlFor:"cc-cvv"},"CVV"),r.a.createElement("input",{type:"text",className:"form-control",id:"cc-cvv",required:!0,onKeyUp:this.handleKeyUp}),r.a.createElement("div",{className:"invalid-feedback"},"Security code required"))),r.a.createElement("hr",{className:"mb-4"}),r.a.createElement("button",{className:"btn btn-primary btn-lg btn-block",type:"submit",onClick:this.handleSubmit},"Continue to checkout")))))}}]),t}(n.Component),$=Object(b.b)(function(e){return{authentication:e.authentication}})(Z),ee=function(e){function t(){return Object(C.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"products-page"},r.a.createElement("h1",null,"NOT FOUND!"))}}]),t}(n.Component),te=function(e){function t(){return Object(C.a)(this,t),Object(S.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=new Date,t=new Date(e);t.setDate(t.getDate()+3);var a=t.getDate(),n=t.getMonth()+1,c=t.getFullYear();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 offset-2"},r.a.createElement("div",{className:"alert alert-success",role:"alert"},r.a.createElement("h4",{className:"alert-heading mt-2 mb-4"},"Thank You for your order!"),r.a.createElement("hr",null),r.a.createElement("div",{className:"order-total"},r.a.createElement("ul",{className:"list-group mb-3"},this.props.cart.map(function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item d-flex justify-content-between lh-condensed"},r.a.createElement("div",null,r.a.createElement("h6",{className:"cart-item--title my-0"},e.name),r.a.createElement("small",null,"x ",e.count)),r.a.createElement("span",{className:"text-muted"},"$",e.price*e.count))}),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",null,"Total (USD)"),r.a.createElement("strong",null,"$",this.props.cartTotal)))),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-2"},"You will receive your goodies on ",r.a.createElement("strong",null,a,".",n,".",c))))))}}]),t}(n.Component),ae=Object(b.b)(function(e){return{products:e.products,cart:e.cart,cartTotal:e.cartTotal}})(te),ne=w()(),re=function(){return r.a.createElement(g.a,{history:ne},r.a.createElement("div",null,r.a.createElement(R,null),r.a.createElement("main",{className:"App-main"},r.a.createElement(N.a,null,r.a.createElement(y.a,{path:"/",component:X,exact:!0}),r.a.createElement(y.a,{path:"/login",component:J,exact:!0}),r.a.createElement(y.a,{path:"/products",component:X,exact:!0}),r.a.createElement(y.a,{path:"/checkout",component:$,exact:!0}),r.a.createElement(y.a,{path:"/confirmation",component:ae,exact:!0}),r.a.createElement(y.a,{component:ee})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=Object(i.createLogger)(),le=Object(s.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:d.products,cart:d.cart,cartTotal:0,authentication:{},users:{},alert:{}},t=arguments.length>1?arguments[1]:void 0,a=e.cart;return{products:function(e,t){return t.type,e}(e.products,t),cart:function(e,t){switch(t.type){case"ADD_TO_CART":return e.find(function(e){return e.id===t.product.id})?e.map(function(e){return e.id===t.product.id&&(e=Object(u.a)({},e,{count:e.count+1})),e}):Object(m.a)(e).concat([t.product]);case"REMOVE_FROM_CART":return e.filter(function(e){return e.id!==t.id});default:return e}}(e.cart,t),cartTotal:function(e,t){var a=t.cart;switch(t.type){case"CALC_TOTAL":return Object.values(a.map(function(e){return e.price*e.count})).reduce(function(e,t){return e+t},0);default:return e}}(e.cartTotal,Object(u.a)({},t,{cart:a})),authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.LOGIN_REQUEST:return{loggingIn:!0,user:t.user};case A.LOGIN_SUCCESS:return{loggedIn:!0,user:t.user};case A.LOGIN_FAILURE:case A.LOGOUT:return{};default:return e}}(e.authentication,t),users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.GETALL_REQUEST:return{loading:!0};case A.GETALL_SUCCESS:return{items:t.users};case A.GETALL_FAILURE:return{error:t.error};default:return e}}(e.users,t),alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{type:"alert-success",message:t.message};case E:return{type:"alert-danger",message:t.message};case h:return{};default:return e}}(e.alert,t)}},Object(s.a)(o.a,ce));!function(){var e=[{id:1,username:"admin",password:"admin"},{id:2,username:"rbatsenko",password:"12345",firstName:"Roman",lastName:"Batsenko",address:"ul. Dworcowa 55/2",phone:456789123}],t=window.fetch;window.fetch=function(a,n){return new Promise(function(r,c){setTimeout(function(){if(a.endsWith("/login")&&"POST"===n.method){var l=JSON.parse(n.body),s=e.filter(function(e){return e.username===l.username&&e.password===l.password});if(s.length){var o=s[0],i={id:o.id,username:o.username,firstName:o.firstName,lastName:o.lastName,address:o.address,phone:o.phone,token:"fake-jwt-token"};r({ok:!0,text:function(){return Promise.resolve(JSON.stringify(i))}})}else c("Username or password is incorrect")}else a.endsWith("/users")&&"GET"===n.method?n.headers&&"Bearer fake-jwt-token"===n.headers.Authorization?r({ok:!0,text:function(){return Promise.resolve(JSON.stringify(e))}}):c("Unauthorised"):t(a,n).then(function(e){return r(e)})},500)})}}(),l.a.render(r.a.createElement(b.a,{store:le},r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.0589d172.chunk.js.map
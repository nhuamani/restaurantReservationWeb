import{M as x,b as E,c as T}from"./chunk-T24D6YWA.js";import{c as _,d as b,e as D,f as N,i as w,j as P,m as M}from"./chunk-IK3AWG6F.js";import{$ as c,Aa as g,Bb as R,Ia as f,Ya as y,Z as d,_a as A,ab as v,ac as F,ca as h,db as C,fa as i,ja as m,ma as u,mc as I,zc as S}from"./chunk-LFZ6GZNJ.js";var G="@",U=(()=>{class o{constructor(t,r,n,a,s){this.doc=t,this.delegate=r,this.zone=n,this.animationType=a,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=i(A,{optional:!0}),this.loadingSchedulerFn=i(V,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-G4FQWWEY.js").then(n=>n),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(t):r=t(),r.catch(n=>{throw new d(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:a})=>{this._engine=n(this.animationType,this.doc);let s=new a(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,r){let n=this.delegate.createRenderer(t,r);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new p(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let H=s.createRenderer(t,r);a.use(H),this.scheduler?.notify(10)}).catch(s=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(r){y()}}static{this.\u0275prov=c({token:o,factory:o.\u0275fac})}}return o})(),p=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,n){this.delegate.insertBefore(e,t,r,n)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,n){this.delegate.setAttribute(e,t,r,n)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,n){this.delegate.setStyle(e,t,r,n)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(G)}},V=new h("");function O(o="animations"){return C("NgAsyncAnimations"),u([{provide:v,useFactory:(e,t,r)=>new U(e,t,r,o),deps:[S,D,g]},{provide:f,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var j=(o,e)=>{let t=i(T),r=i(P);return t.isAuthenticated()?!0:(r.navigate(["/auth/sign-in"]),!1)};var k=[{path:"",redirectTo:"auth/sign-in",pathMatch:"full"},{path:"auth",loadComponent:()=>import("./chunk-E7DAOTDN.js").then(o=>o.LayoutComponent),loadChildren:()=>import("./chunk-O5ZNNCIS.js").then(o=>o.pagesRoutes)},{path:"pages",loadComponent:()=>import("./chunk-ODFBJME7.js").then(o=>o.LayoutComponent),loadChildren:()=>import("./chunk-O5ZNNCIS.js").then(o=>o.pagesRoutes),canActivate:[j]}];var L=(o,e)=>{let r=i(E).getAuthData();if(r&&r.token){let n=o.clone({headers:o.headers.set("Authorization",`Bearer ${r.token}`)});return e(n)}return e(o)};var B={providers:[I({eventCoalescing:!0}),M(k),O("noop"),_(b([L])),x()]};var l=class o{title="restaurantReservationWeb";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=m({type:o,selectors:[["app-root"]],standalone:!0,features:[F],decls:1,vars:0,template:function(t,r){t&1&&R(0,"router-outlet")},dependencies:[w]})};N(l,B).catch(o=>console.error(o));

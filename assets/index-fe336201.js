import{s as C,r as g,j as m}from"./index-ec586321.js";const T=C.canvas`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,A=({width:u=800,height:t=600,onSetup:e,onDraw:s,isRunning:c=!0})=>{const n=g.useRef(null),a=g.useRef(null),l=g.useRef(null),b=g.useRef(0);return g.useEffect(()=>{const f=n.current,d=f.getContext("2d"),v=window.devicePixelRatio||1;f.width=u*v,f.height=t*v,f.style.width=u+"px",f.style.height=t+"px",d.setTransform(v,0,0,v,0,0),d.translate(u/2,t/2),a.current=d,e&&e(d),l.current&&cancelAnimationFrame(l.current);const M=i=>{b.current||(b.current=i);const r=(i-b.current)/1e3;b.current=i,d.save(),d.clearRect(-u/2,-t/2,u,t),s&&s(d,r),d.restore(),l.current=requestAnimationFrame(M)};return c&&(l.current=requestAnimationFrame(M)),()=>{l.current&&cancelAnimationFrame(l.current)}},[u,t,e,s,c]),m.jsx(T,{ref:n})},x={canvas:{width:800,height:600,scale:50},physics:{timeStep:1/60,gravityEnabled:!0,frictionEnabled:!0,airResistanceEnabled:!1},controls:[{id:"mass",label:"Mass",type:"number",min:.1,max:5,step:.1,value:1,unit:"kg"},{id:"force",label:"Applied Force",type:"number",min:0,max:20,step:.5,value:5,unit:"N"},{id:"angle",label:"Force Angle",type:"number",min:-180,max:180,step:1,value:0,unit:"°"},{id:"friction",label:"Friction Coefficient",type:"number",min:0,max:1,step:.01,value:.1,unit:""}]};class o{constructor(t=0,e=0){this.x=t,this.y=e}add(t){return new o(this.x+t.x,this.y+t.y)}subtract(t){return new o(this.x-t.x,this.y-t.y)}multiply(t){return new o(this.x*t,this.y*t)}dot(t){return this.x*t.x+this.y*t.y}magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalize(){const t=this.magnitude();return t===0?new o(0,0):this.multiply(1/t)}angle(){return Math.atan2(this.y,this.x)}static fromAngle(t,e=1){return new o(e*Math.cos(t),e*Math.sin(t))}clone(){return new o(this.x,this.y)}}const E=9.81;class S{static gravity(t){return new o(0,t*E)}static spring(t,e){return t.multiply(-e)}static friction(t,e,s){return t.magnitude()===0?new o(0,0):t.normalize().multiply(-e*s)}static airResistance(t,e,s,c=1.225){const n=t.magnitude(),a=.5*e*s*c*n*n;return n===0?new o(0,0):t.normalize().multiply(-a)}static centripetal(t,e,s){return t*e*e/s}}class F{static displacement(t,e,s){return t.multiply(s).add(e.multiply(.5*s*s))}static finalVelocity(t,e,s){return t.add(e.multiply(s))}static projectileMotion(t,e,s=0){const n=t*Math.cos(e),a=t*Math.sin(e),l=(a+Math.sqrt(a*a+2*9.81*s))/9.81,b=s+a*a/(2*9.81),f=n*l;return{timeOfFlight:l,maxHeight:b,range:f,initialVelocityX:n,initialVelocityY:a}}static projectilePosition(t,e,s,c=0){const a=t*Math.cos(e)*s,l=c+t*Math.sin(e)*s-.5*9.81*s*s;return new o(a,l)}static circularMotion(t,e){const s=2*Math.PI/e,c=1/s,n=t*e,a=n*e;return{period:s,frequency:c,tangentialVelocity:n,centripetalAcceleration:a}}}const q=u=>u*Math.PI/180;class I{constructor(t){this.config=t,this.reset()}reset(){this.position=new o(-2,0),this.velocity=new o(0,0),this.acceleration=new o(0,0),this.mass=this.config.controls.find(t=>t.id==="mass").value,this.force=this.config.controls.find(t=>t.id==="force").value,this.angle=this.config.controls.find(t=>t.id==="angle").value,this.frictionCoef=this.config.controls.find(t=>t.id==="friction").value}update(t){const e=o.fromAngle(q(this.angle),this.force),s=this.mass*S.G,c=S.friction(this.velocity,this.frictionCoef,s);let n;this.config.physics.gravityEnabled,n=e.add(c),this.acceleration=n.multiply(1/this.mass),this.velocity=F.finalVelocity(this.velocity,this.acceleration,t);const a=F.displacement(this.velocity,this.acceleration,t);this.position=this.position.add(a);const{width:l,height:b,scale:f}=this.config.canvas,d=l/2/f,v=b/2/f;Math.abs(this.position.x)>d&&(this.position.x=Math.sign(this.position.x)*d,this.velocity.x*=-.8,this.velocity.y*=.99),Math.abs(this.position.y)>v&&(this.position.y=Math.sign(this.position.y)*v,this.velocity.y*=-.8,this.velocity.x*=.99),this.velocity.magnitude()<.01&&(this.velocity=new o(0,0))}getState(){return{position:this.position,velocity:this.velocity,acceleration:this.acceleration}}updateControl(t,e){switch(t){case"mass":this.mass=e;break;case"force":this.force=e;break;case"angle":this.angle=e;break;case"friction":this.frictionCoef=e;break}}}const N=C.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,z=C.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
`,P=C.div`
  margin-bottom: 1.5rem;
`,W=C.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
`,G=C.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 0.25rem;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`,R=C.button`
  width: 100%;
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 1rem;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,H=({onBack:u})=>{const[t,e]=g.useState(!1),[s,c]=g.useState(x.controls),n=g.useRef(new I(x)),a=()=>e(i=>!i),l=()=>{n.current.reset(),c(x.controls)},b=(i,r)=>{c(w=>w.map(h=>h.id===i?{...h,value:Number(r)}:h)),n.current.updateControl(i,Number(r))},f=g.useCallback(i=>{x.canvas,i.lineWidth=2,i.font="14px Arial",i.textAlign="center"},[]),d=g.useCallback(i=>{const{width:r,height:w,scale:h}=x.canvas;i.strokeStyle="#ddd",i.lineWidth=.5;const y=r/2,k=w/2;for(let p=-y;p<=y;p+=h)i.beginPath(),i.moveTo(p,-k),i.lineTo(p,k),i.stroke();for(let p=-k;p<=k;p+=h)i.beginPath(),i.moveTo(-y,p),i.lineTo(y,p),i.stroke();i.strokeStyle="#999",i.lineWidth=2,i.beginPath(),i.moveTo(-y,0),i.lineTo(y,0),i.moveTo(0,-k),i.lineTo(0,k),i.stroke()},[]),v=g.useCallback((i,r,w)=>{const{scale:h}=x.canvas,y=s.find(p=>p.id==="mass").value,k=Math.sqrt(y)*10;if(i.fillStyle="#007bff",i.beginPath(),i.arc(r.x*h,r.y*h,k,0,Math.PI*2),i.fill(),w.magnitude()>0){const j=r.add(w.multiply(20));i.strokeStyle="#ff4444",i.beginPath(),i.moveTo(r.x*h,r.y*h),i.lineTo(j.x*h,j.y*h),i.stroke()}},[s]),M=g.useCallback((i,r)=>{if(!t)return;const{width:w,height:h}=x.canvas;n.current.update(r);const y=n.current.getState();i.clearRect(0,0,w,h),d(i),v(i,y.position,y.velocity)},[t,d,v]);return m.jsxs(N,{children:[m.jsxs("div",{children:[m.jsx(R,{onClick:u,children:"← Back to Simulations"}),m.jsx(A,{width:x.canvas.width,height:x.canvas.height,onSetup:f,onDraw:M})]}),m.jsxs(z,{children:[m.jsxs(P,{children:[m.jsxs(R,{onClick:a,children:[t?"Pause":"Start"," Simulation"]}),m.jsx(R,{onClick:l,children:"Reset"})]}),s.map(i=>m.jsxs(P,{children:[m.jsxs(W,{children:[i.label," (",i.unit,")"]}),m.jsx(G,{type:i.type,min:i.min,max:i.max,step:i.step,value:i.value,onChange:r=>b(i.id,r.target.value)}),m.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[i.min," - ",i.max," ",i.unit]})]},i.id))]})]})};export{H as default};
//# sourceMappingURL=index-fe336201.js.map

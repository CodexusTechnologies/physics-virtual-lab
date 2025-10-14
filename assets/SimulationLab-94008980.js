import{s as r,j as i}from"./index-ec586321.js";const c=r.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`,d=r.h3`
  margin: 0 0 1rem 0;
  color: #333;
`,l=r.p`
  color: #666;
  margin: 0 0 1rem 0;
`,m=r.span`
  background-color: #f0f0f0;
  color: #666;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  margin-right: 0.5rem;
`,p=({title:t,description:o,tags:n,onClick:a})=>i.jsxs(c,{onClick:a,children:[i.jsx(d,{children:t}),i.jsx(l,{children:o}),i.jsx("div",{children:n.map((e,s)=>i.jsx(m,{children:e},s))})]}),x=r.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,u=r.h1`
  margin-bottom: 1rem;
  color: #333;
`,g=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,h=[{id:"newtonian-motion",title:"Newtonian Motion",description:"Explore Newton's laws of motion with interactive force diagrams and real-time calculations.",tags:["Forces","Dynamics","Interactive"]},{id:"projectile-motion",title:"Projectile Motion",description:"Launch projectiles at various angles and velocities. Study parabolic trajectories and motion analysis.",tags:["Kinematics","Gravity","Trajectories"]},{id:"circular-motion",title:"Circular Motion",description:"Visualize uniform circular motion and understand centripetal force dynamics.",tags:["Forces","Angular Motion","Velocity"]}],f=({onSimulationSelect:t})=>i.jsxs(x,{children:[i.jsx(u,{children:"Physics Simulations"}),i.jsx("p",{children:"Select a simulation to begin exploring physics concepts interactively."}),i.jsx(g,{children:h.map(o=>i.jsx(p,{...o,onClick:()=>t(o.id)},o.id))})]});export{f as default};
//# sourceMappingURL=SimulationLab-94008980.js.map

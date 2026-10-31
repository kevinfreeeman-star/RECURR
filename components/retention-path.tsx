'use client';

import type { CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MousePointer2, Mail, ShoppingBag, BookOpen, PackageCheck, Heart, Repeat2 } from 'lucide-react';

const stages = [
  { name: 'Acquisition', detail: 'Get discovered', icon: MousePointer2, x: 60, y: 150 },
  { name: 'Signup', detail: 'Start a conversation', icon: Mail, x: 225, y: 85 },
  { name: 'First order', detail: 'Earn their trust', icon: ShoppingBag, x: 390, y: 165 },
  { name: 'Education', detail: 'Help them love it', icon: BookOpen, x: 555, y: 65 },
  { name: 'Second order', detail: 'Give them a reason', icon: PackageCheck, x: 720, y: 145 },
  { name: 'Retention', detail: 'Build the habit', icon: Heart, x: 885, y: 80 },
  { name: 'Reactivation', detail: 'Welcome them back', icon: Repeat2, x: 1050, y: 150 },
];
const desktopPath = 'M60 150 C130 150 155 85 225 85 S320 165 390 165 S485 65 555 65 S650 145 720 145 S815 80 885 80 S980 150 1050 150';
const mobilePath = 'M65 55 C65 110 255 110 255 165 S65 220 65 275 S255 330 255 385 S65 440 65 495 S255 550 255 605 S65 660 65 715';

export default function RetentionPath() {
  const reduce = useReducedMotion();
  function pathGraphic(d: string, viewBox: string, className: string) {
    return <svg className={className} viewBox={viewBox} fill="none" aria-hidden="true">
      <path d={d} className="retention-route-base"/>
      <path d={d} className="retention-route-dashes"/>
      <motion.path d={d} className="retention-route-light" initial={reduce ? false : {pathLength:0}} animate={reduce ? {pathLength:1} : undefined} whileInView={{pathLength:1}} viewport={{once:true,amount:0.15}} transition={{duration:reduce ? 0 : 1.8,ease:'easeInOut'}}/>
    </svg>;
  }
  return <div className="retention-path" aria-label="From acquisition to reactivation">
    <div className="retention-path-caption"><span>ONE CUSTOMER. MORE POSSIBILITIES.</span><span>THE RELATIONSHIP KEEPS GOING <Repeat2 size={13}/></span></div>
    <div className="retention-path-canvas">
      {pathGraphic(desktopPath,'0 0 1110 290','retention-route desktop-route')}
      {pathGraphic(mobilePath,'0 0 320 790','retention-route mobile-route')}
      <ol className="retention-stages">{stages.map((stage, i) => {
        const Icon = stage.icon;
        const style = { '--stage-x': `${stage.x/1110*100}%`, '--stage-y': `${stage.y/290*100}%`, '--mobile-x': `${(i%2===0?65:255)/320*100}%`, '--mobile-y': `${(55+i*110)/790*100}%` } as CSSProperties;
        return <li key={stage.name} style={style} className={i>2?'retention-stage returning':'retention-stage'}>
          <motion.div initial={reduce ? false : {opacity:0,y:16,scale:0.94}} animate={reduce ? {opacity:1,y:0,scale:1}:undefined} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true,amount:0.2}} transition={{duration:reduce?0:0.55,delay:reduce?0:0.08*(i%3)}}>
            <span className="retention-stage-icon"><Icon size={20}/><span className="retention-stage-number">0{i+1}</span></span>
            <span className="retention-stage-label"><strong>{stage.name}</strong><small>{stage.detail}</small></span>
          </motion.div>
        </li>;
      })}</ol>
    </div>
  </div>;
}

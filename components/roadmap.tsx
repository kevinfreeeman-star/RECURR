'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Mail, MousePointer2, ShoppingBag, CreditCard, HeartHandshake, PackageCheck, Repeat2, ArrowUpRight } from 'lucide-react';

const touchpoints = [
  { name: 'Welcome series', stage: 'THE FIRST CONNECTION', trigger: 'When someone subscribes', benefit: 'Turn new interest into a confident first order.', description: 'Introduce your brand, answer the first questions, and help subscribers find the product that fits.', icon: Mail },
  { name: 'Browse abandonment', stage: 'FROM LOOKING TO CONSIDERING', trigger: 'When an identified shopper views a product and leaves', benefit: 'Give a good first impression a second chance.', description: 'Bring relevant products back into focus with useful details and a clear next step.', icon: MousePointer2 },
  { name: 'Abandoned cart', stage: 'KEEP THE INTENT ALIVE', trigger: 'When a shopper adds to cart but does not buy', benefit: 'Help an interested shopper pick up where they left off.', description: 'Reconnect customers with their cart, address common objections, and make returning simple.', icon: ShoppingBag },
  { name: 'Checkout abandonment', stage: 'REMOVE THE LAST HESITATION', trigger: 'When someone starts checkout without completing an order', benefit: 'Make the final step feel easier.', description: 'Offer a direct path back to checkout and helpful answers about delivery, fit, or the purchase itself.', icon: CreditCard },
  { name: 'Thank you', stage: 'THE RELATIONSHIP STARTS HERE', trigger: 'After a completed purchase', benefit: 'Replace buyer uncertainty with a warm welcome.', description: 'Recognize the purchase, set expectations, and show customers there are real people behind the brand.', icon: HeartHandshake },
  { name: 'Post-purchase', stage: 'HELP THEM LOVE WHAT THEY BOUGHT', trigger: 'Based on delivery timing, product, and purchase history', benefit: 'Create a useful reason for the next order.', description: 'Share product education, care advice, review requests, complementary products, and replenishment reminders.', icon: PackageCheck },
  { name: 'Winback', stage: 'AN INVITATION TO COME BACK', trigger: 'When a customer passes their expected reorder window', benefit: 'Reconnect before a customer becomes a distant memory.', description: 'Use purchase history and relevant updates to restart the relationship, with offers only where they make sense.', icon: Repeat2 },
];

export default function Roadmap() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 65%'] });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <section ref={ref} id="roadmap" className="wrap section roadmap" aria-labelledby="roadmap-heading">
    <div className="section-label"><span className="status-dot"/> YOUR CUSTOMER JOURNEY / CONNECTED</div>
    <div className="split-heading"><h2 id="roadmap-heading">Every touchpoint.<br/><span className="muted">A reason to <span className="roadmap-emphasis">return.</span></span></h2><p>From the first hello to the next order, build the follow-ups that help customers move forward—even when your team is off the clock.</p></div>
    <p className="roadmap-note">An example lifecycle, tailored to your store. These flows are triggered by customer behavior—not a sequence every person receives. Cart and checkout messages are coordinated to avoid overlapping sends.</p>
    <div className="roadmap-track">
      <div className="roadmap-rail" aria-hidden="true"><motion.div className="roadmap-progress" style={{ scaleY: reduce ? 1 : progress }}/></div>
      <ol className="roadmap-list">{touchpoints.map((point, i) => {
        const Icon = point.icon;
        return <motion.li key={point.name} initial={reduce ? false : {opacity:0,y:26}} animate={reduce ? {opacity:1,y:0} : undefined} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.2}} transition={{duration:reduce ? 0 : 0.6,ease:[0.22,1,0.36,1]}} className="roadmap-stop">
          <span className="roadmap-dot" aria-hidden="true"/>
          <div className="roadmap-card"><div className="roadmap-card-top"><span>TOUCHPOINT {String(i+1).padStart(2,'0')}</span><Icon size={21}/></div><span className="roadmap-stage">{point.stage}</span><h3>{point.name}</h3><p className="roadmap-benefit">{point.benefit}</p><p>{point.description}</p><div className="roadmap-trigger"><ArrowUpRight size={14}/><span>{point.trigger}</span></div></div>
        </motion.li>;
      })}</ol>
    </div>
    <div className="roadmap-end"><Repeat2 size={21}/><span>A better experience. A stronger reason to buy again.</span></div>
  </section>;
}

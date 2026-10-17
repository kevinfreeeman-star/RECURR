import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'RECURR | Email Retention Marketing for E-Commerce Brands', description: 'RECURR helps e-commerce brands turn more first-time buyers into repeat customers through email strategy, lifecycle automation, campaigns, segmentation, and retention marketing.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }

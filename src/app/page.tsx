import { Button } from '@/components/Button';
import { CountdownTimer } from '@/components/CountdownTimer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="z-10 w-full p-8">
        <h1 className="text-4xl font-bold mb-4">MCP Pages</h1>
        <h2 className="text-2xl mb-6">MCP Services Network for Next-Gen AI Agent Development</h2>
        <CountdownTimer />
      </div>
      <div className="flex-1 w-full relative px-8">
        <iframe 
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7313259892197216257?collapsed=1" 
          className="absolute inset-0 w-full h-full"
          frameBorder="0" 
          allowFullScreen 
          title="LinkedIn Post"
        />
      </div>
    </main>
  );
}

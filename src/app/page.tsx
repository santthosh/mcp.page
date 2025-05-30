import { CountdownTimer } from '@/components/CountdownTimer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="z-10 w-full p-8 pb-0">
        <h1 className="text-4xl font-bold mb-4">Cloud MCP</h1>
        <h2 className="text-xl mb-6">Centralized Network of MCP Servers</h2>
        <CountdownTimer />
      </div>
      <div className="flex-1 w-full relative m-4">
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

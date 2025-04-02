import { Button } from '@/components/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Welcome to Next.js with Flowbite React</h1>
        <div className="flex gap-4">
          <Button>Default Button</Button>
          <Button color="success">Success Button</Button>
          <Button color="warning" size="lg">Large Warning Button</Button>
        </div>
      </div>
    </main>
  );
}

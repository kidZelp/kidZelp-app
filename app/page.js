import Image from 'next/image';
import UserMenu from '@/components/UserMenu';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserMenu />

    </main>
  );
}

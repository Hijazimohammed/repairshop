'use client';
import { Button } from '@/components/ui/button';
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs';

export default function Page() {
  return (
    <main className='h-dh flex flex-col items-center gap-6 text-4xl p-4'>
      <h1>Repair Shop</h1>
      <Button asChild>
        <LoginLink> Sign In</LoginLink>
      </Button>
    </main>
  );
}

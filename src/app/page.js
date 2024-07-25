"use client";

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const auth = useSelector((state) => state.auth || {}); 
  const user = auth.user;

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Redux Persistent App</h1>
      <div>
        <Link href="/login">
          Login
        </Link>
      </div>
      <div>
        <Link href="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

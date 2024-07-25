"use client";

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const DashboardPage = () => {
  const auth = useSelector((state) => state.auth || {}); 
  const user = auth.user; 
    
    console.log('Auth state:', auth);
    console.log('User:', user);
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard, {user.user.firstName} {user.user.lastName}!</h1>
      <p>You are logged in as {user.user.email}.</p>

      <p>This is the dashboard page. You can add more components or information here.</p>
    </div>
  );
};

export default DashboardPage;

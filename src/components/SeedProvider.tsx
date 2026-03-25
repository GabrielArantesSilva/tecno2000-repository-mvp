'use client';
import { useEffect } from 'react';
import { seedMockData } from '@/lib/storage';

export default function SeedProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    seedMockData();
  }, []);

  return <>{children}</>;
}

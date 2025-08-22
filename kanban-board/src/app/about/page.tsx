// src/app/about/page.tsx
import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About</h1>
        <p className="text-gray-600 mb-4">
          Welcome to the MyCritters Kanban Board project! This is part of our developer onboarding process.
        </p>
        <p className="text-gray-600">
          This kanban board is built with Next.js, TypeScript, Tailwind CSS, and will integrate with Nhost for the backend.
        </p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">🏷 Milestone NEXT-READY</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✅ Next.js project with TypeScript and Tailwind</li>
            <li>✅ About page created</li>
            <li>✅ API route implemented</li>
            <li>✅ Shadcn/ui Button component working</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
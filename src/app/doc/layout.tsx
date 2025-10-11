// app/doc/layout.tsx
import { ReactNode } from 'react';
import DocumentationSidebar from '@/components/documentation/DocumentationSidebar';

interface DocumentationLayoutProps {
  children: ReactNode;
}

export default function DocumentationLayout({ children }: DocumentationLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-80 flex-shrink-0">
            <DocumentationSidebar />
          </div>
          <div className="flex-1 min-w-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
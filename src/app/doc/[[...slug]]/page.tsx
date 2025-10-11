// app/doc/[[...slug]]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DynamicDocumentationPage from '@/components/documentation/DynamicDocumentationPage';
import { documentationData } from '@/data/documentationData';

interface PageProps {
  params: {
    slug?: string[];
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.slug ? params.slug.join('/') : '';
  const pageData = documentationData.pages.find(page => page.slug === slug);

  // Default to introduction page if no slug
  if (!pageData && slug !== '') {
    return {
      title: 'Page Not Found - Emailly Documentation'
    };
  }

  const targetPage = pageData || documentationData.pages.find(page => page.id === 'introduction');
  
  return {
    title: `${targetPage?.title} - Emailly Documentation`,
    description: targetPage?.description,
    openGraph: {
      title: targetPage?.title,
      description: targetPage?.description,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: targetPage?.title,
      description: targetPage?.description,
    },
  };
}

export async function generateStaticParams() {
  // Include all pages including the introduction (empty slug)
  return documentationData.pages.map((page) => ({
    slug: page.slug ? page.slug.split('/') : [],
  }));
}

export default function DocumentationPage({ params }: PageProps) {
  const slug = params.slug ? params.slug.join('/') : '';
  const pageData = documentationData.pages.find(page => page.slug === slug);

  // If no page found and we're not at the root, show 404
  if (!pageData && slug !== '') {
    notFound();
  }

  // Use introduction page for root path
  const targetPage = pageData || documentationData.pages.find(page => page.id === 'introduction');

  if (!targetPage) {
    notFound();
  }

  return (
    <DynamicDocumentationPage 
      pageData={targetPage} 
      documentationData={documentationData} 
    />
  );
}
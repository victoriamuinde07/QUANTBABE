import { ReactNode} from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type LayoutProps = {
	children: ReactNode;
};
export default function Layout({children}: LayoutProps) {
	return(
		<div className="min-h-screen flex flex-col">
		 <Navbar />
		 <a href=#main"
		 className="sr-only focus:not-sr-only"
		 >
		 skip to content
		 </a>
		 <main className="flex-grow container mx-auto px-4 py-8">
		 {children}
		 </main>
		 <Footer />
		 </div>
	);
}
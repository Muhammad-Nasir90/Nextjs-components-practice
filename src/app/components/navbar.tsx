import Link from 'next/link';

export default function Navbar () {
  return (

    <nav className="background text-black p-4">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <div className="text-lg font-bold">My Website</div>
        
        <div>
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/about" className="mr-4">About</Link>
          <Link href="/contact" className="mr-4">Contact</Link>
          <Link href="/jobs" className="mr-4">Jobs</Link>
          <Link href="/skills" className="mr-4">Skills</Link>
        </div>
      
      </div>
    
    </nav>
  );
};



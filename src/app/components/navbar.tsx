import Link from 'next/link';
import '../styles/style.css'; // Import the global CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">My Website</div>
        <div className="links">
          <Link href="/" className="link">Home</Link>
          <Link href="/about" className="link">About</Link>
          <Link href="/contact" className="link">Contact</Link>
          <Link href="/jobs" className="link">Jobs</Link>
          <Link href="/skills" className="link">Skills</Link>
        </div>
      </div>
    </nav>
  );
}

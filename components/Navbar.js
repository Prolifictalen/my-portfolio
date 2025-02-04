export default function Navbar() {
    return (
      <nav className="fixed w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-extrabold text-primary">Astha Singh</h1>
        <div className="space-x-8 text-lg">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>
      </nav>
    );
  }
  
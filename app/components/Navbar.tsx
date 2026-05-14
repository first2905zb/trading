import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm">FX</span>
          <span className="text-lg font-bold text-white">Forex Academy</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <Link href="/" className="hover:text-white transition">หน้าแรก</Link>
          <Link href="/#lessons" className="hover:text-white transition">บทเรียน</Link>
          <Link href="/#roadmap" className="hover:text-white transition">Roadmap</Link>
        </div>

        <Link
          href="/#lessons"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2.5 rounded-xl font-medium transition"
        >
          เริ่มเรียน
        </Link>
      </div>
    </nav>
  );
}

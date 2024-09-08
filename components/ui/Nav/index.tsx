import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <div className="flex items-center justify-items-center justify-between p-8 rounded-lg bg-gray-100">
        <Image src='/AF-logos_black.png' width='100' height='50' alt='Logo'/>
        <nav className="flex items-center justify-items-center gap-4">
            <Link href="/">
            Projetos
            </Link>
            <Link href="/">
            Contato
            </Link>
            <Link href="/">
            Sobre
            </Link>
        </nav>
    </div>
  );
}
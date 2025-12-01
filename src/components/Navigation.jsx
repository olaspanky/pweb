import Link from "next/link";
import { usePathname } from "next/navigation";
import { Email, Facebook, Instagram, Linkedin, Twitter } from "./icons/Socials";
import Image from "next/image";
import Button from "./Button";

export default function Navigation({ className }) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/solutions", label: "Solutions" },
    { href: "/products", label: "Products" },
    { href: "/insights", label: "Insights" },
    { href: "/about", label: "About" },
    { href: "/partnerships", label: "Partnerships" },
    { href: "/careers", label: "Careers" },
  ];

  const isActive = (href) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div>
      <nav className={`${className} py-2 border-b border-grey-100/40`}>
        <div className="max-w-[1440px] px-18 mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Email />
            <p className="text-grey-0 text-xs">
              <strong>Email us at: </strong>
              marketanalytics@pbrinsight.com
            </p>
          </Link>

          <div>
            <div className="flex items-center gap-6">
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Linkedin />
              </a>
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav className="text-grey-0 max-w-[1440px] px-18 py-6 mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/pbr-logo.png"
            width={200}
            height={50}
            alt="PBR Life Sciences Logo"
            className="w-32"
          />
        </Link>

        <ul className="flex items-center gap-8 uppercase font-semibold text-xs">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-blue-600 ${
                  isActive(link.href)
                    ? "text- border-b-2 border-blue-600 pb-1"
                    : "text-grey-0"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button content={{ label: "Contact us", to: "/" }} />
      </nav>
    </div>
  );
}
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: React.ReactNode;
  sections?: FooterSection[];
  socialLinks?: React.ReactNode;
  copyright?: string;
}

export default function Footer({
  logo,
  sections,
  socialLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="space-y-4">
            {logo || (
              <div className="text-2xl font-bold text-white">Logo</div>
            )}
            <p className="text-sm text-gray-400">
              Создаем удивительные веб-приложения для современного мира.
            </p>
          </div>

          {/* Секции ссылок */}
          {sections?.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-white font-semibold text-lg">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Разделитель */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            {copyright || `© ${new Date().getFullYear()} Все права защищены.`}
          </p>

          {/* Соцсети */}
          {socialLinks && (
            <div className="flex items-center gap-4">{socialLinks}</div>
          )}
        </div>
      </div>
    </footer>
  );
}

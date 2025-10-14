"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
  title: string;
  description?: string;
}

export default function ComponentPreview({
  children,
  code,
  title,
  description,
}: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
      {/* Заголовок */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        )}
      </div>

      {/* Превью компонента */}
      <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="flex items-center justify-center min-h-[200px]">
          {children}
        </div>
      </div>

      {/* Код */}
      <div className="relative">
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-md transition-colors"
          >
            {copied ? (
              <>
                <Check size={16} />
                Скопировано!
              </>
            ) : (
              <>
                <Copy size={16} />
                Копировать
              </>
            )}
          </button>
        </div>

        <SyntaxHighlighter
          language="tsx"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius: 0,
            fontSize: "14px",
            padding: "1.5rem",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-heading prose-p:text-body prose-a:text-warm-brown prose-strong:text-heading">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "")
            return !inline && match ? (
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            ) : (
              <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm" {...props}>
                {children}
              </code>
            )
          },
          h1: ({ children }) => <h1 className="text-3xl font-bold text-heading mb-6">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-semibold text-heading mb-4 mt-8">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-semibold text-heading mb-3 mt-6">{children}</h3>,
          p: ({ children }) => <p className="text-body leading-relaxed mb-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-body space-y-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-body space-y-2">{children}</ol>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-warm-brown pl-4 italic text-body bg-light-beige p-4 rounded-r-lg mb-4">
              {children}
            </blockquote>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-warm-brown hover:text-dark-brown underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
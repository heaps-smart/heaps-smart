'use client';

import { useState } from 'react';
import { FaShareAlt, FaTwitter, FaLinkedin, FaFacebook, FaLink } from 'react-icons/fa';

interface ShareButtonProps {
  url: string;
  title: string;
  description?: string;
}

export default function ShareButton({ url, title, description }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.origin + url : url;
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || '');
  const encodedUrl = encodeURIComponent(shareUrl);

  const shareLinks = [
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:text-blue-500'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 text-gray-700 hover:text-gray-900"
        aria-label="Share this post"
      >
        <FaShareAlt className="w-4 h-4" />
        <span className="text-sm font-medium">Share</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-full left-0 mt-2 p-3 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[200px]">
            <div className="space-y-2">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors duration-150 text-gray-700 ${link.color}`}
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors duration-150 text-gray-700 hover:text-gray-900 w-full text-left"
              >
                <FaLink className="w-4 h-4" />
                <span className="text-sm">{copied ? 'Copied!' : 'Copy link'}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
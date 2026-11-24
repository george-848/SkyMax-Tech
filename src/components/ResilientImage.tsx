import {useState} from 'react';
import {Server} from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  eager?: boolean;
  style?: React.CSSProperties;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Technology Infrastructure',
  eager = false,
  style,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[var(--bg-surface)] text-[var(--text-secondary)] p-6 text-center ${className}`}
      >
        <div className="w-12 h-12 rounded-xl bg-[var(--bg-primary)] border border-[var(--accent-border)] flex items-center justify-center mb-3">
          <Server className="w-6 h-6 text-[var(--accent)]" aria-hidden="true" />
        </div>
        <span className="text-sm font-semibold text-[var(--text-primary)]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      style={style}
      className={className}
    />
  );
}

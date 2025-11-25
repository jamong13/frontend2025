interface TextSectionProps {
  title: string;
  subtitle: string;
  description: string;
  align: 'left' | 'right';
}

export function TextSection({ title, subtitle, description, align }: TextSectionProps) {
  return (
    <div className={`max-w-6xl mx-auto px-6 py-20 ${align === 'right' ? 'text-right' : ''}`}>
      <div className={`max-w-2xl ${align === 'right' ? 'ml-auto' : ''}`}>
        <p className="text-gray-500 tracking-widest mb-2 uppercase">{title}</p>
        {subtitle && <h2 className="mb-6 uppercase tracking-wide">{subtitle}</h2>}
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

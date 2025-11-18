function NavigationDots({ sections, activeIndex, onSelect }) {
  return (
    <nav className="dot-header" aria-label="섹션 네비게이션">
      <ul className="cf">
        {sections.map((section, index) => (
          <li key={section.id} className={index === activeIndex ? 'on' : ''}>
            <button
              type="button"
              onClick={() => onSelect(index)}
              aria-current={index === activeIndex ? 'true' : undefined}
              aria-label={section.label}
            >
              <span>{section.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationDots;


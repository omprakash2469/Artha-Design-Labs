export default function SectionHeader({ subtitle, heading }) {
  return (
    <div className="text-center mb-4 xl:mb-8">
      <h3 className="subtitle">{subtitle}</h3>
      <h2 className="primary-heading">{heading}</h2>
    </div>
  );
}

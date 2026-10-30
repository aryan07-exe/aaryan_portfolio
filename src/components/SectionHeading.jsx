export default function SectionHeading({ number, eyebrow, title, accent, note }) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow"><span>{number}</span>{eyebrow}</div>
        <h2>{title} {accent && <em>{accent}</em>}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}
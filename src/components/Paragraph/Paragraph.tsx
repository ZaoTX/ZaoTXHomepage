interface ParagraphProps {
  title: string;
  content: string;
}
//import App.css

function Paragraph({ title, content }: ParagraphProps) {
  return (
    <div>
      <h1 className="green_text paragraph-title-container">{title}</h1>
      <p className="paragraph-container">{content}</p>
    </div>
  );
}
export default Paragraph;

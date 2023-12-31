import bgImg from "../assets/cyber-bg.webp";

/* creates hero image */
export function HeroImage(): JSX.Element {
  return (
    <div>
      <img 
        className="w-full invisible sm:visible" 
        src={bgImg} 
        alt="Descriptive alt text"
        width={829}
        height={600}
      />
    </div>
  );
}

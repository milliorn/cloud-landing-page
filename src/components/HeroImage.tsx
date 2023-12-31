import bgImg from "../assets/cyber-bg.webp";

/* creates hero image */
export function HeroImage(): JSX.Element {
  return (
    <div>
      <img
        className="w-full invisible sm:visible"
        src={bgImg}
        alt="hero logo"
      />
    </div>
  );
}

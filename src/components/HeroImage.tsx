import bgImg from "../assets/cyber-bg.png";

/* creates hero image */
export function HeroImage(): JSX.Element {
  return (
    <div>
      <img className="w-full invisible sm:visible" src={bgImg} alt="/" />
    </div>
  );
}

import Hero from "./components/layout/Hero";
import dentistImage from "../public/images/dentist.jpeg";

export default function Home() {
  return (
    <div>
      <Hero
        title="Let us Brigthen Your Smile
        "
        subhead="Dr. Keith A. Brown, D.D.S., F.A.G.D., has been serving Naperville and the Chicagoland area for more than 40 years. Schedule a cleaning or appointment today!

        "
        imageUrl={dentistImage.src}
      />
    </div>
  );
}

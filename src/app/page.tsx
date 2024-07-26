import Image from "next/image";
import ItemCard from "./components/ItemCard";
import {
  generatePrivateCarousel,
  generatePublicCarousel,
} from "./utils/generateCarousels";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <Image
          src="/mtndrw.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <p className="text-center pt-4">
          You made it to Andrew Padilla's developer landing page. YIPPIE!
        </p>
      </div>

      {/* <div className="text-center p-4">
        <p className="p-2">Private Projects</p>

        <div className="grid grid-cols-2 gap-2">
          <ItemCard
            title="MSaaS"
            description="Modeling & Simulation as a Service is a web-based containerization collaborator tool. If dockerhub and gitlab had a baby - and their cousins are systems engineers - this is them."
            src="/msaas_logo.png"
          ></ItemCard>
          <ItemCard
            title="Lit SSO Login Modal"
            description="A portable web component for logging in, because we have so many apps and everyone spends time developing logins."
            src="/lit_logo.png"
          ></ItemCard>
        </div>
      </div> */}
      {generatePublicCarousel()}
      {generatePrivateCarousel()}
    </main>
  );
}

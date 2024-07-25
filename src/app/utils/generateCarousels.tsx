import ItemCardCarousel from "../components/ItemCarousel";
import { privateProjects } from "../data/privateProjects";
import { publicProjects } from "../data/publicProjects";

export function generatePrivateCarousel() {
  return (
    <>
      <p className="p-2">Private Projects</p>
      <ItemCardCarousel
        itemCards={privateProjects}
        title="Private Projects"
      ></ItemCardCarousel>
    </>
  );
}

export function generatePublicCarousel() {
  return (
    <>
      <p className="p-2">Public Projects</p>
      <ItemCardCarousel
        itemCards={publicProjects}
        title="Public Projects"
      ></ItemCardCarousel>
    </>
  );
}

import ItemCardCarousel from "../components/ItemCarousel";
import { privateProjects } from "../data/privateProjects";
import { publicProjects } from "../data/publicProjects";

export function generatePrivateCarousel() {
  return (
    <>
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
      <ItemCardCarousel
        itemCards={publicProjects}
        title="Public Projects"
      ></ItemCardCarousel>
    </>
  );
}

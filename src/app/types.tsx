interface ItemCardCarousel {
  title: string;
  itemCards: ItemCard[] | [];
}

type PrivateProject = {
  title: string;
  description: string;
  src: string;
};

type PublicProject = PrivateProject & {
  link: string;
  githubLink?: string;
};

type Project = PrivateProject | PublicProject;

type ItemCard = Project & {
  disabled?: boolean;
};

export type {
  ItemCard,
  ItemCardCarousel,
  Project,
  PrivateProject,
  PublicProject,
};

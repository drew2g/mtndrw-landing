type ItemCardCarousel = {
  title: string;
  itemCards: ItemCard[] | [];
};

type Project = {
  title: string;
  description: string;
  src: string;
};

type PrivateProject = Project;

type PublicProject = Project & {
  link: string;
  githubLink?: string;
};

type ItemCard = (PrivateProject | PublicProject) & {
  disabled?: boolean;
};

export type {
  ItemCard,
  ItemCardCarousel,
  Project,
  PrivateProject,
  PublicProject,
};

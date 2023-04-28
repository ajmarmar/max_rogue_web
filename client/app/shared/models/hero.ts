import { StatusHero } from './status_hero';

export type Heroe = {
    _id?: string;
    photo?: boolean;
    name: string | '';
    attributes: StatusHero;
    effects?: [];
  };

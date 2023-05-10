import { StatusHero } from './status_hero';

export type Hero = {
    _id?: string;
    photo?: boolean;
    name: string | '';
    attributes: StatusHero;
    effects?: [];
  };

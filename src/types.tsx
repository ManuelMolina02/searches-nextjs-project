
export interface countrieProps {
  id: string;
  name: string;
  initials: string;
  capital: string;
  continent: string;
  url_flag: string;
  searches: {
    population: [
      {
        color: string,
        gender: string,
        amount: string
      }
    ];
    economy: []
  }
  references: {
    id: string;
    name: string;
    url_search: string
  }
}
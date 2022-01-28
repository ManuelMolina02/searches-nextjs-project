
export interface countrieProps {
  id: number;
  name: string;
  initials: string;
  capital: string;
  continent: string;
  url_flag: string;
  map_coordinate: {
    latitude: number,
    longitude: number,
    zoom: number,
    marker_position: {
      setTop: number,
      setLeft: number
    }
  },
  searches: {
    population: [
      {
        color: string,
        gender: string,
        amount: number
      }
    ];
    economy: economyCountrieProps[]
  }
  references: {
    id: number;
    name: string;
    url_search: string
  }
}


export interface countriesListProps {
  id: number,
  name: string,
  flag: string
}

export interface economyCountrieProps {
  id_activity: number,
  name_activity: string,
  details: {
    id: number,
    name: string,
    value: number,
    unit: string
    reference: string
  },
}
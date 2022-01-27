
export interface countrieProps {
  id: string;
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
    economy: []
  }
  references: {
    id: string;
    name: string;
    url_search: string
  }
}
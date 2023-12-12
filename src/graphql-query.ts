import { gql } from '@apollo/client';

export const getCharacter = (id: number) => {
  return gql`
  query {
    character(id: ${id}) {
      id
      name
      status
      species
      type
      gender
      episode {
        id
        name
      }
      origin {
        name
        dimension
      }
      location {
        name
        dimension
      }
      image
      created
    }
  }
`;
};

export const getCharacters = (page: number) => {
  return gql`
  {
    characters(page: ${page}) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        episode {
          id
          name
        }
        origin {
          name
        }
        location {
          name
        }
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;
};

import { gql } from "apollo-server";

export const typeDefs = gql`
  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

  type FindResults {
    count: Int
    next: String
    previous: String
    results: [Person]
  }

  type Query {
    findAll: FindResults!
    findAllByPage(page: Int): FindResults!
    findByName(name: String): FindResults!
    health: String
  }
`;

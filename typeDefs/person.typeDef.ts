import { gql } from "apollo-server";

export const typeDefs = gql`
  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }
  type Query {
    findAll: [Person]!
    findAllByPage(page: Int): [Person]!
    findByName(name: String): [Person]!
    health: String
  }
`;

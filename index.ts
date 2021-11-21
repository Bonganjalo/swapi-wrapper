import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typeDefs/person.typeDef";
import { resolvers } from "./resolvers/person.resolver";
import { Person } from "./data-source/person.datasource";
// Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     hello: (root, args, context) => "Hello world!"
//   }
// };

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    person: new Person("https://swapi.dev/api/")
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

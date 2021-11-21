export const resolvers = {
  Query: {
    findAll: (_, __, { dataSources }) => dataSources.person.findAll(),
    findAllByPage: (_, { page }, { dataSources }) =>
      dataSources.person.findAllByPage({ page }),
    findByName: (_, { name }, { dataSources }) =>
      dataSources.person.findByName({ name }),
    health: () => "API is healthy"
  }
};

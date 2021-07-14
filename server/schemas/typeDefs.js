const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    passowrd: String!
    savedBooks: [Book]!
  }

  type Query {
  }

  type Mutation {
  }
`;

module.exports = typeDefs;
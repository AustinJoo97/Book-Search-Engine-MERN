const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    passowrd: String!
    savedBooks: [Book]!
  }

  type Book {
      authors: [String],
      description: [String]!,
      bookId: String!,
      image: String,
      link: String,
      title: String!
  }

  type Query {
  }

  type Mutation {
  }
`;

module.exports = typeDefs;
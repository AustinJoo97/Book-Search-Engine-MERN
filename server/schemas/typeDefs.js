const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    passowrd: String!
    savedBooks: [Book]
  }

  type Book {
      _id: ID!
      authors: [String]
      description: String!
      bookId: String!
      image: String
      link: String
      title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getSingleUser(_id: ID, username: String!): User
    getMe: User
  }

  type Mutation {
      createUser(username: String!, email: String!, password: String!): Auth
      login(username: String, email: String!, password: String!): Auth
      saveBook(_id: ID, bookId: String!): User
      deleteBook(_id: ID, bookId: String!): User
  }
`;

module.exports = typeDefs;
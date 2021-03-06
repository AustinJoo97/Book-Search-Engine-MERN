import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!){
        createUser(username: $username, email: $email, passowrd: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const LOGIN = gql`
    mutation login($username: String, $email: String!, $password: String!){
        login(username: $username, email: $email, password: $password){
            token
            user {
                _id,
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($_id: ID!, $bookId: String!){
        saveBook(_id: $_id, bookId: $bookId){
            user {
                _id
                username
                books {
                    authors
                    description
                    bookId
                    image
                    link
                    title
                }
            }
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation deleteBook($_id: ID!, $bookId: String!){
        deleteBook(_id: $_id, bookId: $bookId){
            user {
                _id
                username
                books {
                    authors
                    description
                    bookId
                    image
                    link
                    title
                }
            }
        }
    }
`;
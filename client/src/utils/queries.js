import { gql } from '@apollo/client';

export const GET_SINGLE_USER = gql`
    query singleUser($_id: ID, $username: String!){
        getSingleUser(_id: $_id, username: $username){
            username
            email
            savedBooks {
                _id
                authors
                bookId
                description
                image
                link
                title
            }
        }
    }
`;
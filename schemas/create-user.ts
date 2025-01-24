import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    subscription onCreateUser {
        userCreated {
            name
            lastname
            age
        }
    }
`;
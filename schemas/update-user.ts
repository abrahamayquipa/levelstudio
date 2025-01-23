import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
    subscription onUpdateUser {
        userUpdated {
            id
            name
            age
        }
    }
`;
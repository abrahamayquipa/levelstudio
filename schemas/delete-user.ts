import { gql } from "@apollo/client";

export const DELETE_USER = gql`
    subscription onDeleteUser {
        userDeleted {
            id
        }
    }
`;
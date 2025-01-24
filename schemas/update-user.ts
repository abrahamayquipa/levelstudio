import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $name: String, $lastname: String, $age: String) {
        updateUser(id: $id, input: { age: $age, name: $name, lastname: $lastname }) {
            id
            age
            name
            lastname
            mayor
            created_at
            updated_at
        }
    }
`;
import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation createUser($age: String! , $name: String!, $lastname: String!) {
        createUser(input: {age: $age, name: $name, lastname: $lastname}){
            id
            age
            name
            mayor
            created_at
            updated_at
        }
    }
`;
/*
import { useQuery, useSubscription } from "@apollo/client";
import {
    GET_EMPLOYEES,
    CREATE_EMPLOYEE_SUBS,
    DELETE_EMPLOYEE_SUBS,
} from "@levelstudio/schemas";

import { Employee } from "@levelstudio/types";

export const useGetEmployees = (): [
    Employee[],
    () => void,
    boolean,
    Error | undefined
] => {
    const { data, error, loading, refetch } = useQuery(GET_EMPLOYEES);

    const dataComputed = (data?.employees || []).map(
        ({ id, dni, names, lastnames, email, remarks }: any): Employee => ({
            id: parseInt(id),
            dni: parseInt(dni),
            names,
            lastnames,
            email,
            remarks,
        })
    );

    const useSubs = () => {
        useSubscription(CREATE_EMPLOYEE_SUBS, {
            onData: () => {
                refetch();
            },
        });
        useSubscription(DELETE_EMPLOYEE_SUBS, {
            onData: () => {
                refetch();
            },
        });
    };

    return [dataComputed, useSubs, loading, error];
};*/
import { User } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";

export const fetchUsers = async ({
    search,
    pageSize = 20,
}: {
    search: string;
    pageSize?: number;
}): Promise<User[]> => {
    try {
        const response = await fetch(
            `${API_URL}?q=${search}&pageSize=${pageSize}&apiKey=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("Error al consultar");
        }

        const data = await response.json();

        if (data.status === "ok") {
            const mappedData = data.articles.map(
                (item: User) => ({
                    name: item.name,
                    age: item.age,
                })
            );
            return mappedData;
        }

        if (data.status === "error") {
            throw new Error("Peticion incorrecta");
        }

        return [];
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("Error desconocido");
    }
};
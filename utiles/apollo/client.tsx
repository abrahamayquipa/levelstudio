"use client";
// ^ this file needs the "use client" pragma

import { ApolloLink, HttpLink, split } from "@apollo/client";
import {
    ApolloNextAppProvider,
    InMemoryCache,
    ApolloClient,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const CRUD_API_URL = process.env.NEXT_PUBLIC_CRUD_API_URL || "";
const CRUD_API_URL_WS = process.env.NEXT_PUBLIC_CRUD_API_URL_WS || "";

// have a function to create a client for you
function makeClient() {
    const uploadLink = createUploadLink({
        uri: `${CRUD_API_URL}/query`,
        fetchOptions: { cache: "no-store" },
    });
    const httpLink = new HttpLink({
        // this needs to be an absolute url, as relative urls cannot be used in SSR
        uri: `${CRUD_API_URL}/query`,
        // you can disable result caching here if you want to
        // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
        fetchOptions: { cache: "no-store" },
        // you can override the default `fetchOptions` on a per query basis
        // via the `context` property on the options passed as a second argument
        // to an Apollo Client data fetching hook, e.g.:
        // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
    });
    const wsClient =
        typeof window !== "undefined"
            ? new SubscriptionClient(`${CRUD_API_URL_WS}/query`, {
                reconnect: true,
                // connectionParams: {
                //   authToken: accessToken,
                // },
            })
            : null;

    const wsLink = wsClient ? new WebSocketLink(wsClient) : null;

    const splitLink =
        wsLink != null
            ? split(
                ({ query }) => {
                    const def = getMainDefinition(query);
                    return (
                        def.kind === "OperationDefinition" &&
                        def.operation === "subscription"
                    );
                },
                wsLink,
                uploadLink
            )
            : uploadLink;

    return new ApolloClient({
        // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
        cache: new InMemoryCache(),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                    // in a SSR environment, if you use multipart features like
                    // @defer, you need to decide how to handle these.
                    // This strips all interfaces with a `@defer` directive from your queries.
                    new SSRMultipartLink({
                        stripDefer: true,
                    }),
                    splitLink,
                ])
                : splitLink,
    });
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}
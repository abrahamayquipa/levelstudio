import { SVGProps } from "react";

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
            fill="#e2e8c1"
            d="M17 6h-6a1 1 0 0 0-.78.375l-4 5a1 1 0 0 0 0 1.25l4 5A1 1 0 0 0 11 18h6l.112-.006a1 1 0 0 0 .669-1.619L14.28 12l3.5-4.375A1 1 0 0 0 17 6"
            ></path>
        </svg>
    )
}
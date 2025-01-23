import { SVGProps } from "react";

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
            {...props}
        >
            <g
                fill="none"
                stroke="#e2e8c1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2">
                <path d="M5 21c.5-4.5 2.5-8 7-10"></path>
                <path d="M9 18c6.218 0 10.5-3.288 11-12V4h-4.014c-9 0-11.986 4-12 9c0 1 0 3 2 5h3z"></path>
            </g>
        </svg>
    )
}
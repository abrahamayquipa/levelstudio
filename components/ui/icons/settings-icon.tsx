import { SVGProps } from "react";

export function SettingsIcon(props: SVGProps<SVGSVGElement>) {
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
                <path
                    d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z">
                </path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></path>
            </g>
        </svg>
    )
}
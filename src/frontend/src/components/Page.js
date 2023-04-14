import { Link } from "react-router-dom";

export function Title({text}) {
    return (
        <div className="
        flex
        justify-center
        items-center
        py-2
        ">
            <h1 className="text-white text-5xl font-medium">
                {text}
            </h1>
        </div>
    )
}

export function Button({text, href}) {
    return (
        <Link className="
        p-2
        bg-black 
        text-white
        hover:bg-neutral-500
        hover:text-black
        "
        to={href}>{text}</Link>
    );
}
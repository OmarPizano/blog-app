import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export function Page({title, children}) {
    return (
        <div className="flex flex-col gap-3 items-center">
            <Title text={title} />
            {children}
        </div>
    )
}

function Title({text}) {
    return (
        <div className="
        flex
        justify-center
        items-center
        w-2/3
        bg-neutral-800
        p-3
        shadow-md
        shadow-black
        ">
            <h1 className="text-white text-5xl font-medium">
                {text}
            </h1>
        </div>
    )
}

export function NotifyInfo({text}) {
    return (
        <div className="text-white">
            <p>{text}</p>
        </div>
    );
}

export function NotifyAsk({text, tid, callback}) {
    return (
        <div className="grid grid-rows-2 gap-1 text-white">
            <div className="flex justify-center items-center">
                <p>{text}</p>
            </div>
            <ButtonGroup>
                <ButtonRed text="OK" callback={callback}/>
                <Button text="Cancel" callback={() => toast.dismiss(tid) }/>
            </ButtonGroup>
        </div>
    );
}

export function ButtonGroup({children}) {
  return (
    <div className="flex flex-row gap-2 justify-end items-center">
      {children}
    </div>
  )
}

export function Button({text, href, callback}) {
    return (
        <Link className="
        p-2
        bg-black 
        text-white
        hover:bg-indigo-600
        hover:text-black
        "
        to={href} onClick={callback}>{text}</Link>
    );
}

export function ButtonRed({text, href, callback}) {
    return (
        <Link className="
        p-2
        bg-black 
        text-white
        hover:bg-rose-600
        hover:text-black
        "
        to={href} onClick={callback}>{text}</Link>
    );
}
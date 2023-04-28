import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ThreeCircles } from "react-loader-spinner";
import { AiOutlineLoading3Quarters, AiFillFileExclamation } from "react-icons/ai";

export function Page({title, children}) {
    return (
        <div className="flex flex-col gap-3 items-center">
            <Title text={title} />
            <Content>
                {children}
            </Content>
        </div>
    )
}

export function Loading() {
    return (
        <div className="flex flex-col gap-10 p-20 items-center justify-center">
            <ThreeCircles
                height="100"
                width="100"
                color="#696969"
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor="#ff0033"
                innerCircleColor="#00aaff"
                middleCircleColor="#5e00a3"
            />
            <p className="text-white text-lg">Loading...</p>

        </div>
    )
}

function Title({text}) {
    return (
        <div className="
        flex
        justify-center
        items-center
        w-5/6
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

function Content({children}) {
    return (
        <div className="w-5/6">
            {children}
        </div>
    )
}

export function Card({children}) {
    return (
        <div className="bg-neutral-800 shadow-md shadow-black hover:bg-neutral-950">
            {children}
        </div>
    );
}

export function Container({children}) {
    return (
        <div className="p-3 flex flex-col items-center bg-neutral-800 shadow-md shadow-black">
            {children}
        </div>
    );
}

export function Information({text}) {
    return (
        <Container>
            <AiFillFileExclamation className="w-24 h-24 my-2 text-white" />
            <div className="flex flex-col justify-center items-center">
                <p className="text-white my-4">{text}</p>
            </div>
        </Container>
    );
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
    <div className="flex flex-row gap-2 justify-end">
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

export function ButtonSubmit({text, disabled}) {
    return (
        <button className="
        p-2
        bg-black 
        text-white
        hover:bg-indigo-600
        hover:text-black
        "
        type="submit" disabled={disabled}>{disabled ? (
            <AiOutlineLoading3Quarters className="animate-spin" />
        ): text}</button>
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

export function ButtonConfirmHandler(callback, textConfirm) {
    toast((t) => (
        <NotifyAsk
            tid={t.id}
            text={textConfirm}
            callback={() => {
                callback();
                toast.dismiss(t.id);
            }
        }/>
    ), {
        style: {
            background: "#333333"
        },
    });
}
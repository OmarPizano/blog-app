import { Button, ButtonRed, ButtonGroup, NotifyAsk, NotifyInfo, Card, ButtonConfirmHandler } from "../components/Page";
import { toast } from "react-hot-toast";
import { usePostContext } from "../context/PostContext";

export function PostList({posts}) {
    return (
        <div className="flex flex-col gap-3">
            <ButtonGroup>
              <Button text='New Post' href='/new' />
            </ButtonGroup>
            <div className="grid grid-cols-2 gap-3">
                {posts.map(post => (
                    <Card>
                        <Post post={post} key={post._id}/>
                    </Card>
                ))}
            </div>
        </div>
    );
}

function Post({post}) {
    const {deletePost} = usePostContext();

    function handleDelete(id, title) {
        if (title.length > 20) title = title.substring(0,15);
        ButtonConfirmHandler(
            () => deletePost(id),
            `Delete '${title}' post?`
        );
    };

    return (
        <div className="flex flex-row h-44">
            <PostImg img={post.image?.url} />
            <div className="basis-3/4 flex flex-col gap-2 m-2 text-white">
                <PostHeader title={post.title} date={post.date} />
                <PostContent content={post.content} />
                <ButtonGroup>
                    <ButtonRed text='Delete' callback={() => handleDelete(post._id, post.title)}/>
                </ButtonGroup>
            </div>
        </div>
    );
}

function PostImg({img}) {
    return (
        <div className="h-44 w-44">
            <img className="object-cover h-full w-full" src={img} alt="postimg" />
        </div>
    );
}

function PostHeader({title, date}) {
    return (
        <div className="flex flex-row justify-between gap-3 h-14 overflow-hidden">
            <h2 className="text-xl font-bold tracking-widest text-ellipsis break-words">{title}</h2>
            <p className="font-extralight">{date}</p>
        </div>
    )
}

function PostContent({content}) {
    return (
        <div className="h-10 overflow-hidden">
            <p className="text-neutral-400 text-sm italic text-ellipsis break-words">
                {content}
            </p>
        </div>
    );
}
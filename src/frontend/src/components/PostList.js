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
        <div className="grid grid-cols-5">
            <div className="col-span-1 bg-red-950">
                <img className="object-cover h-full w-full" src={post.image?.url} alt="postimg" />
            </div>
            <div className="col-span-4 grid grid-rows-3 items-center m-2 text-white">
                <div className="flex flex-row justify-between">
          	        <h2 className="text-xl font-bold tracking-widest">{post.title}</h2>
          	        <p className="font-extralight">{post.date}</p>
                </div>
                <div>
        	        <p className="text-neutral-400 text-sm italic">{post.content}</p>
                </div>
                <ButtonGroup>
                    <ButtonRed text='Delete' callback={() => handleDelete(post._id, post.title)}/>
                </ButtonGroup>
            </div>
        </div>
    );
}
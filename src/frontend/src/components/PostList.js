import { Title, Button, ButtonRed, ButtonGroup, NotifyAsk, NotifyInfo } from "../components/Page";
import { toast } from "react-hot-toast";

export function PostList({posts}) {
    return (
        <div className="flex flex-col gap-3">
            <Title text='Posts' />
            <ButtonGroup>
              <Button text='New Post' href='/new' />
            </ButtonGroup>
            <PostGrid>
                {posts.map(post => (
                    <PostCard post={post} key={post._id}/>
                ))}
            </PostGrid>
        </div>
    );
}

function PostGrid({children}) {
    return (
        <div className="grid grid-cols-2 gap-3">
            {children}
        </div>
    )
}

function PostCard({post}) {

    const handleDelete = () => {
        toast(() => (
            <NotifyAsk text="Do you really want to delete this item?" />
        ), {
            style: {
                background: "#333333"
            },
        });
    };

  return (
    <div className="
    grid grid-cols-5
    bg-neutral-800
    shadow-md 
    shadow-black
    hover:bg-neutral-950">
      <div className="col-span-1">
        <img src={post.image?.url} alt="postimg" />
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
            <ButtonRed text='Delete' callback={handleDelete}/>
          </ButtonGroup>
      </div>
    </div>
  )
}
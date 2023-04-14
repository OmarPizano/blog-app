import { Title, Button } from "../components/Page";

export function PostList({posts}) {
    return (
        <div>
            <Title text='Posts' />
            <PostListActions>
              <Button text='New Post' href='/new' />
            </PostListActions>
            <PostGrid>
                {posts.map(post => (
                    <PostCard post={post} key={post._id}/>
                ))}
            </PostGrid>
        </div>
    );
}

function PostListActions({children}) {
  return (
    <div className="flex flex-row gap-2 justify-end my-2">
      {children}
    </div>
  )
}

function PostGrid({children}) {
    return (
        <div className="grid grid-cols-2 gap-3">
            {children}
        </div>
    )
}

function PostCard({post}) {
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
      <div className="col-span-4 m-2 text-white">
          <div className="flex flex-row justify-between">
          	<h2 className="text-xl font-bold tracking-widest">{post.title}</h2>
          	<p className="font-extralight">{post.date}</p>
          </div>
        	<p className="text-neutral-400 text-sm italic">{post.content}</p>
      </div>
    </div>
  )
}
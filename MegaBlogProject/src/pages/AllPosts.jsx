import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../component/index.js'
import appwriteService from "../appwrite/configuration.js";

function AllPosts() {
    const [post, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    
    console.log(post)
  return (
    <div className='w-full py-8 bg-white'>
        <Container>
            <div className='flex flex-wrap'>
                {post.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts
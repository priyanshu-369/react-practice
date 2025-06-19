import React from 'react'
import {Container, PostForm} from "../component/index.js"

function AddPost() {
  return (
    <div className='py-8 bg-zinc-200'>
    <Container>
        <PostForm/>
    </Container>
    </div>
  )
}

export default AddPost
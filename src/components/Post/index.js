import SocialButton from '../SocialButton'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'

import './index.css'

const Post = () => (
  <div className="post-container">
    <h1 className="heading">React Hooks</h1>
    <p className="paragraph">
      Hooks are a new addition in React 16.8. They let you use state and other
      React features without writing a class.
    </p>
    <div className="social-button-wrapper">
      <SocialButton>
        <AiFillLike /> Like
      </SocialButton>
      <SocialButton>
        <AiFillDislike /> Unlike
      </SocialButton>
    </div>
  </div>
)

export default Post

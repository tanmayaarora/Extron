import './Blog.scss'

export default function Blog(props) {
    const { id, title, description, name } = props.data;
 
    return (
        <div key={id} className='blog'>
            <h1>{title}</h1>
            <h3><i>{description}</i></h3>
            <h5> By {name}</h5>
            
        </div>
        );
  }

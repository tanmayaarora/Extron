import './Blog.css'

export default function Blog(props) {
    const { id, title, description, name } = props.data;
    return (
        <div key={id} style={{'margin-bottom':'15px'}} className="blog">
            <h1>{title}</h1>
            <h3><i>{description}</i></h3>
            By <b>{name}</b>
        </div>
        );
  }
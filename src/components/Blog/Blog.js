import './Blog.scss'

export default function Blog(props) {
    const { id, title, description, name, imgsource } = props.data;
 
    return (
        <div key={id} className='blog col-sm-6 col-md-3 col-lg-3'>
            <img src={imgsource} width={320} height={300}/>
            <h1>{title}</h1>
            <h3><i>{description}</i></h3>
            <h5> By {name}</h5>
            
        </div>
        );
  }

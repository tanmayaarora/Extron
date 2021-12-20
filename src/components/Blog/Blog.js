import './Blog.css'

export default function Blog(props) {
    const { id, title, description, name } = props.data;
    // const row = {
    //     display: 'flex',
    //     width: '30%',
    //     'margin-bottom':'15px'
    //   };
    return (
        <div key={id} className='blog'>
            <h1>{title}</h1>
            <h3><i>{description}</i></h3>
            <h5> By {name}</h5>
            
        </div>
        );
  }
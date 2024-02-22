import './PageTitle.css'


//todo dinamic title chage
const PageTitle = (props) => {

    return (
        <div className='page-title'>
            <p className='title'>{props.pageName}</p>
        </div>
    )
}

export default PageTitle;
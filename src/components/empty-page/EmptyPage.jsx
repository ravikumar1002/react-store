import "./emptypage.css"
import { Link } from "react-router-dom"
const EmptyPage = ({emptyPageData}) => {

   const   {imgSrc, imgAlt, emptyPageText, emptyPageHeading, emptyPageSubText } = emptyPageData
    return(
        <div>
            <div>
                <img src={imgSrc} alt={imgAlt}  className="empty-bag"/>
            </div>
            <div>
                <h3 className="empty-page-heading">{emptyPageHeading}</h3>
                <p className="empty-page-content">{emptyPageText} </p>
                <p className="empty-page-sub-content">{emptyPageSubText}</p>
                 <Link to ="/productspage" className="empty-page-btn m-2 btn-sm btn-primary border-squre">Start Shopping</Link>
            </div>
        </div>
    )
}

export {EmptyPage}
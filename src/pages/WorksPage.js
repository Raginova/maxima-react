import './WorksPage.scss'
import Works from '../components/WorksP/Works'
import { useEffect, useState } from "react";


function WorksPage() {
       
    const [ reviews, setReviews ] = useState([])

    
    useEffect (() => {
        fetch('API/reviews.json')
            .then((response) => response.json())
            .then((result) => {
                setReviews(result);
                console.log(result)
            });
    }, [] );

 
    return (

        <div className={'reviews-main'}>    
            <div className={'reviews-container'}>
                {
                    !reviews.length 
                }
                {
                    reviews && reviews.length && reviews?.map((reviews) => {
                        return (
                            <Works key={reviews.id}
                                     title={reviews.title}
                                     volum={reviews.volum}
                                     image={reviews.image}
                            />
                        )
                    })
                }
            </div>
        </div>
    )

    
}

export default WorksPage;
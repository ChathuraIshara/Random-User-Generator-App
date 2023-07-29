import moment from 'moment';

function Item(props)
{
    return <div className="container mb-3">
        <li className="list-group-item">
            <div className="row align-items-center shadow-sm">
                <div className="col-2">
                  <img src={props.picture} className="border border-dark rounded-circle shadow-sm"/>
                </div>
                <div className="col-10">
                    <h3>{props.name}</h3>
                    <p>City: {props.location} | Email: {props.email}</p>
                    <small>BirthDay: {moment(props.dob).format('DD-MM-YYYY')}</small>
                </div>
            </div> 

        </li>    
    </div>
}
export default Item;
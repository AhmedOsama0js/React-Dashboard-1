import React from 'react'
import { BsBagFill } from "react-icons/bs"
import data from '../../dist/data/Data';
const RecentOrders = () => {
  // console.log(data);
  return (
    <div className=" OrdersTable bg-body p-3 rounded-3">
      <div className="d-flex justify-content-between text-success">
        <h4>Product</h4>
        <span className="fs-5">
          <BsBagFill />
        </span>
      </div>
      <div>
        <ul className="p-1">
          {data.map((item, id) => (
            <li key={id} className="p-2 my-2 bg-body-tertiary rounded-2 d-flex align-items-center justify-content-between">
              <div className="bg-body-secondary p-2 rounded-3 ">
                <BsBagFill className="text-success" />
              </div>
              <div className='mx-2 d-flex align-items-center justify-content-center flex-column'>
                ${item.total}
                <p className='m-0'>{item.name}</p>
              </div>
              <div>
                {item.date}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecentOrders

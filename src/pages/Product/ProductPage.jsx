import "./ProductPage.css";
import HeaderD from "../../components/HeaderD";
import ClintData from "../../dist/data/Data";
import { BsFillBagFill, BsFillBagCheckFill } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";

const ProductPage = () => {
  return (
    <div>
      <HeaderD header="Product" />
      <div className="table-clint m-3 p-3 bg-body rounded-3">
        <table className="table table-striped">
          <thead>
            <tr className="text">
              <th scope="col">
                <BsFillBagCheckFill className="text-success mx-1 fs-3" />
                <span className="mx-2">Order</span>
              </th>
              <th scope="col">Status</th>
              <th scope="col">LastOrder</th>
              <th scope="col">Method</th>
            </tr>
          </thead>
          <tbody>
            {ClintData.map((clint, id) => (
              <tr key={id} className="my-5">
                <th scope="row">
                  <span className="bg-success bg-opacity-25 p-2 rounded-3">
                    <BsFillBagFill className="text-success" />
                  </span>
                  <span className="mx-2">${clint.total}</span>
                </th>
                <td>
                  <span
                    className={`py-1 px-3 ${
                      clint.status === "Active" ? "bg-warning" : "bg-danger "
                    } bg-opacity-25 rounded-5`}
                  >
                    {clint.status}
                  </span>
                </td>
                <td>{clint.lastOrder}</td>
                <td className="d-flex align-item-center justify-content-between">
                  <span> {clint.method}</span>
                  <span className="fs-6 btn p-0 fw-bold">
                    <AiOutlineMore />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductPage;

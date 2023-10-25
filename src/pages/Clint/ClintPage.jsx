import "./ClintPage.css";
import HeaderD from "../../components/HeaderD";
import ClintData from "../../dist/data/Data";
import { BsFillPersonBadgeFill, BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";

const ClintPage = () => {
  return (
    <div>
      <HeaderD header="Clint" />
      <div className="table-clint m-3 p-3 bg-body rounded-3">
        <table className="table table-striped">
          <thead>
            <tr className="text">
              <th scope="col">
                <BsFillPersonBadgeFill className="text-success mx-1 fs-3" />
                <span className="mx-2">Name</span>
              </th>
              <th scope="col">email</th>
              <th scope="col">lastOrder</th>
              <th scope="col">Method</th>
            </tr>
          </thead>
          <tbody>
            {ClintData.map((clint, id) => (
              <tr key={id} className="my-5">
                <th scope="row">
                  <span className="bg-success bg-opacity-25 p-2 rounded-3">
                    <BsFillPersonFill className="text-success" />
                  </span>
                  <span className="mx-2">{clint.name}</span>
                </th>
                <td>{clint.email}</td>
                <td>{clint.lastOrder}</td>
                <td className="d-flex align-item-center justify-content-between">
                  {clint.method}
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

export default ClintPage;

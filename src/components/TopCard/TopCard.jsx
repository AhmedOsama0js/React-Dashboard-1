import HeaderD from "../HeaderD";
import "./TopCard.css";

const TopCard = () => {
  return (
    <>
      <HeaderD header="dashboard" />
      <div className="top-cord px-3">
        <div className="bg-body p-3 rounded-3 d-flex justify-content-between">
          <div>
            <p className="fw-bold fs-4 m-0">$7.846</p>
            <p className="text-secondary m-0">Daily Revenue</p>
          </div>
          <div className="h-100 d-flex justify-content-center align-items-center">
            <span className="h-100 bg-success bg-opacity-25 text-success d-flex align-items-center flex-fill p-3 rounded-3 fs-5">
              +18%
            </span>
          </div>
        </div>
        <div className="bg-body p-3 rounded-3 d-flex justify-content-between">
          <div>
            <p className="fw-bold fs-4 m-0">$1,846,000</p>
            <p className="text-secondary m-0">YID Revenue</p>
          </div>
          <div className="h-100 d-flex justify-content-center align-items-center">
            <span className="h-100 bg-success bg-opacity-25 text-success d-flex align-items-center flex-fill p-3 rounded-3 fs-5">
              +17%
            </span>
          </div>
        </div>
        <div className="bg-body p-3 rounded-3 d-flex justify-content-between">
          <div>
            <p className="fw-bold fs-4 m-0">11,563</p>
            <p className="text-secondary m-0">Customers</p>
          </div>
          <div className="h-100 d-flex justify-content-center align-items-center">
            <span className="h-100 bg-success bg-opacity-25 text-success d-flex align-items-center flex-fill p-3 rounded-3 fs-5">
              +11%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCard;

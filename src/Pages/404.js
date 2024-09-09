import Lottie from "lottie-react";
import error404 from "../LottieData/error404.json";
import {Link} from "react-router-dom";

function Error404() {
  return (
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        <div className="d-flex flex-column flex-center flex-column-fluid">
          <div className="d-flex flex-column flex-center text-center p-10">
            <div className="card card-flush w-lg-650px py-5">
              <div className="card-body py-15 py-lg-20">

                <h1 className="fw-bolder fs-2hx text-gray-900 mb-4">
                  Oops!
                </h1>
                <div className="fw-semibold fs-6 text-gray-500 mb-7">
                  Chúng tôi không thể tìm thấy trang của bạn!
                </div>
                <div className="mb-3">
                  <img src="/images/404.png" className="mw-100 mh-300px theme-light-show" alt=""/>
                </div>

                <div className="mb-0">
                  <a href="/" className="btn btn-sm btn-primary">Quay lại trang chủ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Error404;
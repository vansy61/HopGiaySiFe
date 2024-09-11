export default function AuthLeftContent() {
    return (
        <div className="d-none d-lg-block d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover  bgi-position-center"
             style={{backgroundImage: "url(/images/auth-bg.png)"}}>
            <div className="d-flex flex-column flex-center p-6 p-lg-10 w-100 h-100">
                <img className="mx-auto w-300px w-lg-75 w-xl-500px mb-10 mb-lg-20" src="/images/auth-screens.png"
                     alt=""/>
                <h1 className="text-white fs-2qx fw-bold text-center mb-7">
                    CHUYÊN NGHIỆP - UY TÍN - TIẾT KIỆM
                </h1>
                <div className=" text-white fs-base text-center">
                    Xưởng sản xuất hộp cứng cao cấp
                </div>
            </div>
        </div>
    )
}
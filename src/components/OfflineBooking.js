import React from 'react'

export const OfflineBooking = () => {
  return (
    <>
    <div className="websiteColor">
        <nav className="navbar navbar-expand-lg navbar-dark p-0 aestheticColor1">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="./site-logo.png" width="100" alt="Med-D"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <a className="nav-link active fw-bold fs-6 text-light" aria-current="page" href="#">About
                                Us</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link active fw-bold fs-6 text-light" aria-current="page" href="#">Book
                                Appointment</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link active fw-bold fs-6 text-light" aria-current="page" href="#">Customer
                                Support</a>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <button type="button"
                            className="btn btn-dark btn-outline-info mx-2 fw-bold fs-6 rounded">Login</button>
                        <button type="button"
                            className="btn btn-dark btn-outline-info mx-2 fw-bold fs-6 rounded">SignUp</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
    <div className="container row my-4">
        <span className="my-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            Choose Location
        </span>
        <select onChange="print_city('state', this.selectedIndex);" id="sts" name="stt" className="form-control col"
            required></select>
        <select id="state" className="form-control col" required></select>
        <script language="javascript">print_state("sts");</script>
    </div>

    <div className="cards">
        <div className="card text-left">
            <div className="card-body row">
                <div className="col-2 text-center">
                    <img src="doctorProfile.svg" className="img-thumbnail border-info" alt="..."/>
                    <a className="text-info" href=""><b>View Profile</b></a>
                </div>
                <div className="col-8">
                    <h5 className="card-title text-info">Dr. P Harihara Murthy</h5>
                    <span className="doc-speciality text-secondary">Shit Specialist</span>
                    <span> | </span>
                    <span className="doc-experience text-secondary">31 Years of Experience</span>
                    
                    <p className="doc-location"><b>Koramangala 5 Block, Bangalore</b></p>
                    <p className="doc-location text-secondary">₹500 Consultation Fee at Clinic</p>
                    <button className="btn btn-info btn-outline-light" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Book Appointment
                    </button>
                </div>

            </div>
            
            <div className="collapse" id="collapseExample">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active" id="day-1-tab" data-toggle="tab" href="#day-1" role="tab" aria-controls="day-1" aria-selected="true">day-1</a>
                  <a className="nav-item nav-link" id="day-2-tab" data-toggle="tab" href="#day-2" role="tab" aria-controls="day-2" aria-selected="false">day-2</a>
                  <a className="nav-item nav-link" id="day-3-tab" data-toggle="tab" href="#day-3" role="tab" aria-controls="day-3" aria-selected="false">day-3</a>
                  <a className="nav-item nav-link" id="day-4-tab" data-toggle="tab" href="#day-4" role="tab" aria-controls="day-4" aria-selected="false">day-4</a>
                  <a className="nav-item nav-link" id="day-5-tab" data-toggle="tab" href="#day-5" role="tab" aria-controls="day-5" aria-selected="false">day-5</a>
                  <a className="nav-item nav-link" id="day-6-tab" data-toggle="tab" href="#day-6" role="tab" aria-controls="day-6" aria-selected="false">day-6</a>
                  <a className="nav-item nav-link" id="day-7-tab" data-toggle="tab" href="#day-7" role="tab" aria-controls="day-7" aria-selected="false">day-7</a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="day-1" role="tabpanel" aria-labelledby="day-1-tab">Its DAY1</div>
                <div className="tab-pane fade" id="day-2" role="tabpanel" aria-labelledby="day-2-tab">Its DAY2</div>
                <div className="tab-pane fade" id="day-3" role="tabpanel" aria-labelledby="day-3-tab">Its DAY3</div>
                <div className="tab-pane fade" id="day-4" role="tabpanel" aria-labelledby="day-4-tab">Its DAY4</div>
                <div className="tab-pane fade" id="day-5" role="tabpanel" aria-labelledby="day-5-tab">Its DAY5</div>
                <div className="tab-pane fade" id="day-6" role="tabpanel" aria-labelledby="day-6-tab">Its DAY6</div>
                <div className="tab-pane fade" id="day-7" role="tabpanel" aria-labelledby="day-7-tab">Its DAY7</div>
              </div>
            </div>
            <div className="card-footer text-muted">
                <button className="btn btn-success btn-sm me-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                        <path
                            d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                    </svg>
                    95%
                </button>
                <a className="text-black" href="">XXX Paitent Stories</a>
            </div>
        </div>
    </div>


    <div className="py-4 pb-5 mt-0">
        <div className="container">
            <div className="row">
                <div className="col-2 ps-5">
                    <h4><b>Med-D</b></h4>
                    <span>About Us</span>
                    <span>Careers</span>
                    <span>Press</span>
                    <span>Contact Us</span>
                </div>
                <div className="col-2">
                    <h4><b>For Patients</b></h4>
                    <span>Login</span>
                    <span>Sign Up</span>
                    <h4><b>For Doctors</b></h4>
                    <span>Login</span>
                    <span>Sign Up</span>
                </div>
                <div className="col-2 ps-5">
                    <h4><b>More</b></h4>
                    <span>Legal</span>
                    <span>Privacy Policy</span>
                    <span>Terms & Conditions</span>
                </div>
                <div className="col-3 ps-5">
                    <h4><b>Customer Support</b></h4>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
                        </svg>
                        support@medd.com
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M14.89 23.654c-7.367 3.367-18.802-18.86-11.601-22.615l2.107-1.039 3.492 6.817-2.082 1.026c-2.189 1.174 2.37 10.08 4.609 8.994.091-.041 2.057-1.007 2.064-1.011l3.521 6.795c-.008.004-1.989.978-2.11 1.033zm-1.538-13.409l2.917.87c.223-.747.16-1.579-.24-2.317-.399-.739-1.062-1.247-1.808-1.469l-.869 2.916zm1.804-6.058c1.551.462 2.926 1.516 3.756 3.051.831 1.536.96 3.263.498 4.813l-1.795-.535c.325-1.091.233-2.306-.352-3.387-.583-1.081-1.551-1.822-2.643-2.146l.536-1.796zm.95-3.187c2.365.705 4.463 2.312 5.729 4.656 1.269 2.343 1.466 4.978.761 7.344l-1.84-.548c.564-1.895.406-4.006-.608-5.882-1.016-1.877-2.696-3.165-4.591-3.729l.549-1.841z" />
                        </svg>
                        +91 XXXXXXXXXX</span>
                </div>
                <div className="col-3 ps-5">
                    <h4><b>Socials</b></h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <div className="section d-flex justify-content-center flex-column align-items-center pt-5 bg-dark">
        <span className="text-white">© Med D Technologies Private Limited</span>
        <img src="./site-logo.png" className="w-25 text-center" alt="Med-D"/>
    </div>
    </>
  );
}

class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />
        <link rel="stylesheet" href="./css/bootstrap/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">

   
        <div class="sidebar-content">
        <div class="wrapper">

            <!-- sidebar start -->
            <aside id="sidebar" class="position-fixed mr-5">
                <div class="d-flex">

                    <!-- toggle button -->
                    <button class="toggle-btn" type="button">
                        <i class="lni lni-grid-alt"></i>
                    </button>

                    <div class="sidebar-logo">
                        <a class="title" href="#">STAFF PANEL</a>
                    </div>
                </div>

                <!-- <inside toggle -->
                <!-- Profile -->
                <ul class="sidebar-nav">



                    <!-- CUMULATIVE -->
                    <li class="sidebar-item">
                        <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                            data-bs-target="#sem" aria-expanded="false" aria-controls="sem">
                            <i class="bi bi-mortarboard" style="font-size: 1.15rem;
        font-weight: 600px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-collection-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1" />
                                </svg></i>
                            <span>CUMULATIVE</span>
                        </a>
                        <ul id="sem" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                            <li class="sidebar-item">
                                <a href="#" class="sidebar-link disabled ">SEMESTER 3</a>
                            </li>
                            <li class="sidebar-item">
                                <a href="activities.html" class="sidebar-link">SEMESTER 4</a>
                            </li>
                            <li class="sidebar-item">
                                <a href="#" class="sidebar-link disabled ">SEMESTER 5</a>
                            </li>
                            <li class="sidebar-item">
                                <a href="#" class="sidebar-link disabled ">SEMESTER 6</a>
                            </li>
                        </ul>
                    </li>



                    <!-- Submission -->
                    <li class="sidebar-item">
                        <a href="submission.html" class="sidebar-link">
                            <i class="" style="font-size: 1.15rem; font-weight: 600px;"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-ui-checks-grid" viewBox="0 0 16 16">
                                    <path
                                        d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0z" />
                                </svg></i>
                            <span>Submission</span>
                        </a>
                    </li>

                    <!-- Reference -->
                    <!-- <li class="sidebar-item">
                        <a href="reference.html" class="sidebar-link">
                            <i class="" style="font-size: 1.15rem; font-weight: 600px;"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-clipboard-data" viewBox="0 0 16 16">
                                    <path
                                        d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
                                    <path
                                        d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                                    <path
                                        d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                                </svg></i>
                            <span>Reference</span>
                        </a>
                    </li> -->

                    <!-- Check Status -->
                    <!-- <li class="sidebar-item">
                        <a href="#" class="sidebar-link">
                            <i class="bi bi-clipboard2-check" style="font-size: 1.15rem;
                            font-weight: 600px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" class="bi bi-clipboard2-check" viewBox="0 0 16 16">
                                    <path
                                        d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                                    <path
                                        d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                                </svg></i>
                            <span>Check Status</span>
                        </a>
                    </li> -->


                </ul>

                <div class="sidebar-footer">
                </div>
            </aside>
        </div>
        <!-- side bar end -->

        <!--content area-->

        <!--header-->
        <div class="container-fluid" style="background-color: rgb(254, 254, 254);">
            <div class="row">
                <div class="col text-center mt-2 custom-margin-left">
                    <h1 class="display-6 text-center ">SAP CALCULATOR</h1>
                </div>


                <div class="col-2 mt-2">
                    <div class="dropdown d-flex justify-content-end">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img src="image/entrepreneurship.png" alt="Profile Image" class="rounded-circle"
                                    style="width: 30px; height: 30px; margin-right: 5px;">
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                                <li><a class="dropdown-item" href="#">Log Out</a></li>
                                <!-- <li><a class="dropdown-item" href="#">Something else here</a></li> -->
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </div>

        <script src="./js/bootstrap/bootstrap.bundle.min.js"></script>
        <script src="script.js"></script>
        <script src="./HeaderFooterManager.js"></script>
    `;

        // Make sure the DOM is fully loaded before running the script
        document.addEventListener("DOMContentLoaded", function () {
            // Add event listener for hamburger button
            const hamBurger = document.querySelector(".toggle-btn");

            // Check if the hamburger button is found
            if (hamBurger) {
                hamBurger.addEventListener("click", function () {
                    document.querySelector("#sidebar").classList.toggle("expand");
                });
            } else {
                console.error("Hamburger button not found");
            }
        });
    }
}
customElements.define('special-header', SpecialHeader);

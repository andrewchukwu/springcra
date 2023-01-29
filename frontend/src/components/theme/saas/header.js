import React from 'react';

function header() {
    return <div>
        <header class="header">
            <div class="navbar-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <nav class="navbar navbar-expand-lg">
                                <a class="navbar-brand" href="index.html">
                                    <img src="/themes/saas/assets/img/logo/logo.svg" alt="Logo" />
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="toggler-icon"></span>
                                    <span class="toggler-icon"></span>
                                    <span class="toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                    <ul id="nav" class="navbar-nav ms-auto">
                                        <li class="nav-item">
                                            <a class="page-scroll active" href="#home">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="page-scroll" href="#features">Features</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="page-scroll" href="#about">About</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="page-scroll" href="#why">Why</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0)">Pricing</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="javascript:void(0)">Clients</a>
                                        </li>
                                        <li class="nav-item">
                                        <a href="javascript:void(0)" class="bold">Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
}
export default header;
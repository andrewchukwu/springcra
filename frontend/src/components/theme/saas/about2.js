import React from 'react';

function about2() {
    return <div>
        <section id="about" class="about-section pt-150">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-6">
                        <div class="about-content">
                            <div class="section-title mb-30">
                                <h2 class="mb-25 wow fadeInUp" data-wow-delay=".2s">
                                    Easy to Use with Tons of Awesome Features
                                </h2>
                                <p class="wow fadeInUp" data-wow-delay=".4s">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua.
                                </p>
                            </div>
                            <ul>
                                <li>Quick Access</li>
                                <li>Easily to Manage</li>
                                <li>24/7 Support</li>
                            </ul>
                            <a
                                href="javascript:void(0)"
                                class="main-btn btn-hover border-btn wow fadeInUp"
                                data-wow-delay=".6s"
                            >Learn More</a
                            >
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 order-first order-lg-last">
                        <div class="about-img-2">
                            <img src="assets/img/about/about-2.png" alt="" class="w-100" />
                            <img
                                src="assets/img/about/about-right-shape.svg"
                                alt=""
                                class="shape shape-1"
                            />
                            <img
                                src="assets/img/about/right-dots.svg"
                                alt=""
                                class="shape shape-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}
export default about2;
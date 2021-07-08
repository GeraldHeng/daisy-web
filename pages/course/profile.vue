<template>
    <div class="main-container">

        <HeaderStyleTwo />

        <OffCanvasMobileMenu />

        <div class="page-title-section section-padding-top-0">
            <div class="page-breadcrumb position-static">
                <div class="container">
                    <ul class="breadcrumb">
                        <li>
                            <n-link to="/">Home</n-link>
                        </li>
                        <li class="current">Profile</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Profile Section Start  -->
        <div class="profile-section section-padding-bottom">
            <div class="container">
                <div class="row align-items-lg-center">
                    <div class="col-xl-5 col-md-6">
                        <div class="profile-image">
                            <img src="/images/profile/profile.jpeg" alt="profile">
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 offset-xl-1">
                        <div class="profile-info">
                            <h3 class="profile-name">Maggie Strickland</h3>
                            <div class="author-career">/Advanced Educator</div>
                            <p class="author-bio">Maggie is a brilliant educator, whose life was spent for computer science and love of nature. Being a female, she encountered a lot of obstacles and was forbidden to work in this field by her family. With a true spirit and talented gift, she was able to succeed and set an example for others.</p>

                            <h5 class="profile-contact-title">Contact</h5>
                            <span class="contact-info-text">
                                <span class="phone">
                                    Phone number: <strong>(+88) - 1990 - 8668</strong>
                                </span>
                                <br>
                                <span class="email">
                                    Email: <strong>maggiestrickland.instructor@gmail.com</strong>
                                </span>
                            </span>
                            <ul class="author-social-networks">
                                <li class="item">
                                    <a href="https://twitter.com/" target="_blank" class="social-link"> 
                                        <i class="fab fa-twitter social-link-icon"></i> 
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="https://www.facebook.com/" target="_blank" class="social-link">
                                        <i class="fab fa-facebook-f social-link-icon"></i> 
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="https://www.instagram.com/" target="_blank" class="social-link"> 
                                        <i class="fab fa-instagram social-link-icon"></i> 
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="https://www.pinterest.com/" target="_blank" class="social-link"> 
                                        <i class="fab fa-pinterest social-link-icon"></i> 
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="https://www.youtube.com/" target="_blank" class="social-link"> 
                                        <i class="fab fa-youtube social-link-icon"></i> 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Profile Section End  -->

        <!-- Learn Press Profile Section Start -->
        <div class="learn-press-profile-section section section-padding-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="lp-profile-content learn-press-profile-nav">
                            <b-tabs pills card>
                                <b-tab title="Dashboard" active>
                                    <div class="learn-press-profile-dashboard">
                                        <div class="profile-progress-status">
                                            <div class="row">
                                                <div class="col-md-3 col-sm-6">
                                                    <div class="status-box success courses-completed">
                                                        <div class="status-number">01</div>
                                                        <h6 class="status-text">Courses Completed</h6>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-sm-6">
                                                    <div class="status-box warning courses-in-progress">
                                                        <div class="status-number">01</div>
                                                        <h6 class="status-text">Courses In Progress</h6>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-sm-6">
                                                    <div class="status-box info quizzes-completed">
                                                        <div class="status-number">02</div>
                                                        <h6 class="status-text">Quizzes Completed</h6>
                                                    </div>
                                                </div>
                                                <div class="col-md-3 col-sm-6">
                                                    <div class="status-box error courses-completed">
                                                        <div class="status-number">02</div>
                                                        <h6 class="status-text">Quizzes In Progress</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="profile-courses-progress">
                                            <h3 class="title">Courses progress</h3>
                                            <div class="maxcoach-progress style-01">

                                                <!-- Start Single Progress Charts -->
                                                <div class="progress-charts wow move-up">
                                                    <h6 class="title">Database & SQL for Computer Science</h6>
                                                    <div class="progress">
                                                        <div class="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"><span class="percent-label">33.3%</span></div>
                                                    </div>
                                                </div>
                                                <!-- End Single Progress Charts -->

                                                <!-- Start Single Progress Charts -->
                                                <div class="progress-charts mt-50 wow move-up">
                                                    <h6 class="title">Introduction to Javascript for Beginners</h6>
                                                    <div class="progress">
                                                        <div class="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span class="percent-label">100%</span></div>
                                                    </div>
                                                </div>
                                                <!-- End Single Progress Charts -->

                                                <!-- Start Single Progress Charts -->
                                                <div class="progress-charts mt-50 wow move-up">
                                                    <h6 class="title">Academic Listening and Note-taking</h6>
                                                    <div class="progress">
                                                        <div class="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".8s" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span class="percent-label">25%</span></div>
                                                    </div>
                                                </div>
                                                <!-- End Single Progress Charts -->
                                            </div>
                                        </div>
                                    </div>
                                </b-tab>

                                <b-tab title="Courses">
                                    <div class="profile-content-courses lp-tab-menu">
                                        <b-tabs pills card>
                                            <b-tab title="Owned" active>
                                                <div class="learn-press-subtab-content">
                                                    <!-- Courses Wrapper Start -->
                                                    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
                                                        <!-- Course Start -->
                                                        <div class="col max-mb-30" data-aos="fade-up">
                                                            <div class="course">
                                                                <div class="thumbnail">
                                                                    <n-link to="/course/course-details" class="image"><img src="/images/courses/370/course-1.jpg" alt="Course Image">
                                                                    </n-link>
                                                                </div>
                                                                <div class="info">
                                                                    <span class="price">$40<span>.00</span></span>
                                                                    <h3 class="title">
                                                                        <n-link to="/course/course-details">Learning to Write as a Professional Author</n-link>
                                                                    </h3>
                                                                    <ul class="meta">
                                                                        <li><i class="far fa-file-alt"></i>20 Lessons</li>
                                                                        <li><i class="far fa-user-alt"></i>51 Students</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Course End -->

                                                        <!-- Course Start -->
                                                        <div class="col max-mb-30" data-aos="fade-up">
                                                            <div class="course">
                                                                <div class="thumbnail">
                                                                    <span class="badge">Free</span>
                                                                    <n-link to="/course/course-details" class="image">
                                                                        <img src="/images/courses/370/course-2.jpg" alt="Course Image">
                                                                    </n-link>
                                                                </div>
                                                                <div class="info">
                                                                    <span class="price">$0<span>.00</span></span>
                                                                    <h3 class="title">
                                                                        <n-link to="/course/course-details">Customer-centric Info-Tech Strategies</n-link>
                                                                    </h3>
                                                                    <ul class="meta">
                                                                        <li><i class="far fa-file-alt"></i>23 Lessons</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Course End -->

                                                        <!-- Course Start -->
                                                        <div class="col max-mb-30" data-aos="fade-up">
                                                            <div class="course">
                                                                <div class="thumbnail">
                                                                    <n-link to="/course/course-details" class="image">
                                                                        <img src="/images/courses/370/course-3.jpg" alt="Course Image">
                                                                    </n-link>
                                                                </div>
                                                                <div class="info">
                                                                    <span class="price">$19<span>.00</span></span>
                                                                    <h3 class="title">
                                                                        <n-link to="/course/course-details">Open Programming Courses for Everyone: Python</n-link>
                                                                    </h3>
                                                                    <ul class="meta">
                                                                        <li><i class="far fa-file-alt"></i>16 Lessons</li>
                                                                        <li><i class="far fa-user-alt"></i>57 Students</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Course End -->
                                                    </div>
                                                    <!-- Courses Wrapper End -->
                                                </div>
                                            </b-tab>

                                            <b-tab title="Purchased">
                                                <div class="row">
                                                    <div class="col-12 scroll">
                                                        <table class="lp-list-table table">
                                                            <thead>
                                                                <tr>
                                                                    <th class="column-course">Course</th>
                                                                    <th class="column-date">Date</th>
                                                                    <th class="column-passing-grade">Passing Grade</th>
                                                                    <th class="column-status">Progress</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td class="column-course">
                                                                        <a href="JavaScript:Void(0);">Database & SQL for Computer Science </a>
                                                                    </td>
                                                                    <td class="column-date">Dec 23, 2019</td>
                                                                    <td class="column-passing-grade">80%</td>
                                                                    <td class="column-status">
                                                                        <span class="result-percent">33.3%</span>
                                                                        <span class="lp-label label-in-progress">In     Progress 
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="column-course">
                                                                        <a href="">Introduction to Javascript for Beginners</a>
                                                                    </td>
                                                                    <td class="column-date">Dec 19, 2019</td>
                                                                    <td class="column-passing-grade">80%</td>
                                                                    <td class="column-status">
                                                                        <span class="result-percent">100%</span>
                                                                        <span class="lp-label label-passed">Passed</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="column-course">
                                                                        <a href="JavaScript:Void(0);"> Academic Listening and Note-taking</a>
                                                                    </td>
                                                                    <td class="column-date">Dec 19, 2019</td>
                                                                    <td class="column-passing-grade">80%</td>
                                                                    <td class="column-status">
                                                                        <span class="result-percent">25%</span>
                                                                        <span class="lp-label label-failed">Failed</span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr class="list-table-nav">
                                                                    <td colspan="2" class="nav-text">Displaying 1 to 3 of 3 courses.</td>
                                                                    <td colspan="2" class="nav-pages"></td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                            </b-tab>
                                        </b-tabs>
                                    </div>  
                                </b-tab>

                                <b-tab title="Quizzes">
                                    <div class="profile-content-quizzes">
                                        <div class="learn-press-subtab-content">
                                            <div class="row">
                                                <div class="col-12 scroll">
                                                    <table class="lp-list-table table">
                                                        <thead>
                                                            <tr>
                                                                <th class="column-course">Course</th>
                                                                <th class="column-quiz">Quiz</th>
                                                                <th class="column-date">Date</th>
                                                                <th class="column-status">Progress</th>
                                                                <th class="column-time-interval">Interval</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="column-course">
                                                                    <a href="JavaScript:Void(0);">Academic Listening and Note-taking</a>
                                                                </td>
                                                                <td class="column-quiz column-quiz-1308">
                                                                    <a href="JavaScript:Void(0);">Quiz 01: Songs & Films</a>
                                                                </td>
                                                                <td class="column-date">Dec 23, 2019</td>
                                                                <td class="column-status">
                                                                    <span class="result-percent">0%</span>
                                                                    <span class="lp-label label-completed">Completed</span>
                                                                </td>
                                                                <td class="column-time-interval">88:23:42:59</td>

                                                            </tr>
                                                            <tr>
                                                                <td class="column-course">
                                                                    <a href="JavaScript:Void(0);">Introduction to Javascript for Beginners</a>
                                                                </td>
                                                                <td class="column-quiz column-quiz-1308">
                                                                    <a href="JavaScript:Void(0);">Mid-term test</a>
                                                                </td>
                                                                <td class="column-date">Dec 19, 2019</td>
                                                                <td class="column-status">
                                                                    <span class="result-percent">0%</span>
                                                                    <span class="lp-label label-in-progress">In Progress 
                                                                    </span>
                                                                </td>
                                                                <td class="column-time-interval">--:--</td>

                                                            </tr>
                                                            <tr>
                                                                <td class="column-course">
                                                                    <a href="JavaScript:Void(0);">Introduction to Javascript for Beginners</a>
                                                                </td>
                                                                <td class="column-quiz column-quiz-1308">
                                                                    <a href="JavaScript:Void(0);">Terminal test</a>
                                                                </td>
                                                                <td class="column-date">Dec 19, 2019</td>
                                                                <td class="column-status">
                                                                    <span class="result-percent">33.3%</span>
                                                                    <span class="lp-label label-completed">Completed</span>
                                                                </td>
                                                                <td class="column-time-interval">10:03</td>

                                                            </tr>
                                                            <tr>
                                                                <td class="column-course">
                                                                    <a href="JavaScript:Void(0);">Database & SQL for Computer Science </a>
                                                                </td>
                                                                <td class="column-quiz column-quiz-1308">
                                                                    <a href="JavaScript:Void(0);">SQL Test </a>
                                                                </td>
                                                                <td class="column-date">Dec 19, 2019</td>
                                                                <td class="column-status">
                                                                    <span class="result-percent">0%</span>
                                                                    <span class="lp-label label-in-progress">In Progress 
                                                                    </span>
                                                                </td>
                                                                <td class="column-time-interval">--:--</td>

                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr class="list-table-nav">
                                                                <td colspan="5" class="nav-text">Displaying 1 to 4 of 4 quizzes.</td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Learn Press Profile Section End -->

        <FooterStyleOne />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Profile'
            }
        },
    };
</script>



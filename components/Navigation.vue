<template>
    <nav class="site-main-menu">
        <ul>
            <li class="has-children position-static">
                <n-link to="/">
                    <span class="menu-text">Home</span>
                </n-link>
                <span class="menu-toggle"><i class="far fa-angle-down"></i></span>
                <ul class="mega-menu">
                    <li>
                        <ul>
                            <li>
                                <n-link to="/">
                                    <span class="menu-text">MaxCoach Education <span class="badge">Hot</span></span>
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/course-portal">
                                    <span class="menu-text">Course Portal</span>
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/distant-learning">
                                    <span class="menu-text">Distant Learning <span class="badge">Hot</span></span>
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/multimedia-pedagogy">
                                    <span class="menu-text">Multimedia Pedagogy</span>
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/modern-schooling">
                                    <span class="menu-text">Modern Schooling</span>
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/remote-training">
                                    <span class="menu-text">Remote Training</span>
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/business">
                                    <span class="menu-text">Business</span>
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/health-coaching">
                                    <span class="menu-text">Health Coaching</span>
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/gym-coaching">
                                    <span class="menu-text">Gym Coaching <span class="badge primary">New</span></span>
                                </n-link>
                            </li>
                            <li>
                                <n-link to="/kitchen-coach">
                                    <span class="menu-text">Kitchen Coach <span class="badge primary">New</span></span>
                                </n-link>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item-50">
                        <n-link to="/">
                            <img src="/images/others/mega-menu.jpg" alt="menu-image">
                        </n-link>
                    </li>
                </ul>
            </li>
            <li class="has-children">
                <n-link to="">
                    <span class="menu-text">Pages</span>
                </n-link>
                <span class="menu-toggle">
                    <i class="far fa-angle-down"></i>
                </span>
                <ul class="sub-menu">
                    <li>
                        <n-link to="/about-me">
                            <span class="menu-text">About Me</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/about-us-one">
                            <span class="menu-text">About Us 01</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/about-us-two">
                            <span class="menu-text">About Us 02</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/contact-me">
                            <span class="menu-text">Contact Me</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/contact-us">
                            <span class="menu-text">Contact Us</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/login-register">
                            <span class="menu-text">Login Register</span>
                        </n-link>
                    </li>
                </ul>
            </li>
            <li class="has-children">
                <n-link to="">
                    <span class="menu-text">Courses</span>
                </n-link>
                <span class="menu-toggle">
                    <i class="far fa-angle-down"></i>
                </span>
                <ul class="sub-menu">
                    <li>
                        <n-link to="/course/courses-grid-one">
                            <span class="menu-text">Courses Grid 01</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/course/courses-grid-two">
                            <span class="menu-text">Courses Grid 02</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/course/courses-grid-three">
                            <span class="menu-text">Courses Grid 03</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/course/course-details">
                            <span class="menu-text">Course Details</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/course/membership-levels">
                            <span class="menu-text">Membership Levels</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/course/become-a-teacher">
                            <span class="menu-text">Become a Teacher</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/course/profile">
                            <span class="menu-text">Profile</span>
                        </n-link>
                    </li>
                </ul>
            </li>
            <li class="has-children">
                <n-link to="">
                    <span class="menu-text">Event</span>
                </n-link>
                <span class="menu-toggle">
                    <i class="far fa-angle-down"></i>
                </span>
                <ul class="sub-menu">
                    <li>
                        <n-link to="/event/event">
                            <span class="menu-text">Events</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/event/event-details">
                            <span class="menu-text">Event Details</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/event/zoom-meetings">
                            <span class="menu-text">Zoom Meetings</span>
                        </n-link>
                    </li>
                </ul>
            </li>
            <li class="has-children">
                <n-link to="">
                    <span class="menu-text">Blogs</span>
                </n-link>
                <span class="menu-toggle">
                    <i class="far fa-angle-down"></i>
                </span>
                <ul class="sub-menu">
                    <li>
                        <n-link to="/blog/blog-grid">
                            <span class="menu-text">Blog Grid</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/blog/blog-classic">
                            <span class="menu-text">Blog Classic</span>
                        </n-link>
                    </li>
                    <li>
                        <n-link to="/blog/blog-details">
                            <span class="menu-text">Blog Details</span>
                        </n-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
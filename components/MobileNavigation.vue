<template>
    <div class="mobile-navigation">
        <nav class="offcanvas-navigation" id="offcanvas-navigation">
            <ul>
                <li class="menu-item-has-children">
                    <n-link to="/">Home</n-link>
                    <ul class="sub-menu">
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
                                        <span class="menu-text">Gym Coaching</span>
                                    </n-link>
                                </li>
                                <li>
                                    <n-link to="/kitchen-coach">
                                        <span class="menu-text">Kitchen Coach</span>
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

                <li class="menu-item-has-children">
                    <n-link to="/">Pages</n-link>
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

                <li class="menu-item-has-children">
                    <n-link to="/">Courses</n-link>
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

                <li class="menu-item-has-children">
                    <n-link to="/">Events</n-link>
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

                <li class="menu-item-has-children">
                    <n-link to="/">Blogs</n-link>
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
    </div>
</template>

<script>
    export default{
        name: 'MobileNavMenu',
        mounted() {
            const offCanvasNav = document.querySelector('#offcanvas-navigation');
            const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
            const anchorLinks = offCanvasNav.querySelectorAll('a');
        
            for (let i = 0; i < offCanvasNavSubMenu.length; i++){
                offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
            }
        
            const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
            const numMenuExpand = menuExpand.length;
        
            for (let i = 0; i < numMenuExpand; i++) {
                menuExpand[i].addEventListener("click", (e) => {sideMenuExpand(e)});
            }
        
            for (let i = 0; i < anchorLinks.length; i++) {
                anchorLinks[i].addEventListener("click", () => {closeMobileMenu()});
            }

            const sideMenuExpand = (e) => {
                e.currentTarget.parentElement.classList.toggle('active');
            }
            const closeMobileMenu = () => {
                const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
                offcanvasMobileMenu?.classList.remove('active');
            }
        }
    };
</script>

<style lang="scss">
    .offcanvas-navigation {
        ul {
            padding-left: 0;
            li {
                border-bottom: 1px solid rgba(255, 255, 255, 0.15);
                &.menu-item-has-children {
                    &.mega--title > {
                        a {
                            font-weight: 500;
                        }
                    }
                    .sub-menu {
                        height: 0;
                        opacity: 0;
                        transition: 0.3s;
                        visibility: hidden;
                    }
                    &.active > {
                        .sub-menu {
                            height: 100%;
                            opacity: 1;
                            visibility: visible;
                            padding-left: 0;
                        }
                    }
                }
                a {
                    color: $white;
                    font-size: 16px;
                    font-weight: 500;
                    padding: 10px 0;
                    display: block;
                    &:hover {
                        color: $primary;
                    }
                    .badge {
                        background-image: linear-gradient(45deg, #fe378c 0%, #fe5b34 100%);
                    }
                }
            }
        }

        ul {
            &.sub-menu {
                margin-left: 15px;
                transition: 0.4s;
                li {
                    list-style: none;
                    border: none;
                    a {
                        color: $white;
                        font-weight: 400;
                        &:hover {
                            color: $primary;
                        }
                    }
                    .sub-menu {
                        li {
                            a {
                                font-size: 13px;
                                padding: 5px 0;
                            }
                        }
                    }
                }
            }
            li {
                &.menu-item-has-children {
                    position: relative;
                    display: block;
                    a {
                        display: inline-block;
                    }

                    &.active > {
                        .menu-expand {
                            background-color: rgba($white, 0.2);
                            i {
                                &:before {
                                    transform: rotate(0);
                                }
                            }
                        }
                    }

                    .menu-expand {
                        top: 5px;
                        right: 0;
                        width: 35px;
                        height: 35px;
                        cursor: pointer;
                        line-height: 35px;
                        position: absolute;
                        text-align: center;
                        background-color: rgba($white, 0.1);
                        &:hover {
                            background-color: rgba($white, 0.2);
                        }

                        i {
                            display: block;
                            border-bottom: 1px solid $white;
                            position: relative;
                            width: 10px;
                            text-align: center;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            &:before {
                                width: 100%;
                                content: "";
                                border-bottom: 1px solid $white;
                                display: block;
                                position: absolute;
                                top: 0;
                                transform: rotate(90deg);
                                transition: 0.4s;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div id="main-wrapper">
        <div id="nav-bar">
            <div id="branding">
                Gavino Matterig
            </div>
            <div id="responsive-btn" class="d-md-block d-lg-none mr-5">
                <font-awesome-icon :icon="['fas', 'bars']" />
            </div>
            <ul class="d-none d-md-none d-lg-block">
                <a href="#heading-wrap" v-smooth-scroll><li>Home</li></a>
                <a href="#education" v-smooth-scroll="{offset: -100}"><li>My Education</li></a>
                <a href="#work-summary-and-objectives" v-smooth-scroll="{offset: -100}"><li>Work Summary</li></a>
                <a href="#work-summary-and-objectives" v-smooth-scroll="{offset: -100}"><li>Experiences</li></a>
                <a href="#skills" v-smooth-scroll="{offset: -100}"><li>Skills</li></a>
                <a href="#my-works" v-smooth-scroll="{offset: -100}"><li>Works</li></a>
                <a href="#contact" v-smooth-scroll="{offset: -100}"><li>Contact</li></a>
            </ul>
        </div>
        <div id="heading-wrap" class="d-flex align-items-center justify-content-center">
            <div id="greetings">
                <h1 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Hi, I'm <span>Gavino Matterig</span></h1>
                <h4 data-aos="fade-right" data-aos-delay="500" data-aos-duration="1100">I'm a freelance web developer.</h4>
                <a href="https://github.com/hypergavs" class="btn text-white" target="_blank">
                    <h1><font-awesome-icon :icon="['fab', 'github']" /></h1>
                </a>
            </div>
            <div id="more_about_me">
                <p>Learn more about me.</p>
                <div id="arrow">
                    <a href="#education" class="btn text-white" v-smooth-scroll="{offset: -100}">
                        <h1>
                            <font-awesome-icon :icon="['fas', 'angle-double-down']" />
                        </h1>
                    </a>
                </div>
            </div>
        </div>
        <div id="about-me">

            <div id="education" class="container pt-0 p-5">
                <div class="row mb-4">
                    <div class="col-md-12">
                        <h2 class="text-center" data-aos="zoom-in">Education</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <img data-aos="fade-down" src="images/education.svg" class="img img-fluid d-none d-md-block" alt="" srcset="">
                        <img data-aos="fade-down" src="images/education-responsive.svg" class="img img-fluid d-md-none d-sm-block" alt="" srcset="">
                    </div>
                </div>
                
            </div>


            <div id="work-summary-and-objectives" class="container p-5 mb-5">
                <div class="row mb-4">
                    <div class="col-md-12">
                        <h3 class="text-center" data-aos="zoom-in">Work Summary & Experiences</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="500">
                        <p class="text-center">
                            I worked as an IT Administrator for a BPO company with responsibilities handling networking, Linux based VPS, VOIP setup and security, websites and computer hardware & software servicing. Subsequently, I worked as a freelance web developer to enhance and broaden my skills in web development and worked with several projects for student projects, Websites, and business systems for Pharmacy and Lending companies with proficiency like Wordpress and Web Frameworks.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <img src="images/work-experience.svg" class="img img-fluid" alt="" srcset="" data-aos="fade-left" data-aos-delay="700">
                    </div>
                </div>
                
            </div>

            
            
        </div>

        <div id="skills" class="container-fluid p-5 mt-5">
            <h2 class="text-center mb-5" data-aos="zoom-in">Technical Skills</h2>
            <div class="row justify-content-center">
                <div class="col-md-12 d-flex">

                    <div class="skill d-flex flex-column justify-content-center" data-aos="fade-zoom-in" data-aos-delay="100">
                        <div class="icon align-self-center">
                            <img src="images/skills/photoshop.svg" class="img" alt="" srcset="">
                        </div>
                        <div class="rate-wrap d-block">
                            <div class="titile text-center">Photoshop</div>
                        </div>
                    </div>

                    <div class="skill d-flex flex-column justify-content-center" data-aos="fade-zoom-in" data-aos-delay="200">
                        <div class="icon align-self-center">
                            <img src="images/skills/html5.svg" class="img" alt="" srcset="">
                        </div>
                        <div class="rate-wrap d-block">
                            <div class="titile text-center">HTML</div>
                        </div>
                    </div>
                    
                    <div class="skill d-flex flex-column justify-content-center" data-aos="fade-zoom-in" data-aos-delay="400">
                        <div class="icon align-self-center">
                            <img src="images/skills/css-3.svg" class="img" alt="" srcset="">
                        </div>
                        <div class="rate-wrap d-block">
                            <div class="titile text-center">CSS</div>
                        </div>
                    </div>

                    <div class="skill d-flex flex-column justify-content-center" data-aos="fade-zoom-in" data-aos-delay="500">
                        <div class="icon align-self-center">
                            <img src="images/skills/php.svg" class="img" alt="" srcset="">
                        </div>
                        <div class="rate-wrap d-block">
                            <div class="titile text-center">PHP</div>
                        </div>
                    </div>
                    
                    <div class="skill d-flex flex-column justify-content-center" data-aos="fade-zoom-in" data-aos-delay="600">
                        <div class="icon align-self-center">
                            <img src="images/skills/mysql.svg" class="img" alt="" srcset="">
                        </div>
                        <div class="rate-wrap d-block">
                            <div class="titile text-center">MySQL</div>
                        </div>
                    </div>

                    <div class="skill d-flex flex-column justify-content-center" data-aos="fade-zoom-in" data-aos-delay="700">
                        <div class="icon align-self-center">
                            <img src="images/skills/javascript.svg" class="img" alt="" srcset="">
                        </div>
                        <div class="rate-wrap d-block">
                            <div class="titile text-center">Javascript</div>
                        </div>
                    </div>

                    <div class="skill d-flex flex-column justify-content-center" data-aos="fade-zoom-in" data-aos-delay="800">
                        <div class="icon align-self-center">
                            <img src="images/skills/jquery.svg" class="img" alt="" srcset="">
                        </div>
                        <div class="rate-wrap d-block">
                            <div class="titile text-center">JQuery</div>
                        </div>
                    </div>

                    
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 d-flex">
                    <div class="skill d-flex flex-column justify-content-center" data-aos="fade-zoom-in" data-aos-delay="900">
                        <div class="icon align-self-center">
                            <img src="images/skills/wordpress.svg" class="img" alt="" srcset="">
                        </div>
                        <div class="rate-wrap d-block">
                            <div class="titile text-center">Wordpress</div>
                        </div>
                    </div>

                    <div class="skill d-flex flex-column justify-content-center" data-aos="fade-zoom-in" data-aos-delay="1000">
                        <div class="icon align-self-center">
                            <img src="images/skills/bootstrap.svg" class="img" alt="" srcset="">
                        </div>
                        <div class="rate-wrap d-block">
                            <div class="titile text-center">Bootstrap</div>
                        </div>
                    </div>

                    <div class="skill d-flex flex-column justify-content-center" data-aos="fade-zoom-in" data-aos-delay="1100">
                        <div class="icon align-self-center">
                            <img src="images/skills/illustrator.svg" class="img" alt="" srcset="">
                        </div>
                        <div class="rate-wrap d-block">
                            <div class="titile text-center">Illustrator</div>
                        </div>
                    </div>

                    <div class="skill d-flex flex-column justify-content-center" data-aos="fade-zoom-in" data-aos-delay="1200">
                        <div class="icon align-self-center">
                            <img src="images/skills/laravel.svg" class="img img-fluid" alt="" srcset="">
                        </div>
                        <div class="rate-wrap d-block">
                            <div class="titile text-center">Laravel</div>
                        </div>
                    </div>

                    <div class="skill d-flex flex-column justify-content-center" data-aos="fade-zoom-in" data-aos-delay="1300">
                        <div class="icon align-self-center">
                            <img src="images/skills/vuejs.svg" class="img" alt="" srcset="">
                        </div>
                        <div class="rate-wrap d-block">
                            <div class="titile text-center">VueJS</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-5">
                <div class="col-md-8 text-center">
                    I just really can't rate my self, so I just hope whoever I will be working with will do it for me :)
                </div>
            </div>
        </div>

        <div id="my-works">
            <div class="container p-5">
                <h2 class="text-center mb-5" data-aos="zoom-in">My Works</h2>

                <div class="row d-flex flex-wrap">
                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <h5 class="text-center mb-4">Seven Speed Lending Management System</h5>
                        <img src="images/projects/sevenspeed.JPG" class="img img-fluid" alt="" srcset="">
                        <div class="links d-flex justify-content-center align-items-center my-3">
                            <a href="#" alt="Preview is only " aria-disabled="true" class="mr-3 btn disabled"><font-awesome-icon icon="eye"></font-awesome-icon> Live Preview</a>
                            <a href="#" aria-disabled="true" class="btn disabled"><font-awesome-icon icon="code"></font-awesome-icon> Source Code</a>
                        </div>
                         <p class="text-center">
                             This lending management system is a standalone system. This manages clients records, collection and sales of the business.
                         </p>
                    </div>
                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="400">
                        <h5 class="text-center mb-4">FastCash3k.com<br><br></h5>
                        <img src="images/projects/fastcash3k.JPG" class="img img-fluid" alt="" srcset="">
                        <div class="links d-flex justify-content-center align-items-center my-3">
                            <a href="https://fastcash3k.com/" alt="Preview is only " aria-disabled="true" class="mr-3"><font-awesome-icon icon="eye"></font-awesome-icon> Live Preview</a>
                            <a href="#" aria-disabled="true" class="btn disabled"><font-awesome-icon icon="code"></font-awesome-icon> Source Code</a>
                        </div>
                        <p class="text-center">This platform is a lending system that caters cash loans and crypto currency loans.</p>
                    </div>
                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="600">
                        <h5 class="text-center mb-4">Pharmacy Inventory and Point of Sale</h5>
                        <img src="images/projects/pharmacy.JPG" class="img img-fluid" alt="" srcset="">
                        <div class="links d-flex justify-content-center align-items-center my-3">
                            <a href="#" alt="Preview is only " aria-disabled="true" class="mr-3 btn disabled"><font-awesome-icon icon="eye"></font-awesome-icon> Live Preview</a>
                            <a href="#" aria-disabled="true" class="btn disabled"><font-awesome-icon icon="code"></font-awesome-icon> Source Code</a>
                        </div>
                        <p class="text-center">This system is also a standalone system that manages inventory, sales and reports of the business.</p>
                    </div>
                </div>
            </div>
            
        </div>

        <div id="contact">
            <div class="container p-5">
                
                <div class="row bg-white p-5 contact-info flex-column d-flex align-items-center justify-content-center">
                    <h1 class="text-center text-dark" data-aos="zoom-in">Contact</h1>
                    <div class="bg-white d-block my-3 col-md-7">
                        <font-awesome-icon icon="envelope"></font-awesome-icon> Email: <a href="mailto:hypergavs@gmail.com">hypergavs@gmail.com</a>
                    </div>
                    <div class="bg-white d-block my-3 col-md-7">
                        <font-awesome-icon :icon="['fab','facebook']"></font-awesome-icon> Facebook: <a href="https://facebook.com/hypergavs" target="_blank">facebook.com/HyperGavs</a>
                    </div>
                    <div class="bg-white d-block my-3 col-md-7">
                        <font-awesome-icon :icon="['fab','linkedin']"></font-awesome-icon> Linkedin: <a href="https://linkedin.com/in/gavino-matterig-1a389b184/" target="_blank">linkedin.com/in/gavino-matterig-1a389b184/</a>
                    </div>
                    <div class="bg-white d-block my-3 col-md-7">
                        <font-awesome-icon :icon="['fas','mobile']"></font-awesome-icon> Mobile: +63 975 2609 732
                    </div>
                </div>
            </div>
        </div>

        <div id="footer">
            <div class="container text-center">
                <div class="d-flex align-items-center justify-content-center">
                     © Copyright Gavino Matterig 2019 - 2020
                </div>
            </div>
        </div>

        


    </div>
</template>
<script>
export default {
    
}
</script>
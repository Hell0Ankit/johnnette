import Layout from "../Components/Layout";
import PageTopBarImage from "../Components/common/PageTopBarImage";
import SectionHeading from "../Components/common/SectionHeading";
import top_bar from "../assets/img/cookies/cookies-policy.webp";

const Cookies = () => {
    return (
        <Layout title="Cookies Policy | Johnnette Technologies">
            <section className="section-custom">
                <PageTopBarImage title="Cookies Policy" bgImage={top_bar} />
            </section>

            <section className="section-custom mb-11">
                <SectionHeading title="Cookies Policy" />
                <div className="body-container space-y-4 text-center md:text-left p-4">
                    <h2 className=" secondary-heading leading-tight">
                       Cookie Policy for Johnnette Technologies Private Limited
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed ">
                        At Johnnette Technologies, accessible from 
                        <a href="http://www.johnnette.com" target="_blank" className="text-[var(--brand-color)] hover:underline" rel="noopener noreferrer"> http://www.johnnette.com
                        </a>, one of our main priorities is the
                        privacy of our visitors. This Privacy Policy document
                        contains types of information that is collected and
                        recorded by Johnnette Technologies and how we use it. If
                        you have additional questions or require more
                        information about our Privacy Policy, do not hesitate to
                        contact us. This Privacy Policy applies only to our
                        online activities and is valid for visitors to our
                        website with regards to the information that they shared
                        and/or collect in Johnnette Technologies. This policy is
                        not applicable to any information collected offline or
                        via channels other than this website.
                    </p>
                    <h2 className=" secondary-heading leading-tight"> What Are Cookies ?</h2>
                    <p className="text-gray-400 text-lg leading-relaxed ">As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the site’s functionality.</p>
                <h2 className=" secondary-heading leading-tight"> How We Use Cookies</h2>
                <p className="text-gray-400 text-lg leading-relaxed ">
                  You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
                </p>
                <h2 className=" secondary-heading leading-tight"> The Cookies We Set</h2>
                <p className="text-gray-400 text-[25px] leading-relaxed"> Account related cookies :-</p>
                <p className="text-gray-400 text-lg leading-relaxed ">
                  If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.
                </p>
                <p className="text-gray-400 text-[25px] leading-relaxed"> Login related cookies :-</p>
                <p className="text-gray-400 text-lg leading-relaxed ">
                  We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
                </p>
                <p className="text-gray-400 text-[25px] leading-relaxed"> Forms related cookies :-</p>
                <p className="text-gray-400 text-lg leading-relaxed ">
                  When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.
                </p>

                <p className="text-gray-400 text-[25px] leading-relaxed"> Site preferences cookies :-</p>
                <p className="text-gray-400 text-lg leading-relaxed ">
                  In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
                </p>

                <p className=" secondary-heading leading-tight">Third Party Cookies</p>
                <p className="text-gray-400 text-lg leading-relaxed ">
                  In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
                </p>
                <ul className="text-gray-400 text-lg leading-relaxed  list-disc list-inside space-y-2 ">
                    <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</li>
                    <li>As we sell products it's important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price.</li>
                    <li>For more information on Google Analytics cookies, see the official Google Analytics page.</li>
                  </ul>
                <p className=" secondary-heading leading-tight">More Information</p>
                <p className="text-gray-400 text-lg leading-relaxed ">
                  Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site
                </p>

                </div>
            </section>
        </Layout>
    );
};

export default Cookies;
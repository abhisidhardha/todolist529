function Home(){
    return(
        <div className="text-white" style={{background:'linear-gradient(90deg, rgba(50,50,199,1) 0%, rgba(0,161,212,1) 52%, rgba(0,212,255,1) 67%)'}}>
                    <h1 className="text-center display-2">Welcome to Our Page</h1>
                <div className="row" style={{margin:'0px'}}>
                    <div className="col-lg-6 col-sm">
                        <p className="px-5 pt-5" style={{fontSize:'22px'}}>Welcome to our platform dedicated to mastering modern web technologies such as <b className="text-danger">React, Angular, and Vue.js!</b> Whether you're a seasoned developer looking to enhance your skills or a newcomer eager to dive into the world of frontend frameworks, you've come to the right place.
                        Our comprehensive resources, tutorials, and hands-on projects are carefully crafted to guide you through the intricacies of these powerful frameworks. From building interactive user interfaces to managing state and data flow, we cover it all.</p>
                        <p className="px-5" style={{fontSize:'22px'}}>
                        Join our community of passionate learners and embark on an enriching journey towards becoming a proficient web developer. Let's harness the power of React, Angular, and Vue.js together and unlock the endless possibilities of modern web development.
                        </p>
                        <p className="px-5 pt-3" style={{fontSize:'22px'}}>Start your learning adventure today and unleash your potential!
                        </p>
                    </div>
                        <div className="col-lg-6 col-sm">
                        <img className="rounded img-fluid p-5" src="https://w0.peakpx.com/wallpaper/492/652/HD-wallpaper-lines-of-html-codes.jpg"/>
                    </div>
                </div>
        </div>
    )
}
export default Home
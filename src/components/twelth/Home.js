function Home(){
    return(
        <div className="text-white" style={{background:'linear-gradient(90deg, rgba(50,50,199,1) 0%, rgba(0,161,212,1) 52%, rgba(0,212,255,1) 67%)'}}>
                    <h1 className="text-center display-2">Welcome to Our Page</h1>
                <div className="row" style={{margin:'0px'}}>
                    <div className="col-lg-6 col-sm">
                        <p className="px-5 pt-5" style={{fontSize:'22px'}}>The Student Management System (SMS) is a comprehensive, user-friendly software solution designed to streamline the administrative processes of educational institutions. By integrating key functionalities such as student enrollment, attendance tracking, grade management, and communication tools, SMS enhances efficiency and fosters effective management of student data. This robust system not only simplifies the workload for educators and administrative staff but also improves the overall educational experience for students and parents. With real-time access to critical information, users can make informed decisions, ensuring academic success and operational excellence. The Student Management System is an indispensable tool for modern educational environments, driving productivity and fostering a collaborative learning community.
</p>
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
import { Link } from "react-router-dom"

const About=()=>{
    return (
        <div className="aboutPage bg-slate-200 text-lg p-4 w-full h-screen">
            <div className=" hover:text-sky-700">
            <Link to={"/"}>Go Back to Home Page</Link>
            </div>
            
            <h1>This the About Page...</h1>
        </div>
    )
}

export default About;
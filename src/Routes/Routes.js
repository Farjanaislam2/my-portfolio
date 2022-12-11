import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blogs from "../components/Blog/Blogs";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Resume from "../components/Resume/Resume";
import Main from "../Layout/Main";
import Projects from './../components/Projects/Projects';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/resume',
                element:<Resume></Resume>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
        ]
    }
])

export default router;
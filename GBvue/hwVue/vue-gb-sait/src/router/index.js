import MainPage from "@/pages/MainPage.vue"
import BlogPage from "@/pages/BlogPage.vue"
import ProjectPage from "@/pages/ProjectPage.vue"
import ProjectDetails from "@/components/ProjectDetails.vue"
import ErrorPage from "@/components/ErrorPage.vue"
import BlogDetails from "@/components/BlogDetails.vue"

const routes = [
    {
        path: '/main',
        component: MainPage,
    },
    {
        path: '/blog',
        component: BlogPage,
    },
    {
        path: '/project',
        component: ProjectPage,
    },
    {
        path: '/project/:page',
        component: ProjectPage,
    },
    {
        path: '/temp',
        component: ProjectDetails,
    },
    {
        path: '/temp2',
        component: BlogDetails,
    },
    {
        path: '/*',
        component: ErrorPage,
    },
    

]

export default routes
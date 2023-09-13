import MainPage from "@/pages/MainPage.vue"
import AboutPage from "@/pages/AboutPage.vue"
import ContactsPage from "@/pages/ContactsPage.vue"
import SomePage404 from "@/pages/SomePage404.vue"
import CatalogPage from "@/pages/CatalogPage.vue"

const routes = [
    {
        path: '/main',
        component: MainPage,
    },
    {
        path: '/about',
        component: AboutPage,
    },
    {
        path: '/contacts',
        component: ContactsPage,
    },
    {
        path: '/catalog',
        component: CatalogPage,
    },
    {
        path: '/catalog/:page',
        component: CatalogPage,
    },
    {
        path: '/*',
        component: SomePage404,
    },
    
]

export default routes
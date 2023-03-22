import sampel_img_1 from '../assests/images/projects/pay-api-page.png'
import sampel_img_2 from '../assests/images/projects/e-learning-page.png'
import sampel_img_3 from '../assests/images/projects/todo-app-page.png'
import sampel_img_4 from '../assests/images/projects/url-shortner-page.png'
import sampel_img_5 from '../assests/images/projects/product-feedback-page.png'
import sampel_img_6 from '../assests/images/projects/chuck-noris-jokes-2.png'
import sampel_img_7 from '../assests/images/projects/corniehealth-page.png'
import sampel_img_8 from '../assests/images/projects/ighopay-page.png'

const projects = [
    {
        title:'Pay-API',
        image:sampel_img_1,
        stacks:['html', 'css', 'react', 'formik'],
        type: 'react',
        url: "https://pay-api-react-app.vercel.app/"
    },
    {
        title:'Ighopay',
        image:sampel_img_8,
        stacks:['html', 'css', 'Nuxt', 'Javascript', 'Vuex'],
        type: 'vue',
        url: "http://hospitals.eirs.gov.ng/"
    },
    {
        title:'CornieHealth',
        image:sampel_img_7,
        stacks:['html', 'css', 'vue 3', 'Nuxt', 'TypeScript', 'Vuex'],
        type: 'vue',
        url: "https://corniehealth.com/"
    },
    {
        title:'E-Learning Landing Page',
        image:sampel_img_2,
        stacks:['html', 'css', 'vue 3', 'vite', 'pinia'],
        type: 'vue',
        url: "https://e-skills.netlify.app/"
    },
    {
        title:'Todo Web App',
        image:sampel_img_3,
        stacks:['html', 'css', 'vuejs', 'vuex' ],
        type: 'vue',
        url: "https://anntodoapp.netlify.app/"
    },
    {
        title:'URL Shortener',
        image:sampel_img_4,
        stacks:['html', 'css', 'vue', 'javascript' ],
        type: 'vue',
        url: "https://shortenlink.netlify.app/"
    },
    {
        title:'Product Feedback',
        image:sampel_img_5,
        stacks:['html', 'css', 'javascript', 'vue', 'vuex' ],
        url: "https://product-feedbacks.netlify.app/",
        type: 'vue'
    },
    {
        title:'Chuck Norris Jokes',
        image:sampel_img_6,
        stacks:['html', 'css', 'javascript', "vue 3", "vite", "pinia"],
        url: "https://hannah-anamen-technical-assessment.netlify.app/",
        type: "vue"
    },
]



export {
    projects,
}
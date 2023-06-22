import blog_img_1 from '../assests/images/blog/nuxt_pinia.png'
import blog_img_2 from '../assests/images/blog/aws_network_topology.png'

const articles = [
    // Frontend
    {
        title:'Managing state with Pinia and Nuxt 3 - Using a simple add to cart instance',
        image:blog_img_1,
        desc: "This article focuses on Pinia as a state management library and how it is used in Nuxt applications.",
        type: 'frontend development',
        url: "https://dev.to/hannahadora/managing-state-with-pinia-and-nuxt-3-using-a-simple-add-to-cart-instance-1faf"
    },

    // DevOps
    {
        title:'Building a Scalable Network Infrastructure on AWS',
        image:blog_img_2,
        desc:"This article explores how to build a scalable network infrastructure on AWS using the AWS Management Console. Specifically, we will focus on setting up a Virtual Private Cloud (VPC) with private and public subnets, an Internet Gateway (IGW), route tables, and Network Address Translation (NAT) to establish secure and reliable connectivity",
        type: 'devops',
        url: "https://medium.com/@hannahadora97/building-a-scalable-network-infrastructure-on-aws-bcd2e7d4f39c"
    },
   
]



export {
    articles,
}
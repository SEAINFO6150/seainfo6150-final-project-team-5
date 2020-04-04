import React from 'react'
import styles from "./Aboutus.module.css";

const Baz = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row1}>
                <img src="https://image.shutterstock.com/image-photo/healthy-vegan-food-quinoa-lentils-600w-1254071608.jpg"></img>
                <p>Welcome to Foodwali. This is a place where we share our passion with the world - delicious healthy recipes. Everything you see here is made from scratch with non-processed natural foods. Most of our recipes are meat, dairy, gluten, and refined-sugar free, and they contain a list of all of the goodness that you will treat your body to by preparing and eating them. We hope you will love the website just as much as we do. If you have any questions, feel free to contact us or take a look at our philosophy. Have a healthy day eyeryone!</p>
            </div>
            <div className={styles.row2}>
                <h1>Meet the team</h1>
                <div class={styles.team}>
                    <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/12316191_742910982509821_7814111956148214512_n.jpg?_nc_cat=108&_nc_sid=7aed08&_nc_oc=AQlkGH-VCRbTVeOa8tZalU1qKmq2WDlYro5qiFi_kyOprlR9scGdnrh9hVuq1SBirUx0sv1EN3u5_FHPa3lOcgiH&_nc_ht=scontent-sea1-1.xx&oh=62f304c0fc2f2b9880044717c7c7816e&oe=5EAF9F41"></img>
                    <p>Ramya Hebbbar</p>
                </div>
                <div class={styles.team}>
                    <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/25498196_1707264755998084_1215383357448628177_n.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_oc=AQnYcW7D4I9rkWiTyW9NJiKR77Ny6Rz4InmYLgWURp6pKLrOWolhzHEI5CggfPCqAL7KjcU8x7E9-l0A36aARYAz&_nc_ht=scontent-sea1-1.xx&oh=030ff6b87bb988aad84c2f858e18887c&oe=5EAEA128"></img>
                    <p>Megha Bhattad</p>
                </div>
                <div class={styles.team}>
                    <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/21742988_1508879722502474_1086176485839809433_n.jpg?_nc_cat=100&_nc_sid=110474&_nc_oc=AQlSyDihfun8-5DpZUQi0mqYSWRvOmb7fVXN7GwoWMX74pBxLCoZ5HeGOhs0dK0UX5yxObGbK91N6MtCa8b-HZ70&_nc_ht=scontent-sea1-1.xx&oh=41a38f6eacd087cf7ad7c0f7cb48e8df&oe=5EAEC9EC"></img>
                    <p>Bharathi Madhu</p>
                </div>
                <div class={styles.team}>
                    <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/49853227_2110539542366555_2922309204330938368_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_oc=AQm6VKQPbxkadj0AQxjOYlFTqrZykV3b6Xko5L1f9Xj3n95rXuq_7DDDdrfdvvQgGSY4qzNl6TrvVSZSYb-AJ1EO&_nc_ht=scontent-sea1-1.xx&oh=75f76b5c2f68f06dff50e5e775854614&oe=5EAC36FB"></img>
                    <p>Angika Singh</p>
                </div>
            </div>
            <h1>Our current favourites</h1>
            <div className={styles.row3}>
                <div class={styles.recipes}>
                    <img src="https://www.thespruceeats.com/thmb/lWfbtvVQOJvNQkyB7I1V8aFimNc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4247062952_531b892880_o-56a510475f9b58b7d0dabe0a.jpg"></img>
                    <p>Caramel Custard</p>
                </div>
                <div class={styles.recipes}>
                    <img src="https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2013/04/paneer-butter-masala-1.jpg"></img>
                    <p>Paneer Butter Masala</p>
                </div>
                <div class={styles.recipes}>
                    <img src="https://miro.medium.com/max/1024/1*QiBbXowXofmOEH8u8SaX3g.jpeg"></img>
                    <p>Masala Dosa </p>
                </div>
            </div>
            <div className={styles.row4}>
            <a href = ''>Subscribe</a>
            <a href = '/GetInTouch/GetInTouch'>Share your feedback</a>
            <a href = '/GetInTouch/GetInTouch'>Get in touch</a>
            </div>
        </div>
    )
}

export default Baz

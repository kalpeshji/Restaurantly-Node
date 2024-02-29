const express = require('express')
const app = express()
const path = require('path')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));

const specials = [
    { num: '01', dsc: 'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat', title: 'Lorem Ipsum' },
    { num: '02', dsc: 'Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest', title: 'Repellat Nihil' },
    { num: '03', dsc: 'Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis', title: ' Ad ad velit qui' },
]
const menus = [
    { price: '$7.45', dsc: 'Lorem, deren, trataro, filede, nerada', title: 'Lobster Bisque', img: "/image/p1.jpg" },
    { price: '$7.45', dsc: 'Lorem, deren, trataro, filede, nerada', title: 'Bread Barrel', img: "/image/p2.jpg" },
    { price: '$7.45', dsc: 'A delicate crab cake served on a toasted roll with lettuce and tartar sauce', title: 'Crab Cake', img: "/image/p3.jpg" },
    { price: '$7.45', dsc: 'Lorem, deren, trataro, filede, nerada', title: 'Caesar Selections', img: "/image/p4.jpg" },
    { price: '$7.45', dsc: 'Grilled chicken with provolone, artichoke hearts, and roasted red pesto', title: 'Tuscan Grilled', img: "/image/p5.jpg" },
    { price: '$7.45', dsc: 'Lorem, deren, trataro, filede, nerada', title: 'Mozzarella Stick', img: "/image/p6.jpg" },
    { price: '$7.45', dsc: 'Fresh spinach, crisp romaine, tomatoes, and Greek olives', title: 'Greek Salad', img: "/image/p7.jpg" },
    { price: '$7.45', dsc: 'Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette', title: 'Spinach Salad', img: "/image/p8.jpg" },
    { price: '$7.45', dsc: 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll', title: 'Lobster Roll', img: "/image/p9.jpg" },
]
const reviews = [
    { dsc: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum.', img: "/image/u1.jpg", name: 'John Larson', post: 'Entrepreneur' },
    { dsc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.', img: "/image/u2.jpg", name: 'Saul Goodman', post: 'Ceo & Founder' },
    { dsc: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.', img: "/image/u3.jpg", name: 'Sara Wilsson', post: 'Designer' }
]
const gallarys = [
    { img: "/image/r1.jpg" }, { img: "/image/r2.jpg" }, { img: "/image/r3.jpg" }, { img: "/image/r4.jpg" }, { img: "/image/r5.jpg" }, { img: "/image/r6.jpg" }, { img: "/image/r7.jpg" }, { img: "/image/r8.jpg" }
]
const chefs = [
    { img: "/image/c1.jpg", name: 'Walter White', pos: 'Master Chef' },
    { img: "/image/c2.jpg", name: 'Sarah Jhonson', pos: 'Patissier' },
    { img: "/image/c3.jpg", name: 'William Anderson', pos: 'Cook' }
]
app.get('/', function (req, res) {
    res.render('../view/Pages/Home')
})
app.get('/about', function (req, res) {
    res.render('../view/Pages/About', { specials: specials })
})
app.get('/menu', function (req, res) {
    res.render('../view/Pages/Menu', { menus: menus })
})
app.get('/special', function (req, res) {
    res.render('../view/Pages/Special')
})
app.get('/event', function (req, res) {
    res.render('../view/Pages/Event')
})
app.get('/bookatable', function (req, res) {
    res.render('../view/Pages/Book')
})
app.get('/testimonial', function (req, res) {
    res.render('../view/Pages/Testimonial', { reviews: reviews })
})
app.get('/gallary', function (req, res) {
    res.render('../view/Pages/Gallary', { galleries: gallarys })
})
app.get('/chefs', function (req, res) {
    res.render('../view/Pages/Chefs', { chefs: chefs })
})
app.get('/contact', function (req, res) {
    res.render('../view/Pages/Contact')
})
app.listen(8000, () => {
    console.log('App is running on port 8000..');
});

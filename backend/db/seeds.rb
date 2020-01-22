# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Restaurant.destroy_all
User.destroy_all
Employee.destroy_all
Worktime.destroy_all

alex = User.create({username: "a", name: "Alexander van Cappellen", email: "alexvancap@gmail.com", phone: "123456789", password: "a"})

ihop = Restaurant.create({name: "Ihop", revenue: "30000", user: alex, location: "4369, Westheimer Road, Houston Texas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFuvFOchbebbHPuyGUS0533Mm7oX2_xia48dCSOlHaW0w35HRYpg&s"})
kfc = Restaurant.create({name: "KFC", revenue: "40000", user: alex, location: "4369, Kirby drive, Houston Texas", image: "https://i.pinimg.com/474x/23/e6/64/23e664116abe4788c7d8750ab9379b5f--restaurant-logos-fast-food-restaurant.jpg"})

bob = Employee.create({name: "Bob", email: "bob@alex.com", phone: "123456789", role: "manager"})
bobby = Employee.create({name: "Bobby", email: "bobby@alex.com", phone: "123456789", role: "manager"})


wt1 = Worktime.create({startTime: "2020-1-21 09:12:00", endTime: "2020-1-21 20:1:21", employee: bob, restaurant: ihop})

scheme1 = Scheme.create({table: "manager", restaurant: ihop})

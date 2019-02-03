# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Pet.destroy_all

Pet.create([
  {name: "Robin", animal_type: "Cat", breed:"Persian",color: "white",gender: "female",dob: "2017-02-02",city:"Riyadh",location: "Raed", status: "fine", microchip: "4546576",image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/White_Persian_Cat.jpg/220px-White_Persian_Cat.jpg", description: "My lovely cat.",user_id: 1},
    {name: "Parney", animal_type: "Cat", breed:"Persian",color: "gray",gender: "male",dob: "2017-08-02",city:"Riyadh",location: "Raed", status: "fine", microchip: "4546577",image: "https://www.petwave.com/-/media/Images/Center/Breed/Cats/Semi-Long-and-Long-Hair/Persian/Persian-Cat-Sitting.ashx?w=450&hash=820D0D5BF0C1326C641BD219C2352C10B6F28F34", description: "Parney is funny and nice cat.",user_id: 1}

])

Post.destroy_all

Post.create([
  {title: "nice cat", body: "If you're like me, you adore cats. Why do we find these creatures so irresistible? Perhaps like myself, you’ve owned a cat — or more likely, been owned by one. You know the joy that cats can bring, even when they’re being obnoxious. What is it about cats that captures our hearts and enslaves us through their charm?", pet_id: 1 , user_id: 1} ,
    {title: "Robin's birthday", body: "On my cat's birthday the mice did sway And the squirrels did dance around The dogs went nuts when they heard such fuss Hustled out to party down The little birds tap danced all around", pet_id: 1 , user_id: 1} ])


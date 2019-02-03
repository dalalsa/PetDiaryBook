class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :image
      t.string :description
      t.string :animal_type
      t.string :breed
      t.string :color
      t.string :gender
      t.date :dob
      t.string :city
      t.string :location
      t.string :status
      t.string :microchip
      t.integer :user_id
      t.timestamps
    end
  end
end

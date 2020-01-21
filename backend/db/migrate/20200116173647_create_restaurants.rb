class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string(:name)
      t.string(:image)
      t.string(:location)
      t.integer(:revenue)
      t.integer(:user_id)
    end
  end
end

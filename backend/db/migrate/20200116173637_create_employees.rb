class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string(:name)
      t.string(:email)
      t.string(:phone)
      t.string(:role)
      t.integer(:restaurant_id)
    end
  end
end

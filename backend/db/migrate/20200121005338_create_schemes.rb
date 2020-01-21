class CreateSchemes < ActiveRecord::Migration[6.0]
  def change
    create_table :schemes do |t|
      t.string(:table)
      t.integer(:restaurant_id)
    end
  end
end

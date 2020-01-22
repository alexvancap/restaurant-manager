class CreateWorktimes < ActiveRecord::Migration[6.0]
  def change
    create_table :worktimes do |t|
      t.string(:role)
      t.datetime(:startTime)
      t.datetime(:endTime)
      t.integer(:employee_id)
      t.integer(:restaurant_id)
    end
  end
end

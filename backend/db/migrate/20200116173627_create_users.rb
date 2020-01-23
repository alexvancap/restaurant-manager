class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string(:username)
      t.string(:name)
      t.string(:dob)
      t.string(:email)
      t.string(:country)
      t.string(:phone)
      t.string(:password_digest)
    end
  end
end

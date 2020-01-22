# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_21_005338) do

  create_table "employees", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone"
    t.string "mainRole"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "location"
    t.integer "revenue"
    t.integer "user_id"
  end

  create_table "schemes", force: :cascade do |t|
    t.string "table"
    t.integer "restaurant_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "name"
    t.string "email"
    t.string "phone"
    t.string "password_digest"
  end

  create_table "worktimes", force: :cascade do |t|
    t.string "role"
    t.datetime "startTime"
    t.datetime "endTime"
    t.integer "employee_id"
    t.integer "restaurant_id"
  end

end

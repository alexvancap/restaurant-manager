class Employee < ActiveRecord::Base
    belongs_to :restaurant
    belongs_to :user, :through => :restaurants
end
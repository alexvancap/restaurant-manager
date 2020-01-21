class Worktime < ActiveRecord::Base
    belongs_to :restaurant
    belongs_to :employee
end
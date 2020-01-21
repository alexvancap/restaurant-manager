class Employee < ActiveRecord::Base
    has_many :worktimes
    has_many :restaurants, :through => :worktimes
end
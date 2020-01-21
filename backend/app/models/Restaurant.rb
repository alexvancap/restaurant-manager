class Restaurant < ActiveRecord::Base
    belongs_to :user
    has_many :schemes
    has_many :worktimes
    has_many :employees, :through => :worktimes
end
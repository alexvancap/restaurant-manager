class User < ActiveRecord::Base
    has_many :restaurants
    has_many :employees, :through => :restaurants
    has_secure_password
end
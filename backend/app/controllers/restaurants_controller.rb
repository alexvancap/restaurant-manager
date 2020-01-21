class RestaurantsController < ApplicationController
    def get_restaurant
        restaurant = Restaurant.find(params[:id])
        render :json => restaurant, :include =>  
            { :worktimes => { :include => :employee }}, 
            :include => :schemes

            # render json: restaurant.to_json {:include => { :worktimes => { :include => :employee }, :schemes => {} }}
    end
end

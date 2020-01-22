class RestaurantsController < ApplicationController
    def get_restaurant
        restaurant = Restaurant.find(params[:id])
        render :json => restaurant, :include =>  
            { :worktimes => { :include => :employee }, :schemes => {}}
            
            # render json: restaurant.to_json {:include => { :worktimes => { :include => :employee }, :schemes => {} }}
    end
    def update
        self.current_user
        restaurant = Restaurant.find(params[:id])
        restaurant.update({name: params[:name], image: params[:image], location: params[:location], revenue: params[:revenue]})
        render :json => restaurant
    end
end

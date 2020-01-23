class UsersController < ApplicationController
    def login
        user = User.find_by({ username: params[:username] })
        puts params[:password]
        if (user)
            if user.authenticate(params[:password])
                render json: { message: "success", user: user, token: JWT.encode( { id: user.id }, 'rghejrytkuyluyihkgjhfdsghrt;ouilyktjrhfgdsfadwretrxecrvbijktuy123456fuuukgeorgevyhtyegfvytergfd;[]') }
            else
                render json: { message: "wrong passwordd"}
            end
        else
            render json: {message: "user not found"}
        end
        
    end
    
    def signup
        User.create(
            {username: params[:username],
            name: params[:name],
            password: params[:password],
            email: params[:email],
            phone: params[:phone],
            dob: params[:dob],
            country: params[:country]
        })
        render json: {message: "success"}
    end
     def edit
        user = User.find_by({id: params[:id]})
            user.update(
            {username: params[:username],
            name: params[:name],
            password: params[:password],
            email: params[:email],
            phone: params[:phone],
            dob: params[:dob],
            country: params[:country]
        })
        render json: {message: "success"}
     end
            
    
    def get_user_by_token
        user = self.current_user
        render( json: user, include: [ restaurants: {
            include: [ :employees ]
        } ] )
    end

end

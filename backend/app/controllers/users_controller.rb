class UsersController < ApplicationController
    def login
        user = User.find_by({ username: params[:username] })
        puts params[:password]
        puts user.authenticate(params[:password])
        if user.authenticate(params[:password])
            render json: { user: user, token: JWT.encode( { id: user.id }, 'rghejrytkuyluyihkgjhfdsghrt;ouilyktjrhfgdsfadwretrxecrvbijktuy123456fuuukgeorgevyhtyegfvytergfd;[]') }
        else
            render json: { error: "wrong passwordcd"}
        end
    end
    state = {
    name: "",
    username: "",
    password: "",
    email: "",
    phone: ""
  };
    def signup
        User.create(
            {username: params[:username],
            name: params[:name],
            password: params[:password],
            email: params[:email],
            phone: params[:phone]})
        render json: {message: "success"}
        
    end
end

class Api::SessionsController < ApplicationController
  def destroy
    if !current_user
      render json: 'not logged in buddy', status: 404
    else
      logout
      render json: ["No one is logged in"], status: 422
    end
  end 

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ['you dont exist'], status: 422
    end
  end 
end

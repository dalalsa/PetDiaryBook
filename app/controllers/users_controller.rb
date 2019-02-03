class UsersController < ApplicationController
 

  skip_before_action :verify_authenticity_token

  def show
    @user = User.find_by(id: params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @user }
    end
  end
end

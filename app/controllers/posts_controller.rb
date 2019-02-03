class PostsController < ApplicationController
  def index
    @posts = Post.where(pet_id: params[:pet_id])

    respond_to do |format|
      format.html
      format.json { render json: @posts }
    end
    # raise "pry"
  end

  def show
  end

  def new
  end

  def create
  end

  def destroy
  end
end

class PetsController < ApplicationController
  def index
    @pets = Pet.all
    respond_to do |format|
        format.html
        format.json { render json: @pets }
      end
  end

  def show
        @pet= Pet.find_by(id: params[:id])
         respond_to do |format|
        format.html
        format.json { render json: @pet }
      end

  end

  def new
  end

  def create
  end

  def destroy
  end
end

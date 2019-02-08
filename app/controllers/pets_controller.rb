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
    @pet = Pet.new
  end

  def create
    pet = current_user.pets.create(pet_params)
    #pet = pet.create(pet_params)
    #redirect_to pet_path(pet)
  end

  def destroy
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :description, :image, :animal_type, :gender,  :city, :location, :breed, :color,  :status)
  end 
end

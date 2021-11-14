# frozen_string_literal: true

module Api
  module V1
    class FoldersController < ApplicationController
      before_action :set_user
      before_action :set_user_folder, only: %i[show update destroy]

      # GET /folders
      def index
        @folders = @user.folders
        json_response(@folders)
      end

      # POST /folders
      def create
        @folder = @user.folders.create!(folder_params)
        json_response(@folder, :created)
      end

      # GET /folders/:id
      def show
        json_response(@folder)
      end

      # # PUT /folders/:id
      # def update
      #   @folder.update(folder_params)
      #   head :no_content
      # end

      # DELETE /folders/:id
      def destroy
        @folder.destroy
        head :no_content
      end

      private

      def folder_params
        params.permit(:title)
      end

      def set_user
        @user = @current_user
      end

      def set_user_folder
        @folder = @user.folders.find(params[:id])
      end
    end
  end
end

# frozen_string_literal: true

module Api
  module V1
    class TasksController < ApplicationController
      before_action :set_folder
      before_action :set_folder_task, only: %i[show update destroy]

      # GET /folders/:folder_id/tasks
      def index
        json_response(@folder.tasks)
      end

      # GET /folders/:folder_id/tasks/:id
      def show
        json_response(@task)
      end

      # POST /folders/:folder_id/tasks
      def create
        @folder.tasks.create!(task_params)
        json_response(@folder.tasks.find_by(task_params), :created)
      end

      # PUT /folders/:folder_id/tasks/:id
      def update
        @task.update(task_params)
        head :no_content
      end

      # # DELETE /folders/:folder_id/tasks/:id
      # def destroy
      #   @task.destroy
      #   head :no_content
      # end

      private

      def task_params
        params.permit(:name, :done)
      end

      def set_folder
        @folder = @current_user.folders.find(params[:folder_id])
      end

      def set_folder_task
        @task = @folder.tasks.find_by!(id: params[:id]) if @folder
      end
    end
  end
end

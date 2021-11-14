# frozen_string_literal: true

class CreateFolders < ActiveRecord::Migration[6.1]
  def change
    create_table :folders do |t|
      t.string :title

      t.timestamps
    end
  end
end

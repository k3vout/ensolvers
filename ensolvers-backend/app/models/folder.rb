# frozen_string_literal: true

class Folder < ApplicationRecord
  has_many :tasks, dependent: :destroy

  validates_presence_of :title
end

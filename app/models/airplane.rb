# == Schema Information
#
# Table name: airplanes
#
#  id         :integer          not null, primary key
#  name       :string
#  rows       :string
#  columns    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Airplane < ActiveRecord::Base
  has_many :flights

  def self.seat_count(airplane_name)
    airplane_name.rows.to_i * airplane_name.columns
  end
end

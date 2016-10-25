# == Schema Information
#
# Table name: flights
#
#  id            :integer          not null, primary key
#  airplane_id   :integer
#  origin        :string
#  destination   :string
#  date          :date
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  flight_number :integer
#

class Flight < ActiveRecord::Base
  has_many :reservations
  belongs_to :airplane
end

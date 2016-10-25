# == Schema Information
#
# Table name: airplanes
#
#  id         :integer          not null, primary key
#  name       :string
#  row        :string
#  column     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Airplane < ActiveRecord::Base
end

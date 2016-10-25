class CreateAirplanes < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.string :name
      t.string :rows
      t.integer :columns

      t.timestamps null: false
    end
  end
end

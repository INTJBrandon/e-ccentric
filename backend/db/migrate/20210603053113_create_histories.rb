class CreateHistories < ActiveRecord::Migration[6.1]
  def change
    create_table :histories do |t|
      t.integer :total
      t.integer :length
      t.datetime :date
      t.boolean :paid

      t.timestamps
    end
  end
end

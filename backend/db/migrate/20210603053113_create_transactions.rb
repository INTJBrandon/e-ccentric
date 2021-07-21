class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      t.string :total
      t.integer :length
      t.string :date
      t.boolean :paid

      t.timestamps
    end
  end
end

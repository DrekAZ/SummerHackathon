class RenameBodyColumnToTodoLists < ActiveRecord::Migration[6.0]
  def change
    rename_column :todo_lists, :body, :content
  end
end
